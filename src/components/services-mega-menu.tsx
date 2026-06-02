"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import clsx from "clsx";
import { useEffect, useRef } from "react";
import { getCategoryById, serviceMegaMenuColumns, type ServiceCatalogItem } from "@/lib/service-catalog";

const CLOSE_DELAY_MS = 220;

function DropdownServiceLink({
  item,
  onNavigate,
  compact = false,
}: {
  item: ServiceCatalogItem;
  onNavigate?: () => void;
  compact?: boolean;
}) {
  const Icon = item.icon;

  return (
    <Link
      href={`/${item.slug}`}
      onClick={onNavigate}
      className="group flex items-start gap-2.5 rounded-xl px-2 py-2 transition-colors hover:bg-slate-800"
    >
      <span
        className={clsx(
          "mt-0.5 inline-flex shrink-0 items-center justify-center rounded-lg border border-cyan-400/25 bg-cyan-500/10 text-cyan-300",
          compact ? "h-8 w-8" : "h-9 w-9",
        )}
      >
        <Icon size={compact ? 15 : 17} strokeWidth={2.2} />
      </span>
      <span className="min-w-0">
        <span className="block text-sm font-semibold leading-snug text-white group-hover:text-cyan-200">
          {item.title}
        </span>
        {!compact && item.subtitle !== item.title ? (
          <span className="mt-0.5 block text-xs leading-5 text-slate-400">{item.subtitle}</span>
        ) : null}
      </span>
    </Link>
  );
}

function DropdownCategoryBlock({
  categoryId,
  onNavigate,
}: {
  categoryId: string;
  onNavigate?: () => void;
}) {
  const category = getCategoryById(categoryId);
  if (!category) return null;

  const useTwoColumns = category.items.length >= 4;

  return (
    <div>
      <p className="mb-2.5 text-[11px] font-bold uppercase tracking-[0.16em] text-cyan-300">{category.title}</p>
      <div className={clsx("gap-0.5", useTwoColumns ? "grid grid-cols-2 gap-x-2" : "space-y-0.5")}>
        {category.items.map((item) => (
          <DropdownServiceLink
            key={item.slug}
            item={item}
            onNavigate={onNavigate}
            compact={useTwoColumns}
          />
        ))}
      </div>
    </div>
  );
}

type ServicesMegaMenuProps = {
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
  active: boolean;
};

export function ServicesMegaMenu({ open, onOpen, onClose, active }: ServicesMegaMenuProps) {
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    return () => {
      if (closeTimer.current) {
        clearTimeout(closeTimer.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (event: MouseEvent) => {
      if (!menuRef.current?.contains(event.target as Node)) {
        cancelClose();
        onClose();
      }
    };

    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [open, onClose]);

  const cancelClose = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  const scheduleClose = () => {
    cancelClose();
    closeTimer.current = setTimeout(() => {
      onClose();
      closeTimer.current = null;
    }, CLOSE_DELAY_MS);
  };

  const handleEnter = () => {
    cancelClose();
    onOpen();
  };

  const handleNavigate = () => {
    cancelClose();
    onClose();
  };

  return (
    <div ref={menuRef} className="relative" onMouseEnter={handleEnter} onMouseLeave={scheduleClose}>
      <Link
        href="/services"
        onClick={handleNavigate}
        aria-expanded={open}
        aria-haspopup="true"
        className={clsx(
          "relative inline-flex items-center gap-1 whitespace-nowrap py-2 text-[13px] font-medium tracking-wide transition-colors xl:text-sm",
          active || open ? "text-cyan-300" : "text-slate-300 hover:text-white",
        )}
      >
        Services
        <ChevronDown size={14} className={clsx("transition-transform duration-200", open && "rotate-180")} />
        <span
          className={clsx(
            "absolute -bottom-0.5 left-0 h-0.5 rounded-full bg-gradient-to-r from-violet-400 to-cyan-400 transition-all duration-300",
            active || open ? "w-full opacity-100" : "w-0 opacity-0",
          )}
        />
      </Link>

      {open ? (
        <div
          className="absolute left-1/2 top-full z-[200] w-[min(1080px,calc(100vw-1.5rem))] -translate-x-1/2 pt-3 pb-2"
          onMouseEnter={handleEnter}
          onMouseLeave={scheduleClose}
        >
          <div className="overflow-hidden rounded-2xl border border-slate-700 bg-[#0b1224] shadow-[0_20px_48px_rgba(0,0,0,0.65)]">
            <div className="grid md:grid-cols-3">
              {serviceMegaMenuColumns.map((column, columnIndex) => (
                <div
                  key={columnIndex}
                  className={clsx(
                    "space-y-5 p-4 md:p-5",
                    columnIndex > 0 && "border-t border-slate-800 md:border-l md:border-t-0",
                  )}
                >
                  {column.groups.map((group, groupIndex) => (
                    <div key={group.categoryId}>
                      <DropdownCategoryBlock categoryId={group.categoryId} onNavigate={handleNavigate} />
                      {groupIndex < column.groups.length - 1 ? (
                        <div className="my-4 border-t border-slate-800" />
                      ) : null}
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="border-t border-slate-800 bg-slate-900 px-5 py-3 text-center">
              <Link
                href="/services"
                onClick={handleNavigate}
                className="text-sm font-semibold text-cyan-300 hover:text-cyan-200"
              >
                View all services →
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export function MobileServicesMenu({ onNavigate }: { onNavigate: () => void }) {
  return (
    <div className="rounded-xl border border-slate-700/70 bg-slate-900/80 p-3">
      <Link
        href="/services"
        onClick={onNavigate}
        className="mb-3 block px-2 text-sm font-semibold text-cyan-200"
      >
        All Services
      </Link>
      <div className="max-h-72 space-y-4 overflow-y-auto pr-1">
        {serviceMegaMenuColumns.flatMap((column) =>
          column.groups.map((group) => {
            const category = getCategoryById(group.categoryId);
            if (!category) return null;
            return (
              <div key={category.id}>
                <p className="px-2 text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400">
                  {category.title}
                </p>
                <div className="mt-2 space-y-1">
                  {category.items.map((item) => (
                    <Link
                      key={item.slug}
                      href={`/${item.slug}`}
                      onClick={onNavigate}
                      className="block rounded-lg px-2 py-2 text-sm text-slate-100 hover:bg-slate-800"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>
            );
          }),
        )}
      </div>
    </div>
  );
}

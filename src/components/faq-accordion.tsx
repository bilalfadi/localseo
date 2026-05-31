"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export function FaqAccordion({
  items,
}: {
  items: { question: string; answer: string }[];
}) {
  const [active, setActive] = useState(0);

  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const open = active === index;
        return (
          <div key={item.question} className="glass-card rounded-2xl p-5">
            <button
              onClick={() => setActive(open ? -1 : index)}
              className="flex w-full items-center justify-between gap-4 text-left"
            >
              <span className="text-base font-semibold text-white">{item.question}</span>
              <ChevronDown
                size={18}
                className={`text-cyan-300 transition-transform ${open ? "rotate-180" : ""}`}
              />
            </button>
            <AnimatePresence initial={false}>
              {open && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="overflow-hidden pt-3 text-sm leading-6 text-slate-300"
                >
                  {item.answer}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

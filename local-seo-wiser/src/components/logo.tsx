import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";

type LogoProps = {
  compact?: boolean;
  href?: string;
  imgClassName?: string;
};

export function Logo({ compact = false, href = "/", imgClassName }: LogoProps) {
  return (
    <Link href={href} className="inline-flex items-center group">
      <Image
        src="/brand-logo-readable.png"
        alt="Local SEO Wiser logo"
        width={compact ? 210 : 300}
        height={compact ? 84 : 120}
        className={clsx(
          "h-12 w-auto object-contain [filter:contrast(1.18)_brightness(1.1)_saturate(1.08)_drop-shadow(0_4px_8px_rgba(2,6,23,0.45))] sm:h-14 md:h-16",
          imgClassName,
        )}
        priority
      />
    </Link>
  );
}

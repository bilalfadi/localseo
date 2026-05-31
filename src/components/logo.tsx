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
    <Link href={href} className="inline-flex shrink-0 items-center group">
      <Image
        src="/seo-wiser-logo.png"
        alt="SEO Wiser logo"
        width={compact ? 175 : 210}
        height={compact ? 26 : 32}
        className={clsx(
          "h-7 w-auto object-contain sm:h-8 md:h-9",
          imgClassName,
        )}
        priority
      />
    </Link>
  );
}

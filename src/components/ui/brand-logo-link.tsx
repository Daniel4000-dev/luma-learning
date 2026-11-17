"use client";

import Link from "next/link";
import type { ReactNode } from "react";

interface BrandLogoLinkProps {
  children: ReactNode;
  className?: string;
  "aria-label"?: string;
}

export function BrandLogoLink({
  children,
  className,
  "aria-label": ariaLabel = "Luma home",
}: BrandLogoLinkProps) {
  return (
    <Link
      href="/"
      aria-label={ariaLabel}
      className={className}
      onClick={(e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
        if (window.location.hash) {
          window.history.replaceState(null, "", window.location.pathname);
        }
      }}
    >
      {children}
    </Link>
  );
}

"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import { navigation } from "@/app/_data/content";
import { SvgAsset } from "@/components/ui/svg-asset";
import { buttonClass } from "@/components/ui/button";

export function MobileNavigation() {
  const [open, setOpen] = useState(false);
  const trigger = useRef<HTMLButtonElement>(null);

  function onKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key === "Escape" && open) {
      setOpen(false);
      trigger.current?.focus();
    }
  }

  return (
    <div className="lg:hidden" onKeyDown={onKeyDown}>
      <button ref={trigger} type="button" className="flex size-11 items-center justify-center rounded-lg"
        aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} aria-controls="mobile-navigation"
        onClick={() => setOpen(!open)}>
        {open ? <span className="text-[28px] leading-none" aria-hidden="true">×</span> : <SvgAsset name="menuIcon" />}
      </button>
      <nav id="mobile-navigation" aria-label="Mobile navigation" hidden={!open}
        className="mobile-navigation">
        {navigation.map(({ label, href }) => <a key={label} href={href}
          onClick={() => setOpen(false)} className="rounded-lg px-3 py-3 text-base font-semibold hover:bg-blue-soft">{label}</a>)}
        <a href="#courses" onClick={() => setOpen(false)} className={buttonClass("primary", "mt-3")}>Start learning</a>
      </nav>
    </div>
  );
}


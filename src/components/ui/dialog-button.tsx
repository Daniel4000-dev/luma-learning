"use client";

import { useId, useRef, type KeyboardEvent, type MouseEvent, type ReactNode } from "react";
import { cn } from "@/lib/cn";

type DialogButtonProps = {
  title: string;
  trigger: ReactNode;
  children: ReactNode;
  className?: string;
};

/** Native modal semantics and Escape dismissal, with predictable Tab wrapping. */
export function DialogButton({ title, trigger, children, className }: DialogButtonProps) {
  const dialog = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const titleId = useId();

  function close() {
    dialog.current?.close();
    triggerRef.current?.focus({ preventScroll: true });
  }

  function handleDialogClick(event: MouseEvent<HTMLDialogElement>) {
    if (event.target === event.currentTarget) close();
    const target = event.target;
    if (target instanceof Element && target.closest('a[href^="#"]')) {
      dialog.current?.close();
      const link = target.closest<HTMLAnchorElement>('a[href^="#"]');
      if (link) {
        const destination = document.getElementById(link.hash.slice(1));
        // Follow the link normally; move focus to the destination, not a hidden modal.
        requestAnimationFrame(() => destination?.focus({ preventScroll: true }));
      }
    }
  }

  function handleKeyDown(event: KeyboardEvent<HTMLDialogElement>) {
    if (event.key !== "Tab") return;
    const controls = Array.from(event.currentTarget.querySelectorAll<HTMLElement>('button:not(:disabled), a[href], input:not(:disabled), select:not(:disabled), textarea:not(:disabled), [tabindex]:not([tabindex="-1"])'))
      .filter(element => element.getClientRects().length > 0);
    const first = controls[0];
    const last = controls.at(-1);
    const active = event.currentTarget.ownerDocument.activeElement;
    if (event.shiftKey && (active === first || active === event.currentTarget)) {
      event.preventDefault();
      last?.focus();
    } else if (!event.shiftKey && active === last) {
      event.preventDefault();
      first?.focus();
    }
  }

  return (
    <>
      <button ref={triggerRef} type="button" aria-haspopup="dialog"
        className={cn("cursor-pointer", className)}
        onClick={() => dialog.current?.showModal()}>
        {trigger}
      </button>
      <dialog ref={dialog} aria-labelledby={titleId} onClick={handleDialogClick} onKeyDown={handleKeyDown}
        onClose={() => {
          if (document.activeElement === document.body) triggerRef.current?.focus({ preventScroll: true });
        }}
        className="luma-dialog">
        <div className="dialog-panel">
          <div className="mb-6 flex items-start justify-between gap-6">
            <h2 id={titleId} className="font-heading text-2xl font-extrabold leading-8 tracking-tight text-ink">{title}</h2>
            <button type="button" onClick={close} className="dialog-close" aria-label="Close dialog" autoFocus>×</button>
          </div>
          <div className="dialog-content">{children}</div>
        </div>
      </dialog>
    </>
  );
}


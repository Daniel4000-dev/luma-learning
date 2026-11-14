import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/cn";

export type ButtonVariant = "primary" | "secondary" | "yellow" | "text";
export function buttonClass(variant: ButtonVariant = "primary", className?: string) {
  return cn("button", `button-${variant}`, className);
}

type ButtonProps = ComponentPropsWithoutRef<"button"> & { variant?: ButtonVariant };
export function Button({ variant = "primary", className, type = "button", ...props }: ButtonProps) {
  return <button type={type} className={buttonClass(variant, className)} {...props} />;
}

type ButtonLinkProps = ComponentPropsWithoutRef<"a"> & { variant?: ButtonVariant };
export function ButtonLink({ variant = "primary", className, ...props }: ButtonLinkProps) {
  return <a className={buttonClass(variant, className)} {...props} />;
}


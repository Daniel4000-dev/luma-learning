import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  id: string;
  description?: string;
  centered?: boolean;
  light?: boolean;
  className?: string;
};

export function SectionHeading({ eyebrow, title, id, description, centered, light, className }: SectionHeadingProps) {
  return (
    <div className={cn(centered && "text-center", className)}>
      <p className={cn("eyebrow", light ? "text-white" : "text-brand")}>{eyebrow}</p>
      <h2 id={id} className={cn("section-title mt-4", light && "text-white")}>{title}</h2>
      {description && <p className={cn("section-description mt-4", light ? "text-white" : "text-muted")}>{description}</p>}
    </div>
  );
}


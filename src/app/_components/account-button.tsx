import { DialogButton } from "@/components/ui/dialog-button";
import { ButtonLink, buttonClass, type ButtonVariant } from "@/components/ui/button";

export function AccountButton({ children, className, variant }: { children: React.ReactNode; className?: string; variant?: ButtonVariant }) {
  return (
    <DialogButton title="Your next chapter starts here" trigger={children} className={variant ? buttonClass(variant, className) : className}>
      <p>This is a Luma learning demo. Accounts and enrolment are not connected, but you can explore the course preview and try the contact form.</p>
      <ButtonLink href="#courses" className="mt-6">Explore courses</ButtonLink>
    </DialogButton>
  );
}


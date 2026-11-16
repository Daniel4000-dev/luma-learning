import { contactDescription } from "@/app/_data/content";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { SvgAsset } from "@/components/ui/svg-asset";
import { ContactForm } from "./contact-form";

export function Contact() {
  return (
    <section id="contact" tabIndex={-1} aria-labelledby="contact-heading" className="section-space scroll-mt-18 bg-white">
      <Container className="contact-grid">
        <div>
          <SectionHeading id="contact-heading" eyebrow="Contact" title="Get in touch" />
          <p className="mt-4 text-sm leading-6 text-muted lg:text-lg lg:leading-7">{contactDescription}</p>
          <div className="mt-8 space-y-4 lg:mt-10">
            <div className="contact-card">
              <span className="contact-icon"><SvgAsset name="contactEmail" /></span>
              <dl><dt className="text-sm font-semibold leading-6">Email</dt><dd><a className="text-sm leading-6 text-brand hover:underline" href="mailto:contact@luma.com">contact@luma.com</a></dd></dl>
            </div>
            <div className="contact-card">
              <span className="contact-icon"><SvgAsset name="contactClock" className="hidden lg:block" /><SvgAsset name="contactClockMobile" className="lg:hidden" /></span>
              <dl><dt className="text-sm font-semibold leading-6">Response Time</dt><dd className="text-sm leading-6 text-muted">Up to 24 hours on business days.</dd></dl>
            </div>
          </div>
        </div>
        <ContactForm />
      </Container>
    </section>
  );
}

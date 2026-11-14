import { Container } from "@/components/ui/container";
import { SvgAsset } from "@/components/ui/svg-asset";
import { DialogButton } from "@/components/ui/dialog-button";
import { ButtonLink } from "@/components/ui/button";

const information = {
  Careers: { title: "Careers at Luma", copy: "This challenge demonstrates Luma’s landing page. There are no live job listings connected to this preview." },
  Journal: { title: "The Luma journal", copy: "Stories and articles are outside this landing-page demo. Explore the course categories to see the sample learning topics." },
  "Help Center": { title: "How can we help?", copy: "Explore courses by topic, view the featured course outline, or use the contact form to try the enquiry flow. This preview uses local sample content." },
  Terms: { title: "Demo terms", copy: "This is a frontend challenge implementation, not a live learning service. It does not sell courses, create accounts or process payments. Production terms must be provided before a public launch." },
  Privacy: { title: "Privacy in this demo", copy: "This app includes no analytics or tracking integrations. Contact details are validated in your browser and are not transmitted or stored by this app. Closing or refreshing the page clears the form state." },
} as const;

function InfoLink({ label }: { label: keyof typeof information }) {
  const info = information[label];
  return <DialogButton title={info.title} trigger={label} className="footer-link">
    <p>{info.copy}</p><ButtonLink href={label === "Journal" ? "#courses" : "#contact"} className="mt-6">{label === "Journal" ? "Explore courses" : "Get in touch"}</ButtonLink>
  </DialogButton>;
}

export function SiteFooter() {
  return (
    <footer className="bg-ink pb-5 pt-15 text-white lg:pb-10 lg:pt-20">
      <Container>
        <div className="footer-grid">
          <div className="footer-brand"><a href="#top" aria-label="Luma, back to top" className="block w-fit rounded"><SvgAsset name="logoLight" /></a><p className="mt-3 text-sm leading-6 text-footer-muted lg:max-w-60">Practical learning for curious people.</p></div>
          <nav aria-labelledby="footer-explore"><h2 id="footer-explore" className="eyebrow">Explore</h2><ul className="footer-links">
            <li><a href="#courses" className="footer-link">Courses</a></li><li><a href="#courses" className="footer-link">Categories</a></li><li><a href="#community" className="footer-link">Instructors</a></li><li><a href="#contact" className="footer-link">For Teams</a></li>
          </ul></nav>
          <nav aria-labelledby="footer-company"><h2 id="footer-company" className="eyebrow">Company</h2><ul className="footer-links">
            <li><a href="#how-it-works" className="footer-link">About</a></li><li><InfoLink label="Careers" /></li><li><InfoLink label="Journal" /></li>
          </ul></nav>
          <nav aria-labelledby="footer-support"><h2 id="footer-support" className="eyebrow">Support</h2><ul className="footer-links">
            <li><InfoLink label="Help Center" /></li><li><a href="#contact" className="footer-link">Contact</a></li><li><InfoLink label="Terms" /></li><li><InfoLink label="Privacy" /></li>
          </ul></nav>
        </div>
        <p className="mt-12 border-t border-white/30 pt-6 text-center text-[13px] leading-[19.5px] text-footer-muted lg:mt-16 lg:text-left">© 2026 Luma Learning</p>
      </Container>
    </footer>
  );
}

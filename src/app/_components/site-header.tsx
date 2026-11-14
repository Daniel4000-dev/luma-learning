import { Container } from "@/components/ui/container";
import { SvgAsset } from "@/components/ui/svg-asset";
import { buttonClass } from "@/components/ui/button";
import { navigation } from "@/app/_data/content";
import { MobileNavigation } from "./mobile-navigation";
import { AccountButton } from "./account-button";

export function SiteHeader() {
  return (
    <header className="relative z-20 border-b border-line bg-warm">
      <Container className="header-inner flex h-17 items-center justify-between lg:h-[69px]">
        <a href="#top" aria-label="Luma home" className="inline-flex rounded"><SvgAsset name="logoDark" /></a>
        <nav aria-label="Main navigation" className="hidden items-center gap-8 text-sm leading-6 text-muted lg:flex">
          {navigation.map(({ label, href }) => <a className="nav-link" key={label} href={href}>{label}</a>)}
        </nav>
        <div className="hidden items-center gap-2 lg:flex">
          <AccountButton className="rounded-lg px-4 py-2.5 text-sm leading-6 text-muted hover:text-brand">Log in</AccountButton>
          <a href="#courses" className={buttonClass("primary", "header-cta")}>Start learning</a>
        </div>
        <MobileNavigation />
      </Container>
    </header>
  );
}


import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";
import { AvatarStack } from "@/components/ui/avatar-stack";
import { SvgAsset } from "@/components/ui/svg-asset";
import { AccountButton } from "./account-button";

function CtaDecorations() {
  return <div className="cta-decorations" aria-hidden="true">
    <i className="cta-circle-outline cta-circle-one" /><i className="cta-circle-outline cta-circle-two" /><i className="cta-circle-outline cta-circle-three" />
    <i className="cta-square-outline" /><i className="cta-square-one" /><i className="cta-square-two" /><i className="cta-circle-fill" />
    {([1, 2, 3, 4, 5] as const).map(number => <SvgAsset key={number} name={`ctaDecoration${number}`} className={`cta-svg cta-svg-${number}`} />)}
  </div>;
}

export function FinalCta() {
  return (
    <section aria-labelledby="cta-heading" className="section-space relative overflow-clip bg-cta-yellow text-center">
      <CtaDecorations />
      <Container className="relative z-1 flex flex-col items-center">
        <AvatarStack count={4} size={40} yellow />
        <h2 id="cta-heading" className="cta-title mt-8">What will you learn next?</h2>
        <p className="mt-4 text-base leading-6.5 text-muted lg:text-lg lg:leading-7">Start with one course. Build from there.</p>
        <div className="mt-10 flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row">
          <ButtonLink href="#courses">Explore all courses</ButtonLink>
          <AccountButton variant="secondary">Join Luma</AccountButton>
        </div>
      </Container>
    </section>
  );
}

import { learningSteps } from "@/app/_data/content";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function HowItWorks() {
  return (
    <section id="how-it-works" tabIndex={-1} aria-labelledby="how-heading" className="section-space bg-warm">
      <Container>
        <SectionHeading id="how-heading" eyebrow="How Luma works" title="Less browsing. More learning." centered />
        <ol className="learning-steps">
          {learningSteps.map(step => (
            <li key={step.number} className="learning-step">
              <div className={`step-icon step-icon-${step.theme}`} aria-hidden="true"><span /></div>
              <p className="eyebrow mt-6 text-muted">Step {step.number}</p>
              <h3 className="mt-2 font-heading text-xl font-bold leading-7 lg:leading-8">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted lg:text-base lg:leading-7">{step.description}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}

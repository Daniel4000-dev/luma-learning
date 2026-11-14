import Image from "next/image";
import { assets } from "@/lib/assets";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";
import { AvatarStack } from "@/components/ui/avatar-stack";
import { SvgAsset } from "@/components/ui/svg-asset";

function HeroVisual() {
  return (
    <div className="hero-visual">
      <div className="hero-orange" aria-hidden="true" />
      <div className="hero-circle" aria-hidden="true" />
      <div className="hero-photo">
        <Image src={assets.heroLearner.src} fill preload sizes="(min-width: 1280px) 500px, (min-width: 1024px) 42vw, (min-width: 640px) 500px, calc(100vw - 56px)"
          alt="A learner smiling while working at a laptop" className="object-cover" />
      </div>
      <div className="hero-badge hero-course-badge">
        <span className="rounded-lg bg-blue-soft px-1 py-1 text-sm font-bold leading-6 text-brand">120+</span>
        <span className="text-sm leading-6">expert-led courses</span>
      </div>
      <div className="hero-badge hero-rating-badge">
        <span className="flex gap-0.5" aria-hidden="true">
          {Array.from({ length: 5 }, (_, i) => <SvgAsset key={i} name="ratingStar" />)}
        </span>
        <span className="text-sm leading-6">4.9 avg rating</span>
      </div>
    </div>
  );
}

export function HeroSection() {
  return (
    <section aria-labelledby="hero-heading" className="section-space overflow-clip bg-warm">
      <Container className="hero-grid">
        <div className="order-2 lg:order-1">
          <p className="eyebrow text-brand">Learn at your own pace</p>
          <h1 id="hero-heading" className="hero-title mt-4">Build skills that actually move you forward.</h1>
          <p className="section-description mt-6 max-w-120 text-muted">Practical courses taught by people who do the work every day. Learn design, technology, business and more — one focused lesson at a time.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="#courses">Explore courses</ButtonLink>
            <ButtonLink href="#how-it-works" variant="secondary">See how it works</ButtonLink>
          </div>
          <div className="mt-8 flex items-center justify-center gap-3 text-sm leading-6 sm:justify-start">
            <AvatarStack />
            <p><strong className="font-bold">Trusted by 24,000+</strong><span className="text-muted"> learners</span></p>
          </div>
        </div>
        <div className="order-1 min-w-0 lg:order-2"><HeroVisual /></div>
      </Container>
    </section>
  );
}


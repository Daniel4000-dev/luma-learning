import Image from "next/image";
import { featuredCourse } from "@/app/_data/content";
import { assets } from "@/lib/assets";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { buttonClass } from "@/components/ui/button";
import { DialogButton } from "@/components/ui/dialog-button";
import { SvgAsset } from "@/components/ui/svg-asset";
import { ButtonLink } from "@/components/ui/button";

export function FeaturedCourse() {
  return (
    <section id="featured-course" tabIndex={-1} aria-labelledby="featured-heading" className="section-space bg-brand text-white">
      <Container className="featured-grid">
        <div className="relative">
          <div className="featured-photo relative overflow-hidden rounded-2xl">
            <Image src={assets.featuredCourse.src} fill sizes="(min-width: 1280px) 538px, (min-width: 1024px) 45vw, (min-width: 640px) 70vw, calc(100vw - 40px)"
              alt="A student working on product design materials at a desk" className="object-cover" />
          </div>
          <span className="eyebrow absolute -left-3 -top-3 rounded-md bg-yellow px-3 py-1.5 text-ink">Featured Course</span>
        </div>
        <div>
          <SectionHeading id="featured-heading" eyebrow="Most popular this month" title={featuredCourse.title} light />
          <p className="mt-5 text-sm leading-6 lg:text-base lg:leading-7">{featuredCourse.description}</p>
          <p className="mt-6 text-sm leading-6 lg:text-base lg:leading-7">with {featuredCourse.instructor}</p>
          <ul className="mt-6 flex flex-wrap gap-3 text-sm leading-6" aria-label="Course details">
            {featuredCourse.metadata.map(item => <li key={item} className="rounded-lg border border-line px-3.5 py-1.5">{item}</li>)}
          </ul>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-start">
            <DialogButton title={featuredCourse.title} className={buttonClass("yellow")} trigger="View course">
              <p>{featuredCourse.description}</p>
              <p className="mt-3 text-sm">with {featuredCourse.instructor} · {featuredCourse.metadata.join(" · ")}</p>
              <h3 className="mt-6 font-heading text-lg font-bold text-ink">Sample course outline</h3>
              <ol className="mt-3 list-decimal space-y-2 pl-5">{featuredCourse.lessons.map(lesson => <li key={lesson}>{lesson}</li>)}</ol>
              <p className="mt-5 text-sm text-muted">This preview uses local sample data. Enrolment and lesson playback are not connected.</p>
              <ButtonLink href="#contact" className="mt-6">Ask about this course</ButtonLink>
            </DialogButton>
            <a href="#courses" className="inline-flex min-h-13 items-center justify-center gap-2 rounded-lg px-4 py-3.5 text-sm font-bold leading-6 text-white hover:bg-white/10">
              Browse all courses <SvgAsset name="featuredArrow" />
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}


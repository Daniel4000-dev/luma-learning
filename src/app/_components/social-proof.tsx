import Image from "next/image";
import { assets } from "@/lib/assets";
import { statistics } from "@/app/_data/content";
import { Container } from "@/components/ui/container";
import { SvgAsset } from "@/components/ui/svg-asset";

export function SocialProof() {
  return (
    <section aria-label="Our learners’ experience" className="section-space bg-white">
      <Container className="social-proof-grid">
        <figure className="max-w-150">
          <SvgAsset name="quoteMark" />
          <blockquote className="mt-4 font-heading text-xl font-semibold leading-8 lg:text-3xl lg:leading-11 lg:tracking-[-0.025em]">
            The lessons are short enough to fit into my week, but detailed enough that I actually leave with something I can use.
          </blockquote>
          <figcaption className="mt-8 flex items-center gap-4">
            <Image src={assets.testimonialAlexMorgan.src} width={48} height={48} alt="" className="rounded-full" />
            <div><p className="text-base font-bold leading-7">Alex Morgan</p><p className="text-sm leading-6 text-subtle">Product Manager</p></div>
          </figcaption>
        </figure>
        <dl className="learning-statistics">
          {statistics.map(stat => <div key={stat.value}>
            <dt className="stat-label">{stat.label}</dt>
            <dd className="stat-value">{stat.value}</dd>
          </div>)}
        </dl>
      </Container>
    </section>
  );
}

import Image from "next/image";
import type { CSSProperties } from "react";
import { assets } from "@/lib/assets";
import { collagePhotos } from "@/app/_data/collage";
import { communityCopy } from "@/app/_data/content";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ButtonLink } from "@/components/ui/button";

function CommunityCollage() {
  return (
    <div className="community-collage" role="img" aria-label="A collage of international students and teachers creating, studying and working together">
      <div className="collage-circle" />
      {collagePhotos.map(photo => {
        const [dx, dy, dw, dh] = photo.desktop;
        const [mx, my, mw, mh] = photo.mobile;
        const style = {
          "--dx": `${dx / 530 * 100}%`, "--dy": `${dy / 522.4384 * 100}%`,
          "--dw": `${dw / 530 * 100}%`, "--dh": `${dh / 522.4384 * 100}%`,
          "--mx": `${mx / 362 * 100}%`, "--my": `${my / 309.5 * 100}%`,
          "--mw": `${mw / 362 * 100}%`, "--mh": `${mh / 309.5 * 100}%`,
        } as CSSProperties;
        return <div key={photo.asset} className="collage-photo" style={style}>
          <Image src={assets[photo.asset].src} fill alt="" sizes="(min-width: 1024px) 140px, 100px" className="object-cover" />
        </div>;
      })}
    </div>
  );
}

export function Community() {
  return (
    <section id="community" tabIndex={-1} aria-labelledby="community-heading" className="section-space bg-warm">
      <Container className="community-grid">
        <div>
          <SectionHeading id="community-heading" eyebrow="The people" title="Meet international students & teachers" className="[&_h2]:mt-2" />
          <p className="mt-6 text-base leading-6.5 text-ink lg:mt-8 lg:text-lg lg:leading-7 lg:text-muted">{communityCopy}</p>
          <ButtonLink href="#contact" variant="secondary" className="mt-6 lg:mt-8">Explore teachers and students</ButtonLink>
        </div>
        <CommunityCollage />
      </Container>
    </section>
  );
}

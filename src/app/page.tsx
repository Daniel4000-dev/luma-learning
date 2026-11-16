import { SiteHeader } from "./_components/site-header";
import { HeroSection } from "./_components/hero-section";
import { CourseCategories } from "./_components/course-categories";
import { FeaturedCourse } from "./_components/featured-course";
import { HowItWorks } from "./_components/how-it-works";
import { SocialProof } from "./_components/social-proof";
import { Community } from "./_components/community";
import { Contact } from "./_components/contact";
import { FinalCta } from "./_components/final-cta";
import { SiteFooter } from "./_components/site-footer";

export default function HomePage() {
  return <div id="top">
    <SiteHeader />
    <main id="main-content" tabIndex={-1}>
      <HeroSection />
      <CourseCategories />
      <FeaturedCourse />
      <HowItWorks />
      <SocialProof />
      <Community />
      <Contact />
      <FinalCta />
    </main>
    <SiteFooter />
  </div>;
}

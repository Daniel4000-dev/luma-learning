import { categories, type Category } from "@/app/_data/content";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { SvgAsset } from "@/components/ui/svg-asset";
import { DialogButton } from "@/components/ui/dialog-button";
import { ButtonLink } from "@/components/ui/button";

function CategoryCard({ category }: { category: Category }) {
  return (
    <DialogButton title={category.title} className="category-card text-left"
      trigger={<>
        <span className="block h-[46.5px]"><span className="eyebrow inline-flex rounded-md bg-blue-soft px-2 py-1 text-brand">{category.number}</span></span>
        <span className="font-heading text-xl font-bold leading-7 lg:leading-8">{category.title}</span>
        <span className="mt-3 block text-sm leading-6 text-subtle">{category.description}</span>
        <span className="mt-auto flex items-center gap-2 pt-6 text-sm font-bold leading-6">Explore <SvgAsset name="categoryArrow" /></span>
      </>}>
      <p>{category.description}</p>
      <h3 className="mt-6 font-heading text-lg font-bold text-ink">A preview of what you could learn</h3>
      <ul className="mt-3 list-disc space-y-2 pl-5">{category.topics.map(topic => <li key={topic}>{topic}</li>)}</ul>
      <p className="mt-5 text-sm text-muted">These are sample learning topics for this demo.</p>
      <ButtonLink href="#contact" className="mt-6">Ask about this subject</ButtonLink>
    </DialogButton>
  );
}

export function CourseCategories() {
  return (
    <section id="courses" tabIndex={-1} aria-labelledby="categories-heading" className="section-space bg-white">
      <Container>
        <SectionHeading id="categories-heading" eyebrow="Find your next skill" title="Learn something worth knowing."
          description="Short, practical courses designed around skills you can put to work immediately." className="max-w-140" />
        <div className="mt-12 grid auto-rows-fr grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-10 lg:grid-cols-4 lg:gap-5">
          {categories.map(category => <CategoryCard key={category.id} category={category} />)}
        </div>
      </Container>
    </section>
  );
}


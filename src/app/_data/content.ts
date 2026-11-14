export const navigation = [
  { label: "Courses", href: "#courses" },
  { label: "For Teams", href: "#contact" },
  { label: "Community", href: "#community" },
  { label: "About", href: "#how-it-works" },
] as const;

export type Category = {
  id: string;
  number: string;
  title: string;
  description: string;
  topics: readonly string[];
};

export const categories: readonly Category[] = [
  { id: "design", number: "01", title: "Product Design", description: "Turn complex problems into clear, useful experiences.", topics: ["Understand your users", "Structure a clear user journey", "Prototype and test an idea"] },
  { id: "technology", number: "02", title: "Technology", description: "Build a stronger understanding of the tools shaping digital products.", topics: ["How the web works", "Build an accessible interface", "Use technology to solve a real problem"] },
  { id: "business", number: "03", title: "Business", description: "Develop practical skills for better decisions and stronger teams.", topics: ["Frame the right problem", "Turn evidence into decisions", "Communicate with your team"] },
  { id: "creative", number: "04", title: "Creative", description: "Explore new ways to communicate, create and tell stories.", topics: ["Find a story worth telling", "Develop a visual idea", "Make and refine your first project"] },
];

export const featuredCourse = {
  title: "Designing products people understand.",
  description: "Learn how to turn complex workflows into simple, intentional product experiences through research, structure and thoughtful interaction design.",
  instructor: "Maya Chen · Senior Product Designer",
  metadata: ["8 lessons", "2h 40min", "Intermediate"],
  lessons: [
    "Start with the problem",
    "Listen to your users",
    "Map the current experience",
    "Build a clear information structure",
    "Sketch useful interactions",
    "Create a focused prototype",
    "Test and learn",
    "Put it all into practice",
  ],
} as const;

export const learningSteps = [
  { number: "01", title: "Choose your focus", description: "Find courses based on the skill you want to build, not endless content categories.", theme: "blue" },
  { number: "02", title: "Learn from experience", description: "Follow concise lessons created by professionals who use these skills.", theme: "orange" },
  { number: "03", title: "Put it into practice", description: "Every course includes practical exercises designed to turn knowledge into action.", theme: "yellow" },
] as const;

export const statistics = [
  { value: "24K+", label: "active learners" },
  { value: "120+", label: "expert-led courses" },
  { value: "92%", label: "complete their first course" },
] as const;

export const communityCopy = "Morbi sit egestas dignissim pharetra, sed amet. Tempus justo senectus risus ac vel, velit, nunc. Eget commodo eget in aliquam facilisi facilisi nec magna hendrerit. Placerat ipsum sit tellus urna, faucibus aenean lorem faucibus integer.";

export const contactDescription = "Have a question? We’re here to help. Whether you’re looking for the right course, learning with your team or interested in teaching with Luma, we’d love to hear from you.";


import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { SectionHeading } from "./section-heading";

const meta = {
  title: "Components/Section heading",
  component: SectionHeading,
  args: { id: "example-heading", eyebrow: "Find your next skill", title: "Learn something worth knowing.", description: "Short, practical courses designed around skills you can put to work immediately." },
  decorators: [Story => <div className="max-w-140 p-5"><Story /></div>],
} satisfies Meta<typeof SectionHeading>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
export const Centered: Story = { args: { centered: true, eyebrow: "How Luma works", title: "Less browsing. More learning.", description: undefined } };
export const OnBlue: Story = { args: { light: true }, decorators: [Story => <div className="rounded-xl bg-brand p-6"><Story /></div>] };

import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import HomePage from "./page";

const meta = {
  title: "Pages/Landing page",
  component: HomePage,
  parameters: { layout: "fullscreen", docs: { description: { component: "Complete page composition for visual review at the Figma frame sizes. Measure real performance against next build + next start, not the Storybook development canvas." } } },
} satisfies Meta<typeof HomePage>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Desktop: Story = { globals: { viewport: { value: "desktop", isRotated: false } } };
export const Mobile: Story = { globals: { viewport: { value: "mobile", isRotated: false } } };

import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect, within } from "storybook/test";
import { MobileNavigation } from "./mobile-navigation";

const meta = {
  title: "Navigation/Mobile navigation",
  component: MobileNavigation,
  globals: { viewport: { value: "mobile", isRotated: false } },
  // Storybook's iframe targets its parent by default. Keep sample anchor clicks
  // in this isolated story while still exercising the navigation's own handler.
  decorators: [Story => <div onClick={event => {
    if (event.target instanceof Element && event.target.closest('a[href^="#"]')) event.preventDefault();
  }} className="relative flex h-17 max-w-100 items-center justify-end border-b border-line px-5"><Story /></div>],
} satisfies Meta<typeof MobileNavigation>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Collapsed: Story = {};
export const Expanded: Story = {
  play: async ({ canvas, userEvent }) => {
    await userEvent.click(canvas.getByRole("button", { name: "Open navigation" }));
    await expect(canvas.getByRole("navigation", { name: "Mobile navigation" })).toBeVisible();
  },
};
export const EscapeAndLinkDismissal: Story = {
  play: async ({ canvas, userEvent }) => {
    await userEvent.click(canvas.getByRole("button", { name: "Open navigation" }));
    await userEvent.keyboard("{Escape}");
    await expect(canvas.getByRole("button", { name: "Open navigation" })).toHaveFocus();
    await userEvent.click(canvas.getByRole("button", { name: "Open navigation" }));
    await userEvent.click(within(canvas.getByRole("navigation")).getByRole("link", { name: "Courses" }));
    await expect(canvas.getByRole("button", { name: "Open navigation" })).toHaveAttribute("aria-expanded", "false");
  },
};

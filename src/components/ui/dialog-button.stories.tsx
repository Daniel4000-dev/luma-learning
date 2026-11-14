import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect, within } from "storybook/test";
import { DialogButton } from "./dialog-button";
import { buttonClass } from "./button";

const meta = {
  title: "Components/Dialog",
  component: DialogButton,
  args: {
    title: "Product Design",
    trigger: "Explore Product Design",
    className: buttonClass("primary"),
    children: <><p>Learn to turn complex problems into clear, useful experiences.</p><a href="#example-target" className={buttonClass("primary", "mt-6")}>Ask about this subject</a></>,
  },
  parameters: { docs: { description: { component: "A native modal dialog with a named heading, close control, keyboard focus wrapping, Escape dismissal and focus restoration. In-page links close it and focus their destination." } } },
} satisfies Meta<typeof DialogButton>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Closed: Story = {};
export const Open: Story = {
  play: async ({ canvas, userEvent }) => {
    await userEvent.click(canvas.getByRole("button", { name: "Explore Product Design" }));
    await expect(canvas.getByRole("dialog", { name: "Product Design" })).toBeVisible();
  },
};
export const KeyboardAndClose: Story = {
  play: async ({ canvas, userEvent, step }) => {
    const trigger = canvas.getByRole("button", { name: "Explore Product Design" });
    await step("Open and focus the close control", async () => {
      await userEvent.click(trigger);
      const dialog = canvas.getByRole("dialog");
      await expect(within(dialog).getByRole("button", { name: "Close dialog" })).toHaveFocus();
    });
    await step("Wrap focus in both directions", async () => {
      const dialog = within(canvas.getByRole("dialog"));
      await userEvent.tab({ shift: true });
      await expect(dialog.getByRole("link", { name: "Ask about this subject" })).toHaveFocus();
      await userEvent.tab();
      await expect(dialog.getByRole("button", { name: "Close dialog" })).toHaveFocus();
    });
    await step("Close and return focus to the trigger", async () => {
      await userEvent.click(canvas.getByRole("button", { name: "Close dialog" }));
      await expect(canvas.queryByRole("dialog")).not.toBeInTheDocument();
      await expect(trigger).toHaveFocus();
    });
  },
};

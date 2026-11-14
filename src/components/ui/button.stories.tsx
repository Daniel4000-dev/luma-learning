import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect, fn } from "storybook/test";
import { Button, ButtonLink } from "./button";

const meta = {
  title: "Components/Button",
  component: Button,
  args: { children: "Explore courses", onClick: fn() },
  argTypes: { variant: { control: "select", options: ["primary", "secondary", "yellow", "text"] } },
  parameters: { docs: { description: { component: "Use a button for an action and ButtonLink for navigation. Both use the same variant tokens and visible keyboard focus style." } } },
} satisfies Meta<typeof Button>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { variant: "primary" },
  play: async ({ canvas, userEvent, args }) => {
    await userEvent.click(canvas.getByRole("button", { name: "Explore courses" }));
    await expect(args.onClick).toHaveBeenCalledOnce();
  },
};
export const Secondary: Story = { args: { variant: "secondary", children: "See how it works" } };
export const Yellow: Story = { args: { variant: "yellow", children: "View course" } };
export const Text: Story = { args: { variant: "text", children: "Learn more" } };
export const NavigationLink: Story = {
  render: () => <ButtonLink href="#course-example">Explore courses</ButtonLink>,
  parameters: { docs: { description: { story: "Native anchor semantics are used for page navigation. This isolated example does not contain the destination section." } } },
};

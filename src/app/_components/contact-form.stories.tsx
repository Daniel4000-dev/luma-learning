import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect } from "storybook/test";
import { ContactForm } from "./contact-form";

const meta = {
  title: "Forms/Contact form",
  component: ContactForm,
  decorators: [Story => <div className="max-w-135"><Story /></div>],
  parameters: { docs: { description: { component: "The actual enquiry form. Validation is local; valid submissions explicitly state that no message was sent or saved. Stories use fictional QA details only." } } },
} satisfies Meta<typeof ContactForm>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Empty: Story = {};
export const RequiredErrors: Story = {
  play: async ({ canvas, userEvent }) => {
    await userEvent.click(canvas.getByRole("button", { name: "Send message" }));
    await expect(canvas.getByLabelText("Full name")).toHaveFocus();
    await expect(canvas.getByLabelText("Full name")).toHaveAttribute("aria-invalid", "true");
    await expect(canvas.getByText("Please enter your name.")).toBeVisible();
    await expect(canvas.getByText("Please enter your email address.")).toBeVisible();
    await expect(canvas.getByText("Please tell us how we can help.")).toBeVisible();
  },
};
export const InvalidEmail: Story = {
  play: async ({ canvas, userEvent }) => {
    await userEvent.type(canvas.getByLabelText("Full name"), "QA Learner");
    await userEvent.type(canvas.getByLabelText("Email", { exact: true }), "invalid-email");
    await userEvent.type(canvas.getByLabelText("Your question"), "Tell me about the design course.");
    await userEvent.click(canvas.getByRole("button", { name: "Send message" }));
    await expect(canvas.getByLabelText("Email", { exact: true })).toHaveFocus();
    await expect(canvas.getByText("Enter a valid email address, such as you@example.com.")).toBeVisible();
  },
};
export const ValidEnquiry: Story = {
  play: async ({ canvas, userEvent, step }) => {
    await step("Complete the enquiry", async () => {
      await userEvent.type(canvas.getByLabelText("Full name"), "QA Learner");
      await userEvent.type(canvas.getByLabelText("Email", { exact: true }), "qa@example.com");
      await userEvent.type(canvas.getByLabelText("Your question"), "Tell me about the design course.");
      await userEvent.click(canvas.getByRole("button", { name: "Send message" }));
    });
    await expect(canvas.getByRole("status")).toHaveTextContent("your message has not been sent or saved");
    await expect(canvas.getByLabelText("Email", { exact: true })).toHaveAttribute("aria-invalid", "false");
    await step("Editing clears stale confirmation", async () => {
      await userEvent.type(canvas.getByLabelText("Your question"), " Thank you.");
      await expect(canvas.getByRole("status")).toBeEmptyDOMElement();
    });
    await userEvent.click(canvas.getByRole("button", { name: "Send message" }));
  },
};

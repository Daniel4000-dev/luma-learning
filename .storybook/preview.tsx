import type { Preview } from "@storybook/nextjs-vite";
import "@fontsource-variable/inter";
import "@fontsource-variable/plus-jakarta-sans";
import "../src/app/globals.css";
import "./preview.css";

const preview: Preview = {
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    nextjs: { appDirectory: true },
    controls: { expanded: true },
    docs: { story: { inline: false } },
    a11y: { test: "error" },
    viewport: {
      options: {
        mobile: { name: "Figma mobile · 402px", styles: { width: "402px", height: "844px" }, type: "mobile" },
        tablet: { name: "Tablet · 768px", styles: { width: "768px", height: "1024px" }, type: "tablet" },
        desktop: { name: "Figma desktop · 1280px", styles: { width: "1280px", height: "900px" }, type: "desktop" },
      },
    },
    options: { storySort: { order: ["Foundations", "Components", "Forms", "Navigation", "Pages"] } },
  },
  decorators: [Story => <div className="font-body text-ink antialiased"><Story /></div>],
};

export default preview;

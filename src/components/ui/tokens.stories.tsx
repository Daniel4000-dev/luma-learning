import type { Meta, StoryObj } from "@storybook/nextjs-vite";

function DesignTokens() {
  const colors = [
    ["Brand", "#3157F6"], ["Ink", "#171B2C"], ["Warm", "#F9F8F3"],
    ["Blue soft", "#E2E8FF"], ["Yellow", "#FFEE7E"], ["CTA yellow", "#FFF1C2"],
    ["Orange soft", "#FFCB9F"], ["Muted", "#656770"], ["Line", "#DBDFEB"],
  ];
  return <main className="max-w-4xl p-6">
    <h1 className="section-title">Luma design tokens</h1>
    <p className="mt-4 text-muted">Plus Jakarta Sans for headings. Inter for body copy. Values are defined in globals.css.</p>
    <ul className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
      {colors.map(([name, hex]) => <li key={name} className="rounded-xl border border-line bg-white p-4"><div className="mb-3 h-16 rounded-lg border border-line" style={{ background: hex }} /><p className="font-semibold">{name}</p><p className="text-sm text-muted">{hex}</p></li>)}
    </ul>
    <h2 className="mt-10 font-heading text-3xl font-extrabold">Build skills that move you forward.</h2>
    <p className="mt-4 max-w-140 text-base leading-7">Practical courses taught by people who do the work every day. This is the shared body text style.</p>
  </main>;
}

export default { title: "Foundations/Design tokens", component: DesignTokens } satisfies Meta<typeof DesignTokens>;
export const Overview: StoryObj<typeof DesignTokens> = {};

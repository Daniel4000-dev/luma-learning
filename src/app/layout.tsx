import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const inter = localFont({
  src: "../../node_modules/@fontsource-variable/inter/files/inter-latin-wght-normal.woff2",
  variable: "--font-inter",
  display: "swap",
  weight: "100 900",
});
const jakarta = localFont({
  src: "../../node_modules/@fontsource-variable/plus-jakarta-sans/files/plus-jakarta-sans-latin-wght-normal.woff2",
  variable: "--font-jakarta",
  display: "swap",
  weight: "200 800",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://luma-learning.vercel.app"
  ),
  title: "Luma — Build skills that move you forward",
  description:
    "Practical courses in design, technology, business and creativity. Learn from people who do the work, one focused lesson at a time.",
  applicationName: "Luma Learning",
  icons: {
    icon: "/images/logo-dark.svg",
    apple: "/images/logo-dark.svg",
  },
  openGraph: {
    title: "Luma — Build skills that move you forward",
    description:
      "Practical courses in design, technology, business and creativity. Learn from people who do the work, one focused lesson at a time.",
    url: "/",
    siteName: "Luma Learning",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/hero-learner.jpg",
        width: 900,
        height: 1100,
        alt: "Luma Learning — Student advancing design and creative skills",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Luma — Build skills that move you forward",
    description:
      "Practical courses in design, technology, business and creativity. Learn from people who do the work, one focused lesson at a time.",
    images: ["/images/hero-learner.jpg"],
  },
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${jakarta.variable}`}>
      <body className="bg-warm font-body text-ink antialiased">
        <a className="skip-link" href="#main-content">Skip to content</a>
        {children}
      </body>
    </html>
  );
}


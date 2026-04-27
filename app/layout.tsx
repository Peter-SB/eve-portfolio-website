import type { Metadata } from "next";
import { Inter, Playfair_Display, Noto_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});
const notoSans = Noto_Sans({
  subsets: ["latin"],
  variable: "--font-noto-sans",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Eve Dodd | Social Media Manager",
  description:
    "Freelance Social Media & Brand Manager with 5+ years of experience. Branding, content strategy, and community growth for brands like Get Baked, YouTube, Crossfader, and DAZN.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/eve-portfolio-website/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/eve-portfolio-website/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/eve-portfolio-website/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/eve-portfolio-website/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} ${notoSans.variable}`}
    >
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
        <Analytics />
      </body>
    </html>
  );
}

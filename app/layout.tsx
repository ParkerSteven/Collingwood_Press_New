import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import StickySocialStrip from "@/components/ui/StickySocialStrip";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.thecollingwoodpress.com"),
  title: {
    default: "The Collingwood Press | Full-Service Book Publishing for Authors",
    template: "%s | The Collingwood Press",
  },
  description:
    "The Collingwood Press takes first-draft manuscripts to shelf-ready books. Editing, formatting, cover design, and marketing, guided by a real project manager from day one.",
  keywords: [
    "book publishing company",
    "self publishing services",
    "book editing and formatting",
    "book cover design",
    "author marketing services",
  ],
  openGraph: {
    title: "The Collingwood Press | Full-Service Book Publishing for Authors",
    description:
      "From first draft to shelf-ready. Editing, design, and marketing for authors who want their book published with care.",
    url: "https://www.thecollingwoodpress.com",
    siteName: "The Collingwood Press",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Collingwood Press | Full-Service Book Publishing for Authors",
    description:
      "From first draft to shelf-ready. Editing, design, and marketing for authors who want their book published with care.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="font-sans antialiased text-ink bg-paper selection:bg-gold selection:text-white">
        <StickySocialStrip />
        {children}
        </body>
    </html>
  );
}

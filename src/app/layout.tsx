import { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: {
    default: "Cavalaid — Academic Intelligence for Coaching Institutes",
    template: "%s | Cavalaid",
  },
  description:
    "Cavalaid helps coaching institutes turn question-level test data and student reflections into explainable insights for teachers.",
  metadataBase: new URL("https://cavalaid.vercel.app"),
  openGraph: {
    title: "Cavalaid — Academic Intelligence for Coaching Institutes",
    description:
      "Turn question-level test data and student reflections into explainable insights for teachers.",
    type: "website",
    url: "https://cavalaid.vercel.app",
    siteName: "Cavalaid",
    locale: "en_US",
    images: "/logoss.svg",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cavalaid",
    description: "Academic intelligence for coaching institutes.",
    creator: "@cavalaid",
    images: "/logoss.svg",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

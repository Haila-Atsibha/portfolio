import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import ScrollEffects from "@/components/ScrollEffects";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HaileIyesus Mulat | Software Developer",
  description:
    "Portfolio of HaileIyesus Mulat, an Information Systems graduate and software developer building practical web applications with modern technologies.",
  openGraph: {
    title: "HaileIyesus Mulat | Software Developer",
    description:
      "Information Systems graduate and software developer building practical web applications with modern technologies.",
    type: "website",
    locale: "en_US",
  },
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ScrollEffects />
        {children}
      </body>
    </html>
  );
}

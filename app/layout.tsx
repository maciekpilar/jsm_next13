import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "JS Mastery",
  description: "JSM Platform with Next 13",
  other: {
    "theme-color": "#0d1117",
    "color-sheme": "dark only",
    "twitter:image": "https://i.ibb.co/d6TXxB2/homepage-thumbnail.jpg",
    "twitter:card": "summary_large_image",
    "og:url": "jsmastery.pro",
    "og:image": "https://i.ibb.co/d6TXxB2/homepage-thumbnail.jpg",
    "og:type": "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-black-100 font-poppins">{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import type { ReactNode } from "react";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://yu-nathan.github.io"),
  title: "Nathan Yu",
  description:
    "Nathan Yu is a San Francisco-based software engineer sharing his work, projects, travels, photography, and interests.",
  openGraph: {
    title: "Nathan Yu",
    description:
      "Building useful software—and making time for new places, good photos, and the occasional great drive.",
    url: "https://yu-nathan.github.io",
    siteName: "Nathan Yu",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Nathan Yu" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nathan Yu",
    description:
      "Building useful software—and making time for new places, good photos, and the occasional great drive.",
    images: ["/og.png"],
  },
  alternates: {
    canonical: "https://yu-nathan.github.io",
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Jamb | Fireplaces, Lighting & Furniture",
  description:
    "Discover our collection of antique fireplaces, reproduction lighting and furniture.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-galaxie">{children}</body>
    </html>
  );
}

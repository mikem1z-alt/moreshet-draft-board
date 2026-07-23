import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Moreshet Draft Board",
  description: "Live Moreshet draft rankings powered by community voting.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

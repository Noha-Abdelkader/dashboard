import type { Metadata } from "next";
import "./globals.scss";

export const metadata: Metadata = {
  title: "Rose App",
  description: "Discover the best products for you",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}

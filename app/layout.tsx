import "./globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "Water Sport",
  description: "Surf & Water Adventure",
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
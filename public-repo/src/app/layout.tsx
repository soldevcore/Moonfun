import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MoonFun – Demo Launchpad",
  description: "Example project for public repository",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-[#0f1012] text-white">
        {children}
      </body>
    </html>
  );
}

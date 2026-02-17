import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Free RAM Downloader",
  description: "Generate and download custom free RAM for your PC!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={'antialiased'}
      >
        {children}
      </body>
    </html>
  );
}

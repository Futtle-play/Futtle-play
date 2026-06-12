import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Providers from "./providers";

export const metadata: Metadata = {
  title: "FUTTLE — Kick. Don't Throw.",
  description: "A 2,000-year-old street game, rebuilt for modern play. ₹199. Made in India.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased dark" suppressHydrationWarning data-scroll-behavior="smooth">
      <body className="min-h-full flex flex-col selection:bg-[#d4ff3a] selection:text-black">
        <Script id="theme-init" strategy="beforeInteractive">
          {`
            try {
              var theme = localStorage.getItem('theme');
              if (theme === 'light') {
                document.documentElement.classList.remove('dark');
              } else {
                document.documentElement.classList.add('dark');
              }
            } catch (e) {}
          `}
        </Script>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

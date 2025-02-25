import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import AnimatedCursor from "react-animated-cursor";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";
import FloatingDock from "@/components/ui/floating-dock";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <Head>
        {/* Google Site Verification Meta Tag */}
        <meta
          content="t9njgnYp9iR49TipGQzDh34cK-8bLr7JPReA6vgZHQw"
          name="google-site-verification"
        />
      </Head>
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="flex flex-col h-screen">
            <Navbar />
            <div className="hidden md:block">
              <AnimatedCursor
                color="63, 55, 201"
                innerScale={5}
                innerSize={13}
                outerScale={5}
                outerSize={18}
              />
            </div>
            <main className="w-full mx-auto max-w-7xl pt-16 px-6 flex-grow">
              {children}
            </main>
            <footer className="w-full  flex items-center justify-center py-3  fixed z-40 bottom-0 bg-transparent ">
              <FloatingDock className={""} items={siteConfig?.navItems} />
            </footer>
          </div>
        </Providers>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

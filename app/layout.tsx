import "./style/globals.css";
import { Inter } from "next/font/google";
import { Theme } from "@/app/components/theme";
import Container from "./components/container";
import { Analytics } from "./lib/analytics";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dragan Vucinic Blog",
  description: "Everything tech related",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html suppressHydrationWarning lang="en">
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />

      <body
        className={`antialiased min-h-screen bg-white dark:bg-gray-800 text-slate-900 dark:text-slate-50 ${inter.className}`}
      >
        <Theme attribute="class" defaultTheme="system" enableSystem>
          <Analytics />
          <div className="max-w-4xl mx-auto py-10 px-4">
            <Container>{children}</Container>
          </div>
        </Theme>
      </body>
    </html>
  );
}

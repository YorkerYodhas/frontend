import { ThemeProvider } from "@/components/theme-provider";
import { Bricolage_Grotesque, Space_Grotesk } from "next/font/google";
import { ReactNode } from "react";

interface RootLayoutProps {
  children: ReactNode;
}

const sg = Space_Grotesk({ subsets: ["latin"] });
const bg = Bricolage_Grotesque({ subsets: ["latin"] });

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <ThemeProvider attribute="class" defaultTheme="dark">
        <div
          className={`container mx-auto max-w-xl overflow-x-hidden ${sg.className} ${bg.className}`}
        >
          {children}
        </div>
      </ThemeProvider>
    </>
  );
}

import UserNav from "@/components/site-nav";
import { ThemeProvider } from "@/components/theme-provider";
import { Bricolage_Grotesque, Space_Grotesk } from "next/font/google";
import { useRouter } from "next/router";
import { ReactNode } from "react";

interface RootLayoutProps {
  children: ReactNode;
}

const sg = Space_Grotesk({ subsets: ["latin"] });
const bg = Bricolage_Grotesque({ subsets: ["latin"] });

export default function RootLayout({ children }: RootLayoutProps) {
  const router = useRouter();
  const pathname = router.pathname;
  return (
    <>
      <ThemeProvider attribute="class" defaultTheme="dark">
        <div
          className={`container mx-auto max-w-xl overflow-x-hidden mb-36 ${sg.className} ${bg.className}`}
        >
          <div>{children}</div>
          {pathname !== "/" && <UserNav />}
        </div>
      </ThemeProvider>
    </>
  );
}

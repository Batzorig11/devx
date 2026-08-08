import type { Metadata } from "next";
import { Noto_Sans, Noto_Sans_Mono } from "next/font/google";
import "./globals.css";
import { TooltipProvider } from "@/components/ui/tooltip";

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["cyrillic", "latin"],
});

const notoSansMono = Noto_Sans_Mono({
  variable: "--font-noto-sans-mono",
  subsets: ["cyrillic", "latin"],
});

export const metadata: Metadata = {
  title: "Dev-X лекцүүд",
  description: "erxes Academy-ийн Dev-X вэб хөгжүүлэлтийн лекцүүд",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="mn"
      className={`${notoSans.variable} ${notoSansMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <TooltipProvider>{children}</TooltipProvider>
      </body>
    </html>
  );
}

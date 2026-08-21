import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "LRSD Capital | Capital, with conviction",
  description: "A specialist credit institution for Indian enterprise — structured capital with deep domain expertise and enduring conviction.",
};

import { ModalProvider } from "@/components/ConversationModal";
import PageTransitionLoader from "@/components/PageTransitionLoader";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} font-sans h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-white text-[#0F1932]">
        <PageTransitionLoader />
        <ModalProvider>
          {children}
        </ModalProvider>
      </body>
    </html>
  );
}


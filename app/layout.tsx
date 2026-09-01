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
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png" }
    ],
    apple: [
      { url: "/apple-icon.png", type: "image/png" }
    ]
  }
};

import { ModalProvider } from "@/components/ConversationModal";
import PageTransitionLoader from "@/components/PageTransitionLoader";
import { AccessibilityProvider } from "@/components/AccessibilityProvider";

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
        <AccessibilityProvider>
          <PageTransitionLoader />
          <ModalProvider>
            <main id="main-content" tabIndex={-1} className="focus:outline-none flex-1 flex flex-col">
              {children}
            </main>
          </ModalProvider>
        </AccessibilityProvider>
      </body>
    </html>
  );
}


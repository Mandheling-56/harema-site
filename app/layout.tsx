import type { Metadata } from "next";
import { Shippori_Mincho, Zen_Kaku_Gothic_New, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const serif = Shippori_Mincho({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-serif",
});
const sans = Zen_Kaku_Gothic_New({
  weight: ["300", "400", "500"],
  subsets: ["latin"],
  variable: "--font-sans",
});
const en = Cormorant_Garamond({
  weight: ["400", "500"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-en",
});

export const metadata: Metadata = {
  title: {
    default: "harema | 株式会社WeLa",
    template: "%s | harema - 株式会社WeLa",
  },
  description:
    "暮らしに、晴れ間を。株式会社WeLaは、医師・舛森悠が代表を務める医療コンテンツとコミュニティの会社です。予防・治療・心、3つの晴れ間を届けます。",
  openGraph: {
    title: "harema | 株式会社WeLa",
    description: "暮らしに、晴れ間を。医療コンテンツとコミュニティの会社",
    locale: "ja_JP",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja">
      <body className={`${serif.variable} ${sans.variable} ${en.variable}`}>
        {/* 木漏れ日フィルター（ヒーローで参照） */}
        <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden>
          <filter id="komorebiFilter">
            <feTurbulence type="fractalNoise" baseFrequency="0.012 0.018" numOctaves="2" seed="7">
              <animate
                attributeName="baseFrequency"
                dur="26s"
                values="0.012 0.018;0.016 0.022;0.012 0.018"
                repeatCount="indefinite"
              />
            </feTurbulence>
            <feDisplacementMap in="SourceGraphic" scale="60" />
          </filter>
        </svg>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// 全站共用的字體變數集中在 RootLayout 套用，避免各頁面重複設定字體 class。
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// App Router 會使用這組 metadata 產生基礎 SEO 標題與描述。
export const metadata: Metadata = {
  title: "Apex Flow | 前端工程師作品集",
  description:
    "前端工程師作品集，聚焦 React、Next.js、TypeScript、互動介面、效能優化與全端資料整合。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW">
      {/* children 代表 app/page.tsx 與後續路由內容，統一包在全站字體與反鋸齒設定下。 */}
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

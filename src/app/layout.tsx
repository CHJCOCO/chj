import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HJ Landing | 전문 웹사이트 제작 서비스",
  description: "7일 만에 완성하는 맞춤형 랜딩 페이지. 창업자와 소상공인을 위한 전략적 웹사이트 제작 서비스.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link rel="preconnect" href="https://cdn.jsdelivr.net" />
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css"
        />
      </head>
      <body className="antialiased font-pretendard">
        {children}
      </body>
    </html>
  );
}

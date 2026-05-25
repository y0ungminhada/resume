import "./globals.css";

const title = "박영민 - Security Engineer Portfolio";
const description =
  "보안 분석을 실제 동작하는 시스템으로 연결하는 Security Engineer 박영민의 포트폴리오입니다.";

export const metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary",
    title,
    description,
  },
};

export const viewport = {
  themeColor: "#38bdf8",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}

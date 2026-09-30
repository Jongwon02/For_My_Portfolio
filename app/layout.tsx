import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '신종원 (Kevin) — Portfolio',
  description:
    '안녕하세요, 신종원(Kevin)입니다. 아이디어를 현실로 만드는 크리에이터의 포트폴리오입니다.',
  openGraph: {
    title: '신종원 (Kevin) — Portfolio',
    description: '아이디어를 현실로 만드는 크리에이터, 신종원(Kevin)을 소개합니다.',
    images: ['https://kevin-portfolio.vercel.app/thats_me.webp'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '신종원 (Kevin) — Portfolio',
    description: '아이디어를 현실로 만드는 크리에이터, 신종원(Kevin)을 소개합니다.',
    images: ['https://kevin-portfolio.vercel.app/thats_me.webp'],
  },
  icons: {
    icon: '/thats_me.webp',
    apple: '/thats_me.webp',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}

// src/app/layout.js
import '../../styles/globals.css';
import Footer from './(components)/Footer';
import Navbar from './(components)/navbar';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Toaster } from 'react-hot-toast';
import Script from 'next/script';
import { ProjectProvider } from './context/projectContext';

export const metadata = {
  title: 'DO IT',
  description: '연세대학교 미래캠퍼스 IT협업동아리',
  icons: { icon: '/favicon.ico' },
  openGraph: {
    title: 'DO IT',
    description: '연세대학교 미래캠퍼스 IT협업동아리',
    url: 'https://do-it.kr',
    type: 'website',
    images: [{ url: '/DO+IT_Logo_Black+Blue.png', width: 800, height: 600, alt: '연세대학교 미래캠퍼스 IT협업동아리' }],
  },
  metadataBase: new URL('https://do-it.kr'),
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        {/* GA4 gtag */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-M22XJQRRYQ" />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-M22XJQRRYQ');
          `}
        </Script>

        <ProjectProvider>
          <Toaster position="top-center" reverseOrder={false} />
          <Navbar />
          {children}
          <Analytics />
          <SpeedInsights />
          <Footer />
        </ProjectProvider>
      </body>
    </html>
  );
}

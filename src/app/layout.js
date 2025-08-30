import '../../styles/globals.css';
import Footer from './(components)/Footer';
import Navbar from './(components)/navbar';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Toaster } from 'react-hot-toast';
import Script from 'next/script';
import Head from 'next/head';
import { ProjectProvider } from './context/projectContext';

export const metadata = {
  title: 'DO IT',
  description: '연세대학교 미래캠퍼스 IT협업동아리',
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'DO IT',
    description: '연세대학교 미래캠퍼스 IT협업동아리',
    url: 'https://do-it.kr',
    type: 'website',
    images: [
      {
        url: '/DO+IT_Logo_Black+Blue.png',
        width: 800,
        height: 600,
        alt: '연세대학교 미래캠퍼스 IT협업동아리',
      },
    ],
  },
  metadataBase: new URL('https://do-it.kr'),
};

export default function RootLayout({ children }) {
  return (
    <html>
      <ProjectProvider>
        <Head>
          <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id=GTM-N76RWDNB'+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-N76RWDNB');
            `,
          }}
        />
          <title>DO IT</title>
          <meta
            name="description"
            content="연세대학교 미래캠퍼스 IT협업동아리"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-N76RWDNB"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
          <Toaster position="top-center" reverseOrder={false} />
          <Navbar />
          {children}
          <Analytics />
          <SpeedInsights />
          <Footer />
        </body>
      </ProjectProvider>
    </html>
  );
}

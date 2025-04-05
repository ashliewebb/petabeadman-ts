import type { Metadata } from "next";
import { Raleway, Nunito } from "next/font/google";
import Link from 'next/link'
import Script from 'next/script'
import "@/styles/globals.css";
import styles from "./page.module.scss";

const raleway = Raleway({
  variable: "--font-raleway",
  weight: ['400', '500', '600', '700'],
  subsets: ["latin"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  weight: ['400', '700'],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Peta Beadman | Empowering woman to build thriving Real Estate careers",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script id="klaviyo-script" strategy={"afterInteractive"} src={"https://static.klaviyo.com/onsite/js/klaviyo.js?company_id=WcnSUn"}>
        </Script>
        <Script id="klaviyo-init" strategy="afterInteractive">
          {`
            var _learnq = _learnq || [];
            _learnq.push(['account', 'WcnSUn']);
          `}
        </Script>
      </head>
      <body className={`${raleway.variable} ${nunito.variable}`}>
        <div className={styles.page}>
          <div className={styles.strapline}>
            <p>90 Days To Paid - For Women in Real Estate</p>
          </div>
          <header className={styles.header}>
            <Link href="/">
              <span className={styles.logoText}>Peta Beadman</span>
            </Link>
            <ul className={styles.navigation}>
              <li>
                <Link href="/agentresources" className={styles.navigationLink}>Agent Resources</Link>
              </li>
              {/*<li>*/}
              {/*  <Link href="/blog" className={styles.navigationLink}>Blog</Link>*/}
              {/*</li>*/}
              {/*<li>*/}
              {/*  <Link href="/about" className={styles.navigationLink}>About</Link>*/}
              {/*</li>*/}
              <li>
                <Link href="/shop" className={`buttonPrimary`}>Buy the Bundle</Link>
              </li>
            </ul>
          </header>
          <main className={styles.main}>
            {children}
          </main>
          <footer className={styles.footer}>
            <p>&copy; Peta Beadman 2025</p>
          </footer>
        </div>
      </body>
    </html>
  );
}

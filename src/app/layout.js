import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import headerStyles from "./css/header.module.css";
import footerStyles from "./css/footer.module.css";
import rainbowTextStyles from "./css/rainbowText.module.css";
import navStyles from "./css/nav.module.css";
import buttonGlowStyles from "./css/buttonGlow.module.css";
import testStyles from "./posts/test/test.module.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
// const layoutStyle = {
//   display: "flex";
//   flexDirection: "column";
//   mi: "100vh";
//   width: "100vw";
// };

export const metadata = {
  title: "Eddy's Blog",
  description: "A simple blog built with Next.js",
  openGraph: {
    title: "Eddy's Blog",
    description: "A simple blog built with Next.js",
    type: "website",
    url: "https://next-comments-postgres.vercel.app/",
    images: ["https://next-comments-postgres.vercel.app/og-image.png"], // add an appropriate image to your public folder - need to be in an array
  },
};

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className={rainbowTextStyles.rainbowText}>header</header>
        <nav className={navStyles.nav}>
          <Link className={buttonGlowStyles.buttonGlow} href="/posts/1">
            Post 1
          </Link>
          <Link className={buttonGlowStyles.buttonGlow} href="/">
            H
          </Link>
          <Link className={buttonGlowStyles.buttonGlow} href="/posts">
            Posts
          </Link>
          <Link className={buttonGlowStyles.buttonGlow} href="/posts/new">
            New
          </Link>
          <Link className={buttonGlowStyles.buttonGlow} href="/about">
            About
          </Link>
        </nav>
        {children}
        <footer className={footerStyles.footer}>
          Made by Eddy bits "borrowed" from many.
        </footer>
      </body>
    </html>
  );
}

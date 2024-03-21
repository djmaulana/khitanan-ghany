import { Montserrat } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import { Suspense } from "react";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Khitanan Ghany Muflih Wahid",
  description: "Kamu diundang ke acara Tasyakuran Khitanan Ghany Muflih Wahid jangan lupa dateng yaak ^-^ . . .",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Suspense>
        <body className={inter.className}>{children}</body>
      </Suspense>
    </html>
  );
}

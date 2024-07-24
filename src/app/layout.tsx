import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const font = Poppins({ 
  subsets: ['latin' , 'latin-ext'],
  weight: ["300", "500", "700", "800"], 
  style: 'normal', 
});

export const metadata: Metadata = {
  title: "Death Quiz",
  description: "This is The Death Quiz!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="public/favicon.ico" type="image/x-icon" />
      </Head>
      <html lang="en">
        <body className={font.className }>
          {children}
        </body>
      </html>
    </>
  );
}

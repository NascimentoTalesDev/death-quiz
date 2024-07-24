import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import AsideAdmin from "./aside";
import Header from "./header";

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
    <html lang="en">
      <body className={`flex ${font.className}`}>
        <AsideAdmin />
        <section className="w-full px-3">
          <Header/>
          <main>
            {children}
          </main>
        </section>
      </body>
    </html>
  );
}

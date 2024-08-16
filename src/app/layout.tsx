import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ToastProvider } from "@/providers/ToastProvider";

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
        <body className={font.className} >
        <ToastProvider />
          {children}
        </body>
      </html>
  );
}

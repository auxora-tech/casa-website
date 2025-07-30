import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";

const nunito = Nunito_Sans({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ['200', '300', '400', '500', '600', '700', '800', '900']
});

// const Nunito_SansMono = Nunito_Sans({
//   variable: "--font-Nunito_Sans",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Casa Community",
  description: "Registered NDIS Provider",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${nunito.variable} ${nunito.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

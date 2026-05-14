import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rafael Carrillo | Data Analyst",
  description: "Landing page profesional de Rafael Carrillo, Analista de Datos Junior.",
  keywords: ["Data Analyst", "Rafael Carrillo", "Portfolio", "Analytics", "Python", "SQL", "Power BI"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={inter.variable}>
      <body className="min-h-full flex flex-col antialiased">
        {children}
      </body>
    </html>
  );
}
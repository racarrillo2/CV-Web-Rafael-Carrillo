import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./context/ThemeContext";

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
    <html lang="es" className={inter.variable} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var theme = localStorage.getItem('theme');
                if (theme) {
                  document.documentElement.setAttribute('data-theme', theme);
                }
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
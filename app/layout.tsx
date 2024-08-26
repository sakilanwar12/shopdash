import type { Metadata } from "next";
import { Inter } from 'next/font/google'
import "./globals.css";
import AuthProvider from "@/providers/auth-provider";
import ThemeProvider from "@/providers/theme-provider";


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
const inter = Inter({ subsets: ['latin'] })
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className + "shopdash-app"} suppressHydrationWarning={true}>
        <AuthProvider>
           <ThemeProvider attribute="class" defaultTheme="light">
            {children}
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}

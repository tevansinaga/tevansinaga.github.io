import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Cursor from "@/components/Cursor"; // Import komponen kursor kamu

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tevan | Fullstack Developer Portfolio",
  description: "Selamat datang di portofolio digital Tevan. Fokus pada pembangunan aplikasi web modern dan estetik.",
  icons: {
    icon: "/favicon.ico",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-[#030303] selection:bg-blue-500/30 selection:text-blue-600`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* Kursor diletakkan di sini agar muncul di semua halaman 
            dan berada di atas semua elemen (z-index tinggi).
          */}
          <Cursor />

          {/* Navbar tetap di atas */}
          <Navbar />
          
          {/* Memberikan min-h-screen agar background tetap konsisten 
            dan tidak terpotong jika konten sedikit.
          */}
          <main className="relative min-h-screen">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
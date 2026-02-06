import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 1. Wajib untuk GitHub Pages agar menghasilkan folder 'out'
  output: 'export',

  // 2. Wajib jika menggunakan komponen <Image /> dari Next.js di static export
  images: {
    unoptimized: true,
  },

  // 3. PENTING: Jika nama repo kamu BUKAN 'username.github.io' 
  // (misal nama reponya 'portofolio-web'), buka komentar 2 baris di bawah ini:
  // basePath: '/portofolio-web',
  // assetPrefix: '/portofolio-web',

  // Memastikan trailing slash konsisten untuk routing yang lebih baik di host statis
  trailingSlash: true,
};

export default nextConfig;

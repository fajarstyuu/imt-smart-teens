import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "IMT Smart Teens – Edukasi Indeks Massa Tubuh untuk Remaja",
  description:
    "Platform edukasi interaktif tentang Indeks Massa Tubuh (IMT/BMI) untuk siswa SMA. Pelajari materi, hitung IMT-mu, dan uji pengetahuanmu lewat kuis seru!",
  keywords: ["IMT", "BMI", "Indeks Massa Tubuh", "edukasi kesehatan", "remaja", "SMA"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="h-full scroll-smooth">
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-green-900 to-emerald-900 text-white py-10 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-white/20 rounded-xl flex items-center justify-center">
            <span className="text-white font-bold text-sm">IMT</span>
          </div>
          <div>
            <p className="font-bold text-lg" style={{ fontFamily: "Poppins, sans-serif" }}>
              IMT Smart Teens
            </p>
            <p className="text-green-300 text-xs">Edukasi Kesehatan untuk Generasi Muda</p>
          </div>
        </div>
        <div className="text-center md:text-right">
          <p className="text-green-300 text-sm">
            © 2025 IMT Smart Teens · Dibuat untuk siswa SMA Indonesia
          </p>
          <p className="text-green-400 text-xs mt-1">
            ❤️ Yuk, jaga kesehatan mulai dari sekarang!
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
      style={{
        background:
          "linear-gradient(135deg, #f0fdf4 0%, #dcfce7 40%, #d1fae5 70%, #a7f3d0 100%)",
      }}
    >
      {/* Decorative blobs */}
      <div
        className="absolute -top-20 -right-20 w-80 h-80 rounded-full opacity-30 animate-float"
        style={{
          background:
            "radial-gradient(circle, #86efac 0%, #34d399 60%, transparent 100%)",
        }}
      />
      <div
        className="absolute bottom-10 -left-20 w-64 h-64 rounded-full opacity-20 animate-float delay-300"
        style={{
          background:
            "radial-gradient(circle, #6ee7b7 0%, #10b981 60%, transparent 100%)",
        }}
      />
      <div
        className="absolute top-1/3 left-1/4 w-32 h-32 rounded-full opacity-15 animate-float delay-500"
        style={{
          background:
            "radial-gradient(circle, #34d399 0%, transparent 80%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-sm border border-green-200 text-green-700 text-sm font-semibold px-4 py-2 rounded-full mb-6 shadow-sm animate-fade-in-up">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          Platform Edukasi Kesehatan Remaja
        </div>

        {/* Headline */}
        <h1
          className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-800 mb-4 leading-tight animate-fade-in-up delay-100"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Kenali{" "}
          <span className="relative inline-block">
            <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-600">
              IMT-mu,
            </span>
            <span
              className="absolute -bottom-1 left-0 right-0 h-3 opacity-20 rounded-full"
              style={{ background: "linear-gradient(to right, #22c55e, #10b981)" }}
            />
          </span>{" "}
          <br className="sm:hidden" />
          Jaga Kesehatanmu!
        </h1>

        {/* Subheadline */}
        <p className="text-gray-500 text-base sm:text-lg max-w-2xl mx-auto mb-8 leading-relaxed animate-fade-in-up delay-200">
          Pelajari cara menghitung Indeks Massa Tubuh, pahami artinya, dan uji
          pengetahuanmu lewat kuis interaktif — semua dalam satu platform yang
          seru! 🎉
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up delay-300">
          <a
            href="#kalkulator"
            className="group flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold text-base rounded-2xl shadow-lg shadow-green-300/50 hover:shadow-green-400/70 hover:scale-105 transition-all duration-300"
          >
            <span>⚡ Hitung IMT Sekarang</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
          <a
            href="#materi"
            className="px-8 py-4 bg-white/80 backdrop-blur-sm border-2 border-green-200 text-green-700 font-bold text-base rounded-2xl hover:bg-white hover:border-green-400 hover:scale-105 transition-all duration-300 shadow-md"
          >
            📚 Belajar Materi
          </a>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 gap-4 max-w-lg mx-auto animate-fade-in-up delay-400">
          {[
            { number: "6", label: "Topik Materi", emoji: "📖" },
            { number: "10", label: "Soal Kuis", emoji: "✏️" },
            { number: "4", label: "Kategori IMT", emoji: "📊" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="glass rounded-2xl p-4 text-center hover:scale-105 transition-transform duration-200"
            >
              <div className="text-2xl mb-1">{stat.emoji}</div>
              <div
                className="text-2xl font-black text-green-600"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                {stat.number}
              </div>
              <div className="text-xs text-gray-500 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce opacity-60">
        <span className="text-xs text-gray-500 font-medium">Scroll ke bawah</span>
        <div className="w-5 h-8 border-2 border-green-400 rounded-full flex items-start justify-center pt-1">
          <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}

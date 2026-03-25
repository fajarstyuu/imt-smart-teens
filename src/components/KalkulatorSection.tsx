"use client";

import { useState, useCallback } from "react";

interface BMIResult {
  bmi: number;
  category: string;
  color: string;
  bgColor: string;
  emoji: string;
  description: string;
  recommendation: string;
}

function getBMIResult(bmi: number): BMIResult {
  if (bmi < 18.5) {
    return {
      bmi,
      category: "Kurus (Underweight)",
      color: "text-blue-600",
      bgColor: "from-blue-50 to-sky-50 border-blue-200",
      emoji: "😟",
      description: "Berat badanmu di bawah kisaran normal untuk tinggi badanmu.",
      recommendation:
        "Tingkatkan asupan kalori dengan makanan bergizi. Konsultasikan dengan dokter atau ahli gizi.",
    };
  } else if (bmi <= 24.9) {
    return {
      bmi,
      category: "Normal (Ideal)",
      color: "text-green-600",
      bgColor: "from-green-50 to-emerald-50 border-green-200",
      emoji: "🎉",
      description: "Selamat! Berat badanmu berada dalam kisaran yang sehat dan ideal.",
      recommendation:
        "Pertahankan pola makan sehat dan olahraga rutin untuk menjaga kondisi ini.",
    };
  } else if (bmi <= 29.9) {
    return {
      bmi,
      category: "Overweight (Gemuk)",
      color: "text-yellow-600",
      bgColor: "from-yellow-50 to-amber-50 border-yellow-200",
      emoji: "⚠️",
      description: "Berat badanmu sedikit di atas kisaran normal.",
      recommendation:
        "Kurangi asupan kalori berlebih, perbanyak olahraga, dan hindari makanan olahan.",
    };
  } else {
    return {
      bmi,
      category: "Obesitas",
      color: "text-red-600",
      bgColor: "from-red-50 to-rose-50 border-red-200",
      emoji: "🚨",
      description: "Berat badanmu berada di atas batas aman dan berisiko bagi kesehatan.",
      recommendation:
        "Segera konsultasikan dengan dokter untuk program penurunan berat badan yang tepat dan aman.",
    };
  }
}

const categories = [
  { label: "Kurus", range: "< 18.5", color: "bg-blue-400" },
  { label: "Normal", range: "18.5 – 24.9", color: "bg-green-400" },
  { label: "Gemuk", range: "25.0 – 29.9", color: "bg-yellow-400" },
  { label: "Obesitas", range: "≥ 30.0", color: "bg-red-400" },
];

export default function KalkulatorSection() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [result, setResult] = useState<BMIResult | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const calculate = useCallback(() => {
    setError("");
    const w = parseFloat(weight);
    const h = parseFloat(height);

    if (!weight || !height) {
      setError("Mohon isi berat dan tinggi badan terlebih dahulu.");
      return;
    }
    if (isNaN(w) || isNaN(h) || w <= 0 || h <= 0) {
      setError("Masukkan angka yang valid.");
      return;
    }
    if (w < 20 || w > 300) {
      setError("Berat badan harus antara 20–300 kg.");
      return;
    }
    if (h < 100 || h > 250) {
      setError("Tinggi badan harus antara 100–250 cm.");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      const heightM = h / 100;
      const bmi = w / (heightM * heightM);
      setResult(getBMIResult(parseFloat(bmi.toFixed(1))));
      setLoading(false);
    }, 600);
  }, [weight, height]);

  const reset = () => {
    setWeight("");
    setHeight("");
    setResult(null);
    setError("");
  };

  // BMI indicator bar position (clamped 10%–90%)
  const getIndicatorPosition = (bmi: number) => {
    const minBMI = 10;
    const maxBMI = 40;
    const clamped = Math.min(Math.max(bmi, minBMI), maxBMI);
    return ((clamped - minBMI) / (maxBMI - minBMI)) * 100;
  };

  return (
    <section
      id="kalkulator"
      className="section-padding"
      style={{
        background:
          "linear-gradient(180deg, #f0fdf4 0%, #ffffff 40%, #f0fdf4 100%)",
      }}
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="inline-block bg-green-100 text-green-700 text-sm font-bold px-4 py-1.5 rounded-full mb-4">
            ⚡ Kalkulator IMT
          </span>
          <h2
            className="text-3xl sm:text-4xl font-black text-gray-800 mb-3"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Hitung{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-600">
              IMT-mu
            </span>{" "}
            Sekarang
          </h2>
          <p className="text-gray-500 text-sm max-w-md mx-auto">
            Masukkan data berat dan tinggi badanmu untuk mengetahui nilai IMT dan
            kategorinya.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 items-start">
          {/* Input Card */}
          <div className="bg-white rounded-3xl shadow-xl shadow-green-100/50 border border-green-100 p-8">
            <h3
              className="font-bold text-gray-700 text-lg mb-6"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              📝 Data Tubuhmu
            </h3>

            {/* Weight Input */}
            <div className="mb-5">
              <label className="block text-sm font-semibold text-gray-600 mb-2">
                Berat Badan
              </label>
              <div className="relative">
                <input
                  type="number"
                  placeholder="Contoh: 55"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && calculate()}
                  className="w-full px-4 py-3.5 pr-14 border-2 border-gray-200 rounded-xl text-gray-800 font-medium focus:outline-none focus:border-green-400 focus:ring-4 focus:ring-green-100 transition-all text-base"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 font-semibold text-sm">
                  kg
                </span>
              </div>
            </div>

            {/* Height Input */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-600 mb-2">
                Tinggi Badan
              </label>
              <div className="relative">
                <input
                  type="number"
                  placeholder="Contoh: 165"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && calculate()}
                  className="w-full px-4 py-3.5 pr-14 border-2 border-gray-200 rounded-xl text-gray-800 font-medium focus:outline-none focus:border-green-400 focus:ring-4 focus:ring-green-100 transition-all text-base"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 font-semibold text-sm">
                  cm
                </span>
              </div>
            </div>

            {/* Error */}
            {error && (
              <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm font-medium">
                ⚠️ {error}
              </div>
            )}

            {/* Buttons */}
            <div className="flex gap-3">
              <button
                onClick={calculate}
                disabled={loading}
                className="flex-1 py-3.5 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold rounded-xl shadow-md shadow-green-300/50 hover:scale-[1.02] hover:shadow-green-400/60 transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                    </svg>
                    Menghitung...
                  </span>
                ) : (
                  "⚡ Hitung IMT"
                )}
              </button>
              <button
                onClick={reset}
                className="px-4 py-3.5 border-2 border-gray-200 text-gray-500 font-semibold rounded-xl hover:border-red-200 hover:text-red-500 hover:bg-red-50 transition-all duration-200"
              >
                ↺ Reset
              </button>
            </div>

            {/* Category reference */}
            <div className="mt-6 p-4 bg-gray-50 rounded-2xl">
              <p className="text-xs text-gray-500 font-semibold mb-3 uppercase tracking-wide">
                Referensi Kategori IMT (WHO)
              </p>
              <div className="space-y-2">
                {categories.map((cat) => (
                  <div key={cat.label} className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <div className={`w-3 h-3 rounded-full ${cat.color}`} />
                      <span className="font-medium text-gray-600">{cat.label}</span>
                    </div>
                    <span className="text-gray-400 font-mono">{cat.range}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Result Card */}
          <div className="min-h-[400px] flex items-center justify-center">
            {!result ? (
              <div className="text-center p-8">
                <div className="text-6xl mb-4 animate-float">🩺</div>
                <p className="text-gray-400 font-medium">
                  Masukkan data tubuhmu dan klik{" "}
                  <span className="text-green-500 font-bold">Hitung IMT</span> untuk
                  melihat hasilnya di sini.
                </p>
              </div>
            ) : (
              <div
                className={`w-full bg-gradient-to-br ${result.bgColor} border-2 rounded-3xl p-8 animate-scale-in`}
              >
                {/* Big BMI number */}
                <div className="text-center mb-6">
                  <div className="text-5xl mb-2">{result.emoji}</div>
                  <div
                    className={`text-6xl font-black ${result.color} mb-1`}
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    {result.bmi}
                  </div>
                  <p className="text-gray-500 text-sm font-medium">kg/m²</p>
                  <div
                    className={`inline-block mt-3 px-5 py-1.5 rounded-full font-bold text-sm ${result.color} bg-white/70 border border-current/30`}
                  >
                    {result.category}
                  </div>
                </div>

                {/* BMI Bar */}
                <div className="mb-5">
                  <div className="relative h-4 rounded-full overflow-hidden"
                    style={{
                      background: "linear-gradient(to right, #60a5fa, #34d399, #fbbf24, #f87171)",
                    }}
                  >
                    <div
                      className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-5 h-5 bg-white border-2 border-gray-700 rounded-full shadow-md transition-all duration-700"
                      style={{ left: `${getIndicatorPosition(result.bmi)}%` }}
                    />
                  </div>
                  <div className="flex justify-between text-xs text-gray-400 mt-1 font-mono">
                    <span>10</span>
                    <span>18.5</span>
                    <span>25</span>
                    <span>30</span>
                    <span>40</span>
                  </div>
                </div>

                {/* Description & Recommendation */}
                <div className="space-y-3 text-sm">
                  <p className="text-gray-600 leading-relaxed">{result.description}</p>
                  <div className="bg-white/60 rounded-2xl p-4">
                    <p className="font-bold text-gray-700 text-xs mb-1 uppercase tracking-wide">
                      💡 Rekomendasi
                    </p>
                    <p className="text-gray-600 leading-relaxed">{result.recommendation}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

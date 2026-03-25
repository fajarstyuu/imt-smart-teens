"use client";

import { useState } from "react";
import { materiList, type MateriItem } from "@/data/materi";

function MateriModal({
  item,
  onClose,
}: {
  item: MateriItem;
  onClose: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.45)", backdropFilter: "blur(4px)" }}
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl shadow-2xl max-w-lg w-full max-h-[80vh] overflow-y-auto animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="sticky top-0 bg-gradient-to-r from-green-500 to-emerald-500 text-white p-6 rounded-t-3xl flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="text-4xl">{item.emoji}</span>
            <div>
              <p className="text-green-100 text-xs font-medium tracking-wide uppercase">
                Materi IMT
              </p>
              <h3
                className="text-xl font-bold"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                {item.title}
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="flex-shrink-0 w-8 h-8 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center transition-colors"
            aria-label="Tutup"
          >
            ✕
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-4">
          {item.content.map((paragraph, i) => (
            <p key={i} className="text-gray-600 leading-relaxed text-sm">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="px-6 pb-6">
          <button
            onClick={onClose}
            className="w-full py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold rounded-2xl hover:scale-[1.02] transition-transform duration-200 shadow-md"
          >
            Tutup Materi
          </button>
        </div>
      </div>
    </div>
  );
}

export default function MateriSection() {
  const [selected, setSelected] = useState<MateriItem | null>(null);
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  return (
    <section id="materi" className="section-padding bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-green-100 text-green-700 text-sm font-bold px-4 py-1.5 rounded-full mb-4">
            📚 Materi Edukasi
          </span>
          <h2
            className="text-3xl sm:text-4xl font-black text-gray-800 mb-3"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Pelajari Semua Tentang{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-600">
              IMT
            </span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm">
            Klik kartu materi untuk membaca penjelasan lengkap, atau buka
            accordion di bawah untuk ringkasannya.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {materiList.map((item, index) => (
            <button
              key={item.id}
              onClick={() => setSelected(item)}
              className={`group text-left p-6 rounded-2xl border-2 border-green-100 bg-gradient-to-br from-white to-green-50 hover:border-green-300 hover:shadow-xl hover:shadow-green-100/60 hover:-translate-y-1 transition-all duration-300 animate-fade-in-up`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl mb-3">{item.emoji}</div>
              <h3
                className="font-bold text-gray-800 text-base mb-2 group-hover:text-green-700 transition-colors"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                {item.title}
              </h3>
              <p className="text-gray-500 text-xs leading-relaxed mb-4">
                {item.summary}
              </p>
              <span className="inline-flex items-center gap-1 text-green-600 text-xs font-bold group-hover:gap-2 transition-all">
                Baca Selengkapnya <span>→</span>
              </span>
            </button>
          ))}
        </div>

        {/* Accordion (Summary View) */}
        <div className="max-w-2xl mx-auto">
          <p className="text-center text-gray-400 text-sm mb-4 font-medium">
            — atau lihat ringkasan cepat di sini —
          </p>
          <div className="space-y-2">
            {materiList.map((item) => (
              <div
                key={item.id}
                className="border border-green-100 rounded-2xl overflow-hidden"
              >
                <button
                  className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-green-50 transition-colors"
                  onClick={() =>
                    setOpenAccordion(
                      openAccordion === item.id ? null : item.id
                    )
                  }
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{item.emoji}</span>
                    <span className="font-semibold text-gray-700 text-sm">
                      {item.title}
                    </span>
                  </div>
                  <span
                    className={`text-green-500 font-bold text-lg transition-transform duration-300 ${
                      openAccordion === item.id ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openAccordion === item.id
                      ? "max-h-40 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-5 pb-4">
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {item.summary}{" "}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelected(item);
                        }}
                        className="text-green-600 font-bold hover:underline"
                      >
                        Baca lebih →
                      </button>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {selected && (
        <MateriModal item={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}

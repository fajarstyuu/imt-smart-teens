export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "Kepanjangan dari IMT adalah...?",
    options: [
      "Indeks Massa Tubuh",
      "Indeks Metabolisme Total",
      "Indeks Makanan Tubuh",
      "Indeks Mineralisasi Tulang",
    ],
    correctIndex: 0,
    explanation:
      "IMT adalah singkatan dari Indeks Massa Tubuh, yang digunakan untuk mengukur apakah berat badan seseorang ideal berdasarkan tinggi badannya.",
  },
  {
    id: 2,
    question: "Rumus perhitungan IMT yang benar adalah...?",
    options: [
      "Berat Badan (kg) ÷ Tinggi Badan (m)",
      "Berat Badan (kg) ÷ Tinggi Badan² (m²)",
      "Berat Badan (kg) × Tinggi Badan (m)",
      "Tinggi Badan (cm) ÷ Berat Badan (kg)",
    ],
    correctIndex: 1,
    explanation:
      "IMT dihitung dengan cara membagi berat badan dalam kilogram dengan kuadrat tinggi badan dalam meter (kg/m²).",
  },
  {
    id: 3,
    question: "Seseorang dengan IMT antara 18,5 – 24,9 termasuk dalam kategori...?",
    options: ["Kurus (Underweight)", "Normal", "Overweight (Gemuk)", "Obesitas"],
    correctIndex: 1,
    explanation:
      "Menurut WHO, IMT antara 18,5 – 24,9 dikategorikan sebagai berat badan normal atau ideal.",
  },
  {
    id: 4,
    question: "Berapakah batas IMT seseorang dinyatakan mengalami Obesitas?",
    options: ["IMT > 25,0", "IMT > 27,5", "IMT > 30,0", "IMT > 35,0"],
    correctIndex: 2,
    explanation:
      "Menurut klasifikasi WHO, seseorang dinyatakan Obesitas jika nilai IMT-nya melebihi 30,0 kg/m².",
  },
  {
    id: 5,
    question: "Risiko kesehatan yang paling sering dikaitkan dengan Obesitas adalah...?",
    options: [
      "Anemia dan malnutrisi",
      "Penyakit jantung dan diabetes tipe 2",
      "Osteoporosis dan patah tulang",
      "Gangguan penglihatan",
    ],
    correctIndex: 1,
    explanation:
      "Obesitas meningkatkan risiko berbagai penyakit kronis terutama penyakit jantung, diabetes tipe 2, tekanan darah tinggi, dan stroke.",
  },
  {
    id: 6,
    question:
      "Seorang remaja memiliki berat badan 50 kg dan tinggi badan 160 cm. Berapakah nilai IMT-nya?",
    options: ["17,5", "18,5", "19,5", "20,5"],
    correctIndex: 2,
    explanation:
      "IMT = 50 ÷ (1,60)² = 50 ÷ 2,56 ≈ 19,5. Termasuk dalam kategori berat badan Normal.",
  },
  {
    id: 7,
    question: "Mengapa IMT tidak selalu menjadi satu-satunya indikator kesehatan?",
    options: [
      "Karena IMT hanya berlaku untuk orang dewasa di atas 30 tahun",
      "Karena IMT tidak membedakan antara massa otot dan massa lemak",
      "Karena IMT hanya bisa dihitung oleh dokter",
      "Karena IMT tidak memperhitungkan usia seseorang",
    ],
    correctIndex: 1,
    explanation:
      "IMT tidak membedakan massa otot dan masa lemak. Seorang atlet dengan otot yang besar bisa memiliki IMT tinggi namun tetap sehat.",
  },
  {
    id: 8,
    question: "Aktivitas fisik yang direkomendasikan untuk remaja setiap minggunya adalah...?",
    options: [
      "Minimal 60 menit per hari",
      "Minimal 30 menit per hari, 3 kali seminggu",
      "Minimal 2 jam per hari",
      "Minimal 1 jam per minggu",
    ],
    correctIndex: 0,
    explanation:
      "WHO merekomendasikan remaja usia 5–17 tahun untuk melakukan aktivitas fisik intensitas sedang hingga berat minimal 60 menit setiap hari.",
  },
  {
    id: 9,
    question: "Faktor utama yang mempengaruhi berat badan ideal seseorang adalah...?",
    options: [
      "Hanya pola makan",
      "Hanya genetik dan keturunan",
      "Kombinasi pola makan, aktivitas fisik, genetik, dan kondisi medis",
      "Hanya aktivitas fisik",
    ],
    correctIndex: 2,
    explanation:
      "Berat badan dipengaruhi oleh banyak faktor: pola makan, aktivitas fisik, faktor genetik, kondisi hormonal, dan kesehatan mental.",
  },
  {
    id: 10,
    question: "Langkah pertama yang tepat dilakukan remaja dengan IMT kurus (underweight) adalah...?",
    options: [
      "Langsung mengonsumsi suplemen dan vitamin dosis tinggi",
      "Makan sebanyak-banyaknya tanpa memperhatikan jenis makanan",
      "Konsultasi dengan dokter atau ahli gizi lalu tingkatkan asupan nutrisi secara seimbang",
      "Berhenti berolahraga agar tidak membakar kalori",
    ],
    correctIndex: 2,
    explanation:
      "Penanganan berat badan kurang harus dilakukan secara bertahap dengan konsultasi profesional untuk menyusun program nutrisi yang tepat dan seimbang.",
  },
];

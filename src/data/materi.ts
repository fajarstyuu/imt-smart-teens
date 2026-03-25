export interface MateriItem {
  id: string;
  emoji: string;
  title: string;
  summary: string;
  content: string[];
}

export const materiList: MateriItem[] = [
  {
    id: "apa-itu-imt",
    emoji: "📏",
    title: "Apa Itu IMT?",
    summary: "Pengenalan dasar tentang Indeks Massa Tubuh dan kegunaannya.",
    content: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Indeks Massa Tubuh (IMT) atau Body Mass Index (BMI) adalah alat ukur sederhana yang digunakan untuk menilai apakah berat badan seseorang sudah proporsional dengan tinggi badannya.",
      "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. IMT pertama kali diperkenalkan oleh ilmuwan Belgia bernama Adolphe Quetelet pada abad ke-19 dan hingga kini masih digunakan sebagai indikator kesehatan global.",
      "Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit. Meskipun sederhana, IMT sangat berguna sebagai langkah awal skrining untuk mengidentifikasi individu yang berisiko mengalami masalah kesehatan akibat berat badan berlebih atau kekurangan.",
    ],
  },
  {
    id: "rumus-imt",
    emoji: "🧮",
    title: "Rumus & Cara Hitung IMT",
    summary: "Pelajari rumus resmi dan cara menghitung IMT dengan mudah.",
    content: [
      "Lorem ipsum dolor sit amet, adipiscing elit. Rumus IMT sangat sederhana: IMT = Berat Badan (kg) ÷ [Tinggi Badan (m)]². Dengan rumus ini, siapa pun bisa menghitung nilai IMT-nya sendiri hanya dengan data berat dan tinggi badan.",
      "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam. Contoh: jika seseorang memiliki berat 60 kg dan tinggi 165 cm (1,65 m), maka IMT = 60 ÷ (1,65)² = 60 ÷ 2,7225 ≈ 22,0.",
      "Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse. Perlu diingat bahwa satuan tinggi badan harus dikonversi dari sentimeter (cm) ke meter (m) sebelum dimasukkan ke dalam rumus perhitungan.",
    ],
  },
  {
    id: "kategori-imt",
    emoji: "📊",
    title: "Kategori & Klasifikasi IMT",
    summary: "Kenali empat kategori IMT berdasarkan standar WHO.",
    content: [
      "Lorem ipsum dolor sit amet. Menurut World Health Organization (WHO), hasil IMT dibagi menjadi empat kategori utama: Kurus/Underweight (IMT < 18,5), Normal (18,5–24,9), Overweight/Gemuk (25,0–29,9), dan Obesitas (IMT ≥ 30,0).",
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium. Setiap kategori memiliki implikasi kesehatan yang berbeda. Berat badan yang kurang dapat menyebabkan malnutrisi, sedangkan kelebihan berat badan meningkatkan risiko penyakit kronis.",
      "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus. Di beberapa negara Asia termasuk Indonesia, sering digunakan batas yang sedikit lebih rendah untuk kategori overweight dan obesitas mengingat perbedaan komposisi tubuh ras Asia.",
    ],
  },
  {
    id: "manfaat-imt",
    emoji: "💡",
    title: "Manfaat Mengetahui IMT",
    summary: "Mengapa penting bagi remaja untuk tahu nilai IMT mereka?",
    content: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing. Mengetahui nilai IMT secara rutin membantu remaja menyadari kondisi berat badannya lebih awal. Deteksi dini sangat penting agar perubahan gaya hidup dapat dilakukan sebelum berujung pada masalah kesehatan yang lebih serius.",
      "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe. Selain itu, pemantauan IMT secara berkala dapat memotivasi remaja untuk menjaga pola makan sehat dan rutin berolahraga demi mencapai atau mempertahankan berat badan ideal.",
      "Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores. Bagi tenaga kesehatan, IMT menjadi alat bantu yang efisien dalam menentukan apakah seorang pasien memerlukan evaluasi gizi lebih lanjut atau intervensi medis.",
    ],
  },
  {
    id: "batasan-imt",
    emoji: "⚠️",
    title: "Keterbatasan IMT",
    summary: "IMT bukan satu-satunya indikator kesehatan — ini penjelasannya.",
    content: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. IMT memiliki keterbatasan penting: tidak membedakan antara massa otot dan massa lemak. Seorang atlet dengan massa otot tinggi bisa memiliki IMT di atas normal, padahal kondisi kesehatannya sangat prima.",
      "Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium doloremque. IMT juga tidak memperhitungkan distribusi lemak tubuh. Lemak yang terkonsentrasi di perut (lemak visceral) jauh lebih berbahaya dibanding lemak di pinggul atau paha, namun keduanya bisa menghasilkan IMT yang sama.",
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sequi. Oleh karena itu, IMT sebaiknya digunakan bersama indikator lain seperti lingkar pinggang, persentase lemak tubuh, tekanan darah, dan pemeriksaan darah rutin untuk gambaran kesehatan yang lebih komprehensif.",
    ],
  },
  {
    id: "tips-sehat",
    emoji: "🥗",
    title: "Tips Hidup Sehat untuk Remaja",
    summary: "Panduan praktis menjaga berat badan ideal selama masa remaja.",
    content: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Menjaga berat badan ideal saat remaja dimulai dari pola makan bergizi seimbang. Pastikan setiap hari mengonsumsi karbohidrat kompleks, protein hewani dan nabati, lemak sehat, serta sayur dan buah yang cukup.",
      "At vero eos et accusamus et iusto odio dignissimos ducimus bleat. Aktivitas fisik minimal 60 menit per hari sangat dianjurkan. Pilih olahraga yang kamu sukai — bisa bola basket, renang, bersepeda, atau sekadar jalan cepat — agar lebih mudah dijadikan kebiasaan.",
      "Nam libero tempore cum soluta nobis eligendi optio nihil impedit addenda. Tidur cukup (7–9 jam per malam), kelola stres dengan baik, minum air putih yang cukup, dan hindari minuman manis berlebihan. Kebiasaan kecil yang konsisten akan memberikan dampak besar bagi kesehatan jangka panjang.",
    ],
  },
];

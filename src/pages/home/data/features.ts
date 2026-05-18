type Features = {
  id: number
  label: string
  description: string
  image: string
  badge: string
  color: string
}

export const features: Features[] = [
  {
    id: 1,
    label: "Smart Waste Scanner.",
    description:
      "Identifikasi jenis sampah secara otomatis menggunakan teknologi AI",
    image: "https://picsum.photos/300/200/?blur=2",
    badge: "Klasifikasi",
    color: "#000000",
  },
  {
    id: 2,
    label: "Recycling Recommendation.",
    description:
      "Dapatkan rekomendasi pengelolaan sampah yang tepat berdasarkan hasil klasifikasi.",
    image: "https://picsum.photos/300/200/",
    badge: "Rekomendasi",
    color: "#000000",
  },
  {
    id: 3,
    label: "Nearby Recycling Centers.",
    description: "Temukan lokasi bank sampah terdekat dengan mudah.",
    image: "https://picsum.photos/300/200/?grayscale=1",
    badge: "Bacaan",
    color: "#000000",
  },
  {
    id: 4,
    label: "Eco Insights",
    description:
      "Akses artikel dan informasi seputar pengelolaan sampah dan lingkungan.",
    image: "https://picsum.photos/300/200/?grayscale",
    badge: "Lokasi",
    color: "#000000",
  },
  {
    id: 5,
    label: "Scan History.",
    description:
      "Pantau riwayat hasil klasifikasi sampah yang pernah Anda lakukan.",
    image: "https://picsum.photos/300/200/?enhance",
    color: "#000000",
    badge: "Rekomendasi",
  },
  {
    id: 6,
    label: "Eco Assistant.",
    description:
      "Asisten pintar yang siap menjawab pertanyaan seputar sampah dan daur ulang..",
    image: "https://picsum.photos/300/200/",
    color: "#000000",
    badge: "Rekomendasi",
  },
]

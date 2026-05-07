type Card = {
  id: number
  label: string
  description: string
  image: string
  badge: string
}

export const cards: Card[] = [
  {
    id: 1,
    label: "Klasifikasi Sampah Otomatis.",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image: "https://picsum.photos/300/200/?blur=2",
    badge: "Klasifikasi",
  },
  {
    id: 2,
    label: "Bacaan Artikel Lingkungan.",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image: "https://picsum.photos/300/200/?grayscale=1",
    badge: "Bacaan",
  },
  {
    id: 3,
    label: "Lokasi Bank Sampah Terdekat",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image: "https://picsum.photos/300/200/?grayscale",
    badge: "Lokasi",
  },
  {
    id: 4,
    label: "Rekomendasi Penanganan.",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image: "https://picsum.photos/300/200/",
    badge: "Rekomendasi",
  },
  {
    id: 5,
    label: "Rekomendasi Penanganan.",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image: "https://picsum.photos/300/200/?enhance",
    badge: "Rekomendasi",
  },
]

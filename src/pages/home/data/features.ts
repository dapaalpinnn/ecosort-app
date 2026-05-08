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
    label: "Klasifikasi Sampah Otomatis.",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image: "https://picsum.photos/300/200/?blur=2",
    badge: "Klasifikasi",
    color: "#000000",
  },
  {
    id: 2,
    label: "Bacaan Artikel Lingkungan.",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image: "https://picsum.photos/300/200/?grayscale=1",
    badge: "Bacaan",
    color: "#000000",
  },
  {
    id: 3,
    label: "Lokasi Bank Sampah Terdekat",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image: "https://picsum.photos/300/200/?grayscale",
    badge: "Lokasi",
    color: "#000000",
  },
  {
    id: 4,
    label: "Rekomendasi Penanganan.",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image: "https://picsum.photos/300/200/",
    badge: "Rekomendasi",
    color: "#000000",
  },
  {
    id: 5,
    label: "Rekomendasi Penanganan.",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image: "https://picsum.photos/300/200/?enhance",
    color: "#000000",
    badge: "Rekomendasi",
  },
]

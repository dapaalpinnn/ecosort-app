type Statistics = {
  value: number
  unit: "tons" | "%" | "Miliar"
  description: string
}

export const statistics: Statistics[] = [
  {
    value: 144839,
    unit: "tons",
    description: "Sampah Dihasilkan Setiap Hari",
  },
  {
    value: 75,
    unit: "%",
    description: "Sampah Belum Terkelola",
  },
  {
    value: 83.75,
    unit: "%",
    description: "Sampah Rumah Tangga Belum Terpilah",
  },
  {
    value: 40.76,
    unit: "%",
    description: "Sampah Sisa Makanan",
  },
]

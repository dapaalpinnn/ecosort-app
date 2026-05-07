type Statistics = {
  value: number
  unit: "tons" | "%" | "Miliar"
  description: string
}

export const statistics: Statistics[] = [
  {
    value: 25.099,
    unit: "tons",
    description: "Sampah Dihasilkan Setiap Tahun",
  },
  {
    value: 60,
    unit: "%",
    description: "Didominasi oleh Sampah Organik",
  },
  {
    value: 17,
    unit: "%",
    description: "Merupakan Sampah Plastik",
  },
  {
    value: 35,
    unit: "%",
    description: "Masih Belum Terkelola",
  },
]

type SubContent = {
  subtitle: string
  content: string
}

type Term = {
  id: string
  title: string
  content?: string
  children?: SubContent[]
}

export const terms: Term[] = [
  {
    id: "terms1",
    title: "Ketentuan Umum Penggunaan",
    content:
      "Dengan mengakses atau menggunakan EcoSort AI, Anda menyatakan setuju untuk mematuhi seluruh syarat dan ketentuan yang tercantum dalam dokumen ini serta peraturan perundang-undangan yang berlaku di wilayah Republik Indonesia.",
  },

  {
    id: "terms2",
    title: "Keamanan Akun",
    content:
      "Pengguna bertanggung jawab penuh atas kerahasiaan informasi akun, termasuk nama pengguna dan kata sandi. EcoSort AI tidak bertanggung jawab atas kerugian yang timbul akibat penyalahgunaan akun oleh pihak lain yang disebabkan oleh kelalaian pengguna.",
  },

  {
    id: "terms3",
    title: "Ruang Lingkup Layanan",
    content:
      "EcoSort AI menyediakan layanan untuk membantu klasifikasi sampah dan memberikan rekomendasi pengelolaan berbasis kecerdasan buatan. Kami berhak melakukan pembaruan, pengembangan, maupun pemeliharaan sistem guna meningkatkan kualitas layanan.",
  },

  {
    id: "terms4",
    title: "Batasan Layanan",
    children: [
      {
        subtitle: "Batasan Klasifikasi Sampah",
        content:
          "EcoSort AI menyediakan layanan untuk membantu klasifikasi sampah dan memberikan rekomendasi pengelolaan berbasis kecerdasan buatan. Kami berhak melakukan pembaruan, pengembangan, maupun pemeliharaan sistem guna meningkatkan kualitas layanan.",
      },

      {
        subtitle: "Batasan Layanan Bank Sampah",
        content:
          "Fitur rekomendasi bank sampah hanya tersedia untuk wilayah Surabaya dan sekitarnya. Informasi di luar wilayah tersebut dapat tidak tersedia atau tidak sepenuhnya akurat.",
      },

      {
        subtitle: "Batasan Chatbot AI",
        content:
          "Chatbot EcoSort AI hanya digunakan untuk memberikan informasi yang berkaitan dengan sampah, daur ulang, dan pengelolaan lingkungan. Penggunaan di luar konteks tersebut dapat dibatasi atau tidak diproses oleh sistem.",
      },
    ],
  },

  {
    id: "terms5",
    title: "Kebijakan Privasi",
    content:
      "Kami berkomitmen untuk melindungi data pribadi pengguna. Seluruh informasi yang dikumpulkan akan dikelola sesuai dengan kebijakan privasi yang berlaku di platform ini dengan prinsip keamanan dan kerahasiaan data.",
  },

  {
    id: "terms6",
    title: "Batasan Tanggung Jawab",
    content:
      "Kami berupaya menyediakan layanan yang akurat dan optimal, namun tidak bertanggung jawab atas kerugian tidak langsung yang timbul akibat kesalahan teknis, gangguan sistem, atau pihak ketiga di luar kendali kami.",
  },

  {
    id: "terms7",
    title: "Perubahan Ketentuan",
    content:
      "EcoSort AI berhak untuk mengubah, memperbarui, atau menyesuaikan syarat dan ketentuan ini sewaktu-waktu. Perubahan akan berlaku sejak dipublikasikan, dan penggunaan layanan secara berkelanjutan dianggap sebagai bentuk persetujuan pengguna.",
  },
]

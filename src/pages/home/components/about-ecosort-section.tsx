import recycleTrash from "@/assets/recycle-trash.png"
import { ArrowUpRight } from "lucide-react"

const AboutEcosortSection = () => {
  return (
    <section className="w-full py-20 md:py-28">
      <div className="mx-auto w-full max-w-7xl sm:px-12 lg:px-20">
        <div className="bg-primary sm:rounded-2xl md:grid md:grid-cols-2">
          <div className="flex flex-col gap-2 px-8 py-12 sm:p-10">
            <h2 className="md:gap4 flex items-center gap-2 text-3xl tracking-tight text-background md:text-4xl">
              Tentang Ecosort <ArrowUpRight size={40} />
            </h2>
            <p className="mt-2 w-3/4 text-lg leading-tight text-accent sm:w-full md:mt-4">
              Kami menghadirkan solusi digital masa kini. Dirancang khusus untuk
              menjembatani celah antara teknologi dan kelestarian lingkungan.
              Dengan memanfaatkan sistem klasifikasi berbasis kecerdasan buatan,
              platform ini memandu Anda untuk memilah dan mendaur ulang berbagai
              jenis sampah domestik secara jauh lebih efisien.
            </p>
          </div>

          <div className="flex items-center p-8 pb-16 sm:p-10">
            <img
              src={recycleTrash}
              alt="Gambar"
              className="mx-auto h-full w-full rounded-2xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutEcosortSection

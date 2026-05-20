import Counter from "@/pages/home/components/counter"

const ClassificationResult = () => {
  return (
    <div className="grid items-center gap-6 lg:grid-cols-[1.1fr_0.9fr]">
      <figure className="overflow-hidden rounded-3xl border bg-muted">
        <img
          src="https://picsum.photos/600/400/?grayscale=1"
          alt="Hasil Klasifikasi"
          className="h-full w-full object-cover"
        />
      </figure>
      <article className="flex h-full flex-col justify-evenly gap-4 rounded-3xl border bg-background p-6">
        <div className="mx-auto">
          <p className="text-sm tracking-tight text-muted-foreground">
            Hasil Klasifikasi
          </p>
          <div className="mt-3 flex items-end gap-2">
            <p className="text-6xl font-semibold tracking-tighter">
              <Counter value={83} duration={3} />
            </p>
            <span className="pb-1 text-3xl font-medium">%</span>
          </div>
        </div>
        <div>
          <p className="text-sm tracking-tight text-muted-foreground">
            Terdeteksi sebagai
          </p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tighter">
            3 (Bahan Berbahaya & Beracun)
          </h2>
        </div>
      </article>
    </div>
  )
}

export default ClassificationResult

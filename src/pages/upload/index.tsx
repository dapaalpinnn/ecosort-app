import { Input } from "@/components/ui/input"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { UploadCloud, Image as ImageIcon, Link2 } from "lucide-react"
import Button from "@/components/ui/button"
import Section from "@/components/layout/section"
import SectionTitle from "@/components/ui/section-title"
import SecondLifeBetterLife from "@/components/ui/second-life-better-life"

const Upload = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [imageUrl, setImageUrl] = useState<string>("")
  const [preview, setPreview] = useState<string | null>(null)

  const navigate = useNavigate()

  /**
   * handle upload image from local file
   */
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]

    if (!file) return

    setSelectedFile(file)

    // create local preview
    const objectUrl = URL.createObjectURL(file)

    setPreview(objectUrl)

    // reset image url
    setImageUrl("")
  }

  /**
   * handle image url input
   */
  const handleImageUrl = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value

    setImageUrl(value)

    // remove uploaded file
    setSelectedFile(null)

    // set preview from url
    setPreview(value)
  }

  /**
   * submit upload
   */
  const handleSubmit = async () => {
    try {
      console.log(selectedFile)
      console.log(imageUrl)

      // next:
      // upload to backend
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Section className="px-4 tracking-tight md:px-0 md:pb-15 lg:pb-20">
      <SecondLifeBetterLife />
      <SectionTitle as="h1">Upload Gambar</SectionTitle>
      <p className="mt-2 text-muted-foreground">
        Upload gambar atau gunakan link gambar untuk mengidentifikasi jenis
        sampah.
      </p>
      <div className="mt-8 w-full space-y-6">
        <label
          htmlFor="image-upload"
          className="flex min-h-80 w-full cursor-pointer flex-col items-center justify-center rounded-3xl border-2 border-dashed border-muted-foreground/30 bg-muted/30 p-6 transition hover:border-primary"
        >
          <UploadCloud size={48} className="text-muted-foreground" />
          <h2 className="mt-4 text-xl font-semibold">Upload Gambar</h2>
          <p className="mt-2 text-center text-sm text-muted-foreground">
            Klik untuk memilih gambar
            <br />
            PNG, JPG, JPEG
          </p>
          <input
            id="image-upload"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleFileChange}
          />
        </label>

        <div className="space-y-2">
          <label className="flex items-center gap-2 text-sm font-medium">
            <Link2 size={16} />
            Gunakan Link Gambar
          </label>
          <Input
            type="text"
            placeholder="https://example.com/image.jpg"
            value={imageUrl}
            onChange={handleImageUrl}
          />
        </div>

        <div className="rounded-3xl border p-4">
          <div className="mb-4 flex items-center gap-2">
            <ImageIcon size={18} />
            <h2 className="font-semibold">Preview Gambar</h2>
          </div>

          {preview ? (
            <div className="flex min-h-75 items-center justify-center rounded-2xl bg-muted/20 p-4">
              <img
                src={preview}
                alt="Preview"
                className="max-h-80 w-auto max-w-full rounded-2xl object-contain"
              />
            </div>
          ) : (
            <div className="flex min-h-75 items-center justify-center rounded-2xl bg-muted/40">
              <p className="text-muted-foreground">
                Preview gambar akan muncul di sini
              </p>
            </div>
          )}
        </div>

        <div className="relative mx-auto flex w-full items-center justify-center gap-4">
          <Button
            size="lg"
            variant={"outline"}
            className="flex-1"
            onClick={() => navigate("/")}
          >
            Kembali
          </Button>
          <Button
            size="lg"
            className="flex-1"
            disabled={!preview}
            onClick={handleSubmit}
          >
            Analisis Gambar
          </Button>
        </div>
      </div>
    </Section>
  )
}

export default Upload

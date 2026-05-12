import { useEffect, useState } from "react"
import Section from "@/components/layout/section"
import SecondLifeBetterLife from "@/components/ui/second-life-better-life"
import SectionTitle from "@/components/layout/section/section-title"
import { fetchArticles } from "@/services/article-service"
import { type ArticleData } from "@/types/article.types"
import { AxiosError } from "axios"
import { formatDate } from "@/utils/formated-date"
import { ArrowUpRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const Article = () => {
  const [articles, setArticles] = useState<ArticleData[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const getArticles = async () => {
      try {
        const response = await fetchArticles()
        setArticles(response.data)
      } catch (error: unknown) {
        setError(
          error instanceof AxiosError ? error.message : "Terjadi kesalahan"
        )
      } finally {
        setLoading(false)
      }
    }

    getArticles()
  }, [])

  if (loading)
    return <p className="mt-6 text-center text-muted-foreground">Loading...</p>
  if (error)
    return <p className="mt-6 text-center text-muted-foreground">{error}</p>

  return (
    <Section>
      <SecondLifeBetterLife />
      <SectionTitle className="font-serif">Artikel</SectionTitle>
      <p className="font-serif tracking-tight text-muted-foreground">
        Baca artikel seputar pengelolaan sampah dan lingkungan.
      </p>
      {loading && (
        <p className="mt-6 text-muted-foreground">Memuat artikel...</p>
      )}
      {error && <p className="mt-6 text-sm text-red-500">{error}</p>}
      {!loading && articles.length === 0 && !error && (
        <p className="mt-6 text-muted-foreground">Artikel tidak ditemukan.</p>
      )}
      <div className="mt-8 grid grid-cols-1 gap-6">
        {articles.map((article) => (
          <div
            key={article.url}
            className="max-w-sm overflow-hidden rounded-xl border bg-background text-left md:flex md:max-w-xl md:items-center md:justify-start lg:max-w-4xl"
          >
            <img
              src={article.image}
              alt={article.title}
              className="h-56 w-full object-cover md:w-56 lg:w-56"
            />
            <div className="space-y-3 p-4 tracking-tight md:px-6">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Badge
                  className="p-2 text-[14px] text-muted-foreground"
                  variant={"outline"}
                >
                  {article.source}
                </Badge>
                <Badge
                  className="p-2 text-[14px] text-muted-foreground"
                  variant={"outline"}
                >
                  {formatDate(article.date)}
                </Badge>
              </div>
              <h2 className="line-clamp-2 font-serif text-xl font-medium tracking-tighter lg:text-3xl">
                {article.title}
              </h2>
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 flex w-fit items-center justify-center gap-1 bg-primary px-3 py-1.5 text-sm font-medium text-accent md:rounded-full lg:px-4"
              >
                Baca sekarang <ArrowUpRight />
              </a>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}

export default Article

import { useEffect, useState } from "react"
import Section from "@/components/layout/section"
import SecondLifeBetterLife from "@/components/ui/second-life-better-life"
import SectionTitle from "@/components/layout/section/section-title"
import { fetchArticles } from "@/services/article-service"
import { type ArticleData } from "@/types/article.types"
import { AxiosError } from "axios"

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

  if (loading) return <p>Loading...</p>
  if (error) return <p>{error}</p>

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
      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => (
          <div
            key={article.url}
            className="overflow-hidden rounded-xl border bg-background"
          >
            <img
              src={article.image}
              alt={article.title}
              className="h-56 w-full object-cover"
            />
            <div className="space-y-3 p-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <p>{article.source}</p>
                <span>•</span>
                <p>{article.date}</p>
              </div>
              <h2 className="line-clamp-2 text-xl font-semibold">
                {article.title}
              </h2>
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-sm font-medium underline"
              >
                Baca Artikel
              </a>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}

export default Article

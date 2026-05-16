import { Badge } from "@/components/ui/badge"
import { AxiosError } from "axios"
import { formatDate } from "@/utils/formated-date"
import { ArrowUpRight } from "lucide-react"
import { fetchArticles } from "@/services/article-service"
import { useSearchParams } from "react-router-dom"
import { type ArticleData } from "@/types/article"
import { useEffect, useState } from "react"
import Section from "@/components/layout/section"
import PageLoading from "@/components/ui/page-loading"
import SectionTitle from "@/components/ui/section-title"
import AppPagination from "@/common/app-pagination"
import SecondLifeBetterLife from "@/components/ui/second-life-better-life"

const Article = () => {
  const [articles, setArticles] = useState<ArticleData[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)
  const [totalPages, setTotalPages] = useState<number>(1)
  const [searchParams, setSearchParams] = useSearchParams()

  const page: number = Number(searchParams.get("page") || 1)

  useEffect(() => {
    const getArticles = async () => {
      try {
        const response = await fetchArticles(page, 10)
        setArticles(response.data)
        setTotalPages(response.pagination.totalPages)
      } catch (error: unknown) {
        setError(
          error instanceof AxiosError ? error.message : "Terjadi kesalahan"
        )
      } finally {
        setLoading(false)
      }
    }

    getArticles()
  }, [page])

  if (loading) return <PageLoading description="Memuat artikel" />

  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="mt-6 text-center text-muted-foreground">{error}</p>
      </div>
    )
  }

  return (
    <Section>
      <SecondLifeBetterLife />
      <SectionTitle>Rekomendasi Artikel</SectionTitle>
      <p className="tracking-tight text-muted-foreground">
        Baca artikel seputar pengelolaan sampah dan lingkungan.
      </p>
      {loading && <PageLoading description="Memuat artikel" />}
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
              src={article.image || "https://picsum.photos/300/200?random=1"}
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
      <AppPagination
        page={page}
        totalPages={totalPages}
        onPageChange={(newPage) => {
          setSearchParams({ page: String(newPage) })
        }}
      />
    </Section>
  )
}

export default Article

import { Input } from "@/components/ui/input"
import { Loading } from "@/components/ui/loading"
import { AxiosError } from "axios"
import { useDebounce } from "use-debounce"
import { fetchArticles } from "@/services/article-service"
import { useSearchParams } from "react-router-dom"
import { type ArticleData } from "@/types/article"
import { useEffect, useState } from "react"
import Section from "@/components/layout/section"
import ArticleCard from "@/pages/article/components/article-card"
import SectionTitle from "@/components/ui/section-title"
import AppPagination from "@/common/app-pagination"
import SecondLifeBetterLife from "@/components/ui/second-life-better-life"
import RecycleLogoAnimation from "@/pages/home/components/recycle-animation"

const Article = () => {
  const [articles, setArticles] = useState<ArticleData[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)
  const [totalPages, setTotalPages] = useState<number>(1)
  const [searchParams, setSearchParams] = useSearchParams()
  const page: number = Number(searchParams.get("page") || 1)
  const searchQuery: string = searchParams.get("search") || ""

  /**
   * sync search to url
   */
  const [search, setSearch] = useState<string>(searchQuery)

  /**
   * debounce search input
   */
  const [debouncedSearch] = useDebounce(search, 500)

  /**
   * sync debounce search to url
   */
  useEffect(() => {
    const currentSearch = searchParams.get("search") || ""

    if (debouncedSearch !== currentSearch) {
      setSearchParams((prev) => {
        const params = new URLSearchParams(prev)

        /**
         * reset page when search changes
         */
        params.set("page", "1")

        if (debouncedSearch) {
          params.set("search", debouncedSearch)
        } else {
          params.delete("search")
        }

        return params
      })
    }
  }, [debouncedSearch, searchParams, setSearchParams])

  useEffect(() => {
    const getArticles = async () => {
      try {
        setLoading(true)
        setError(null)

        const response = await fetchArticles(page, 10, searchQuery)

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
  }, [page, searchQuery])

  return (
    <Section className="px-4 tracking-tight sm:px-0">
      <SecondLifeBetterLife />
      <div className="mb-6 w-full">
        <SectionTitle as="h1" className="w-full">
          Rekomendasi Artikel
        </SectionTitle>
        <p className="mt-2 text-muted-foreground">
          Baca artikel seputar pengelolaan sampah dan lingkungan.
        </p>
      </div>
      <div className="mx-4 w-full sm:mx-0">
        <Input
          placeholder="Cari artikel berdasarkan judul ..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="h-12 w-full max-w-sm border-muted-foreground/20 bg-background px-4 text-sm shadow-none focus-visible:ring-1 md:max-w-full"
        />
      </div>
      {loading && (
        <div className="mt-6 flex min-h-[50svh] items-center gap-2 text-sm text-muted-foreground">
          <Loading description="Memuat artikel" />
        </div>
      )}
      {!loading && error && (
        <div className="flex min-h-[50svh] w-full flex-col items-center justify-center">
          <RecycleLogoAnimation />
          <p className="mt-2 text-muted-foreground">{error}</p>
        </div>
      )}
      {!loading && !error && articles.length === 0 && (
        <div className="flex min-h-[50svh] w-full flex-col items-center justify-center">
          <RecycleLogoAnimation />
          <p className="mt-2 text-muted-foreground">Artikel tidak ditemukan.</p>
        </div>
      )}
      {!loading && !error && articles.length > 0 && (
        <>
          <div className="mt-8 grid grid-cols-1 gap-6">
            {articles.map((article, index) => (
              <ArticleCard key={index} article={article} />
            ))}
          </div>
          <AppPagination
            page={page}
            totalPages={totalPages}
            onPageChange={(newPage) => {
              setSearchParams({
                page: String(newPage),
                ...(searchQuery && {
                  search: searchQuery,
                }),
              })
            }}
          />
        </>
      )}
    </Section>
  )
}

export default Article

import { Badge } from "@/components/ui/badge"
import { formatDate } from "@/utils/formated-date"
import { ArrowUpRight } from "lucide-react"
import { type ArticleData } from "@/types/article"

const ArticleCard = ({ article }: { article: ArticleData }) => {
  return (
    <div
      key={article.url}
      className="mx-4 max-w-sm overflow-hidden rounded-xl border bg-background text-left sm:mx-0 md:flex md:max-w-xl md:items-center md:justify-start lg:max-w-4xl"
    >
      <img
        src={article.image || "https://picsum.photos/300/200?random=1"}
        alt={article.title}
        className="h-56 w-full object-cover md:w-56"
      />
      <div className="space-y-3 p-4 tracking-tight md:px-6">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Badge
            variant="outline"
            className="p-2 text-[14px] text-muted-foreground"
          >
            {article.source}
          </Badge>
          <Badge
            variant="outline"
            className="p-2 text-[14px] text-muted-foreground"
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
  )
}

export default ArticleCard

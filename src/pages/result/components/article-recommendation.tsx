import { Link } from "react-router-dom"
import { Badge } from "@/components/ui/badge"
import { ArrowUpRight } from "lucide-react"
import SectionTitle from "@/components/ui/section-title"
import Section from "@/components/layout/section"

const ArticleRecommendation = () => {
  return (
    <Section id="article-recommendation">
      <SectionTitle as="h2" className="mx-auto w-full">
        Artikel Terkait
      </SectionTitle>
      <p className="text-sm text-muted-foreground">
        Pelajari lebih lanjut mengenai pengelolaan sampah
      </p>
      <div className="flex justify-center">
        <Link to="/article">
          <Badge
            variant="outline"
            className="cursor-pointer px-4 py-2 text-sm tracking-tight transition-all hover:bg-muted"
          >
            Lihat artikel lainnya
            <ArrowUpRight className="ml-1 size-4" />
          </Badge>
        </Link>
      </div>
    </Section>
  )
}

export default ArticleRecommendation

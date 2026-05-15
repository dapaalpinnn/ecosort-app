import { type PaginationData } from "@/types/pagination"

/**
 * article data structure
 */
export interface ArticleData {
  id: number
  keyword: string
  title: string
  url: string
  image: string
  date: string
  source: string
}

/**
 * article api response structure
 */
export interface ArticleDataResponse {
  success: boolean
  data: ArticleData[]
  pagination: PaginationData
}

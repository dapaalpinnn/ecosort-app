/**
 * article data structure
 */
export interface ArticleData {
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
}

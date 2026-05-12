import { apiRequest } from "@/services"
import { type ArticleDataResponse } from "@/types/article.types"

/**
 * fetch all articles
 */
export const fetchArticles = async (): Promise<ArticleDataResponse> => {
  return await apiRequest<ArticleDataResponse>("/artikel", "GET")
}

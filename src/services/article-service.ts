import { apiRequest } from "@/services"
import { type ArticleDataResponse } from "@/types/article.types"

/**
 * fetch all articles with pagination
 */
export const fetchArticles = async (
  page: number = 1,
  limit: number = 10
): Promise<ArticleDataResponse> => {
  return await apiRequest<ArticleDataResponse>(
    `/artikel?page=${page}&limit=${limit}`,
    "GET"
  )
}

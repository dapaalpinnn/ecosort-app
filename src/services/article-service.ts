import { apiRequest } from "@/services"
import { type ArticleDataResponse } from "@/types/article"

/**
 * fetch all articles with pagination
 */
export const fetchArticles = async (
  page: number = 1,
  limit: number = 10,
  search: string = ""
): Promise<ArticleDataResponse> => {
  return await apiRequest<ArticleDataResponse>(
    `/artikel?page=${page}&limit=${limit}&search=${search}`,
    "GET"
  )
}

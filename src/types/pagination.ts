/**
 * Pagination metadata
 */
export interface PaginationData {
  total: number
  totalPages: number
  currentPage: number
  limit: number
}

/**
 * Pagination props
 */
export interface AppPaginationProps {
  page: number
  totalPages: number
  onPageChange: (page: number) => void
}

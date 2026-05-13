/**
 * pagination generator props
 */
type GeneratePaginationProps = {
  totalPages: number
  page: number
}

/**
 * generate pagination items with ellipsis
 */
export const generatePagination = ({
  totalPages,
  page,
}: GeneratePaginationProps) => {
  const pages: (number | string)[] = []

  if (totalPages <= 5) {
    return Array.from({ length: totalPages }, (_, i) => i + 1)
  }

  pages.push(1)

  if (page > 3) {
    pages.push("...")
  }

  const start = Math.max(2, page - 1)
  const end = Math.min(totalPages - 1, page + 1)

  for (let i = start; i <= end; i++) {
    pages.push(i)
  }

  if (page < totalPages - 2) {
    pages.push("...")
  }

  pages.push(totalPages)

  return pages
}

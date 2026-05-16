/**
 * pagination generator props
 */
type GeneratePaginationProps = {
  totalPages: number
  page: number
}

/**
 * generate pagination items with ellipsis
 *
 * example:
 * [1, "...", 4, 5, 6, "...", 10]
 */
export const generatePagination = ({
  totalPages,
  page,
}: GeneratePaginationProps) => {
  const pages: (number | string)[] = []

  /**
   * show all pages if total pages are small
   */
  if (totalPages <= 5) {
    return Array.from({ length: totalPages }, (_, i) => i + 1)
  }

  /**
   * always show first page
   */
  pages.push(1)

  /**
   * add left ellipsis
   */
  if (page > 3) {
    pages.push("...")
  }

  const start = Math.max(2, page - 1)
  const end = Math.min(totalPages - 1, page + 1)

  /**
   * add middle page numbers
   */
  for (let i = start; i <= end; i++) {
    pages.push(i)
  }

  /**
   * add right ellipsis
   */
  if (page < totalPages - 2) {
    pages.push("...")
  }

  /**
   * always show last page
   */
  pages.push(totalPages)

  return pages
}

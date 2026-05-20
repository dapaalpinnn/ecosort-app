import { generatePagination } from "@/utils/generate-pagination"
import { type AppPaginationProps } from "@/types/pagination"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationLink,
  PaginationNext,
  PaginationEllipsis,
} from "@/components/ui/pagination"

const AppPagination = ({
  page,
  totalPages,
  onPageChange,
}: AppPaginationProps) => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0 })
  }

  const handlePageChange = (newPage: number) => {
    onPageChange(newPage)
    handleScrollToTop()
  }

  return (
    <Pagination className="my-10">
      <PaginationContent>
        {/* Previous */}
        <PaginationItem>
          <PaginationPrevious
            size="lg"
            href="#"
            onClick={(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
              e.preventDefault()

              if (page > 1) {
                handlePageChange(page - 1)
              }
            }}
          />
        </PaginationItem>

        {/* Page numbers */}
        {generatePagination({ totalPages, page }).map((item, index) => (
          <PaginationItem key={index}>
            {item === "..." ? (
              <PaginationEllipsis />
            ) : (
              <PaginationLink
                href="#"
                isActive={page === item}
                onClick={(e) => {
                  e.preventDefault()
                  handlePageChange(Number(item))
                }}
              >
                {item}
              </PaginationLink>
            )}
          </PaginationItem>
        ))}

        {/* Next */}
        <PaginationItem>
          <PaginationNext
            size="lg"
            href="#"
            onClick={(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
              e.preventDefault()

              if (page < totalPages) {
                handlePageChange(page + 1)
              }
            }}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}

export default AppPagination

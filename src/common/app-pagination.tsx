import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationLink,
  PaginationNext,
} from "@/components/ui/pagination"
import { generatePagination } from "@/utils/generate-pagination"

interface AppPaginationProps {
  page: number
  totalPages: number
  onPageChange: (page: number) => void
}

const AppPagination = ({
  page,
  totalPages,
  onPageChange,
}: AppPaginationProps) => {
  const handleScrollToTop = () => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "instant" })
    }, 500)
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
            onClick={(e) => {
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
              <span className="px-3 text-muted-foreground">...</span>
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
            onClick={(e) => {
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

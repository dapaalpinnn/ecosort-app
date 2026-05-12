import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationLink,
  PaginationNext,
} from "@/components/ui/pagination"

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
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    }, 200)
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
        {Array.from({ length: totalPages }).map((_, index) => {
          const pageNumber = index + 1

          return (
            <PaginationItem key={pageNumber}>
              <PaginationLink
                size="icon"
                href="#"
                isActive={page === pageNumber}
                onClick={(e) => {
                  e.preventDefault()
                  handlePageChange(pageNumber)
                }}
              >
                {pageNumber}
              </PaginationLink>
            </PaginationItem>
          )
        })}

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

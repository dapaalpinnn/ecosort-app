import { Input } from "@/components/ui/input"
import { useState } from "react"
import Section from "@/components/layout/section"
import SectionTitle from "@/components/ui/section-title"
import Button from "@/components/ui/button"
import useWasteBanks from "@/hooks/use-waste-banks"
import useUserLocation from "@/hooks/use-user-location"
import WasteBankCard from "./components/waste-bank-card"
import AppPagination from "@/common/app-pagination"
import SecondLifeBetterLife from "@/components/ui/second-life-better-life"

const WasteBank = () => {
  const [page, setPage] = useState<number>(1)
  const [search, setSearch] = useState<string>("")
  const {
    userLocation,
    loading: locationLoading,
    error: locationError,
    getUserLocation,
  } = useUserLocation()

  const { banks, totalPages } = useWasteBanks({
    page,
    search,
    latitude: userLocation?.latitude,
    longitude: userLocation?.longitude,
  })

  return (
    <Section className="min-h-svh">
      <div className="mx-auto w-full max-w-5xl">
        <SecondLifeBetterLife />
        <div className="mb-6">
          <SectionTitle as="h1" className="mx-auto mt-4">
            Bank Sampah
          </SectionTitle>

          <p className="mt-2 text-muted-foreground">
            Temukan bank sampah di sekitar Anda
          </p>
        </div>

        {locationError && (
          <p className="mb-4 text-sm text-red-500">{locationError}</p>
        )}

        <div className="mb-8 flex w-full flex-col gap-3 sm:flex-row">
          <Input
            placeholder="Cari bank sampah..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value)
              setPage(1)
            }}
            className="h-12 w-full"
          />

          <Button
            onClick={getUserLocation}
            disabled={locationLoading}
            className="h-12 sm:w-fit"
          >
            {locationLoading ? "Mengambil lokasi..." : "Gunakan lokasi saya"}
          </Button>
        </div>

        <div className="min-h-125 space-y-4">
          {banks.length > 0 ? (
            banks.map((bank) => <WasteBankCard key={bank.id} bank={bank} />)
          ) : (
            <div className="flex h-75 items-center justify-center rounded-xl border">
              <p className="text-muted-foreground">
                Bank sampah tidak ditemukan
              </p>
            </div>
          )}
        </div>

        <div className="mt-10">
          <AppPagination
            page={page}
            totalPages={totalPages}
            onPageChange={(newPage) => setPage(newPage)}
          />
        </div>
      </div>
    </Section>
  )
}

export default WasteBank

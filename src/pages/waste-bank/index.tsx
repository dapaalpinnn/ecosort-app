import { Input } from "@/components/ui/input"
import { Loading } from "@/components/ui/loading"
import { useState } from "react"
import Button from "@/components/ui/button"
import Section from "@/components/layout/section"
import SectionTitle from "@/components/ui/section-title"
import AppPagination from "@/common/app-pagination"
import useWasteBanks from "@/hooks/use-waste-banks"
import WasteBankCard from "./components/waste-bank-card"
import useUserLocation from "@/hooks/use-user-location"
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

  const { banks, totalPages, nearbyBanks } = useWasteBanks({
    page,
    search,
    latitude: userLocation?.latitude,
    longitude: userLocation?.longitude,
  })

  return (
    <Section className="min-h-svh px-4 tracking-tight">
      <SecondLifeBetterLife />
      <div className="mb-6 w-full">
        <SectionTitle as="h1" className="mx-auto">
          Bank Sampah
        </SectionTitle>
        <p className="mt-2 text-muted-foreground">
          Temukan bank sampah di sekitar Anda
        </p>
      </div>
      <div className="mx-auto w-full">
        {locationError && (
          <p className="mb-4 text-sm text-red-500">{locationError}</p>
        )}
        <div className="mb-8 flex w-full flex-col gap-3 sm:flex-row">
          <Input
            placeholder="Cari bank sampah"
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
            className="h-12 cursor-pointer sm:w-fit"
          >
            {locationLoading ? (
              <Loading description="Mengambil lokasi" />
            ) : (
              "Gunakan lokasi saya"
            )}
          </Button>
        </div>

        {userLocation && (
          <div className="my-10">
            <h2 className="text-xl font-semibold">TPS Terdekat</h2>
            {nearbyBanks.length > 0 ? (
              <div className="mt-4 space-y-4">
                {nearbyBanks.map((bank) => (
                  <WasteBankCard key={bank.id} bank={bank} />
                ))}
              </div>
            ) : (
              <p className="mt-2 text-muted-foreground">
                Tidak ada TPS dalam radius 10 km
              </p>
            )}
          </div>
        )}

        <div className="mt-4 min-h-125">
          {banks.length > 0 ? (
            <div className="space-y-4">
              {banks.map((bank) => (
                <WasteBankCard key={bank.id} bank={bank} />
              ))}
            </div>
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

import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Section from "@/components/layout/section";
import SectionTitle from "@/components/layout/section/section-title";
import SecondLifeBetterLife from "@/components/ui/second-life-better-life";
import SearchBar from "@/components/ui/search-bar";
import { bankSampah } from "./data_bank_sampah_clean";
import bankSampahImage from "@/assets/images/bank-sampah.png";
import { MapPin, ChevronRight, ChevronLeft } from "lucide-react";
import { sortData } from "@/utils/sort-logic";
import { hitungJarak } from "./hitung-jarak";

function BankSampah() {
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get("keyword") || "";
  const [banks, setBanks] = useState(bankSampah);
  const dropDown = ["A ke Z", "Z ke A", "Jarak Terdekat", "Jarak Terjauh",];
  const [currentPage, setCurrentPage] = useState(1);
  const max_item_page = 10;

  const totalPages = Math.ceil(banks.length / max_item_page);

  const startIndex = (currentPage - 1) * max_item_page;
  const endIndex = startIndex + max_item_page;

  const currentBanks = banks.slice(startIndex, endIndex);

  useEffect(() => {
    const savedLocation = sessionStorage.getItem("lokasiUser");
    if (!savedLocation) {
      setBanks(bankSampah);
      return;
    }
    const userLocation = JSON.parse(savedLocation);
    const updatedBanks = bankSampah.map((bank) => {
      const distance = hitungJarak({
        lat1: userLocation.latitude,
        lon1: userLocation.longitude,
        lat2: Number(bank.Latitude),
        lon2: Number(bank.Longitude),
      });
      return {
        ...bank,
        Jarak: distance,
      };
    });
    setBanks(updatedBanks);
  }, []);

  useEffect(() => {
    if (!keyword) return;

    const filtered = banks.filter((bank) =>
      bank.Nama.toLowerCase().includes(keyword.toLowerCase())
    );

    setBanks(filtered);
  }, [keyword]);

  const changeSearchParams = (keyword: string) => {
    if (!keyword) {
      setSearchParams({});
    } else {
      setSearchParams({keyword});
    }
  };

  const onSearch = (keyword: string) => {
    setCurrentPage(1);
    changeSearchParams(keyword);
    if (!keyword) {
      setBanks(bankSampah);
      return;
    }
    const filtered =
      bankSampah.filter((bank) =>
        bank.Nama.toLowerCase().includes(keyword.toLowerCase())
      );
    setBanks(filtered);
  };

  const handleFilter = (type: string) => {
    setCurrentPage(1);
    let sorted = [...banks];
    switch (type) {
      case "A ke Z":
      case "Z ke A":
        sorted = sortData(banks, type, "Nama");
        break;
      case "Jarak Terdekat":
        sorted = sortData(banks, "ASC", "Jarak");
        break;
      case "Jarak Terjauh":
        sorted = sortData(banks, "DESC", "Jarak");
        break;
      default:
        break;
    }
    setBanks(sorted);
  };

  return (
    <Section className="py-20 pt-16">
      <SecondLifeBetterLife />
      <SectionTitle
        as="h2"
        className="mx-auto text-center text-4xl leading-tight"
      >
        Bank Sampah
      </SectionTitle>
      <p className="w-3/4 mb-10 text-xl font-medium leading-tight tracking-tight text-muted-foreground">
        Temukan bank sampah di sekitar anda
      </p>

      <SearchBar
        onSearch={onSearch}
        onFilter={handleFilter}
        placeholder="Cari Bank Sampah terdekat..."
        dropDown={dropDown}
      />

      <div className="mx-auto w-full max-w-4xl space-y-3">
        {currentBanks.map((bank) => (
          <div
            key={bank.Nama}
            id={bank.Nama}
            className="my-3 flex items-center justify-between rounded-xl border-2 border-muted-foreground px-4 py-4 transition-all duration-200 hover:shadow-md"
          >
            <div className="flex items-center gap-4">
              <img
                src={bankSampahImage}
                alt="Bank Sampah"
                className="h-14 w-14 object-contain"
              />

              <div className="flex flex-col">
                <p className="text-lg font-semibold text-left">
                  {bank.Nama}
                </p>

                <p className="mt-1 flex items-center gap-1 text-sm text-left">
                  <MapPin size={14} />
                  {bank.Alamat}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <p className="text-sm font-medium">
                {bank.Jarak? `${bank.Jarak.toFixed(0)} m` : "-"}
              </p>

              <ChevronRight
                size={22}
                className="text-muted-foreground"
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 flex items-center justify-center gap-2">
        <button
          onClick={() => setCurrentPage((prev) => prev - 1)}
          disabled={currentPage === 1}
          className="rounded border px-3 py-1 disabled:opacity-50"
        >
          <ChevronLeft />
        </button>

        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            className={`rounded px-3 py-1 ${
              currentPage === index + 1
                ? "bg-green-900 text-white"
                : "border"
            }`}
          >
            {index + 1}
          </button>
        ))}

        <button
          onClick={() => setCurrentPage((prev) => prev + 1)}
          disabled={currentPage === totalPages}
          className="rounded border px-3 py-1 disabled:opacity-50"
        >
          <ChevronRight />
        </button>
      </div>
    </Section>
  );
}

export default BankSampah;
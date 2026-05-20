import { tabItems } from "@/pages/result/data/tab-items"
import { fetchWasteBanks } from "@/services/waste-bank-service"
import { type WasteBankData } from "@/types/waste-bank"
import { useEffect, useState } from "react"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import result from "@/pages/result/data/results-classification.json"
import Section from "@/components/layout/section"
import TabContent from "@/pages/result/components/tabs"
import useUserLocation from "@/hooks/use-user-location"
import ClassificationResult from "@/pages/result/components/classification-result"
import ArticleRecommendation from "@/pages/result/components/article-recommendation"
import WasteBankRecommendation from "@/pages/result/components/waste-bank-recommendation"

const Result = () => {
  const [banks, setBanks] = useState<WasteBankData[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const { userLocation, getUserLocation } = useUserLocation()

  useEffect(() => {
    if (!userLocation) {
      getUserLocation()
    }
  }, [userLocation, getUserLocation])

  useEffect(() => {
    if (!userLocation) return

    const getNearbyWasteBanks = async () => {
      try {
        setIsLoading(true)

        const response = await fetchWasteBanks({
          page: 1,
          limit: 3,
          latitude: userLocation.latitude,
          longitude: userLocation.longitude,
        })

        setBanks(response.data)
      } catch (error: unknown) {
        console.log(error)
      } finally {
        setIsLoading(false)
      }
    }

    getNearbyWasteBanks()
  }, [userLocation])

  return (
    <Section className="px-4 py-6 sm:px-0">
      <ClassificationResult />
      <Tabs defaultValue={tabItems[0].value} className="w-full py-6 text-left">
        <TabsList className="mb-6 flex w-full gap-2 bg-background shadow-none">
          {tabItems.map((tab) => (
            <TabsTrigger
              key={tab.value}
              value={tab.value}
              className="cursor-pointer text-base font-normal tracking-tight"
            >
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>
        {tabItems.map((tab) => (
          <TabContent
            key={tab.value}
            value={tab.value}
            title={tab.label}
            content={result.detail[tab.value]}
          />
        ))}
      </Tabs>
      <WasteBankRecommendation banks={banks} isLoading={isLoading} />
      <ArticleRecommendation />
    </Section>
  )
}

export default Result

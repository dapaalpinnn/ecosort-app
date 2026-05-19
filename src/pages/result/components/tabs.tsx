import { TabsContent } from "@/components/ui/tabs"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"

type TabContentProps = {
  value: string
  title: string
  content: string | string[]
}

const TabContent = ({ value, title, content }: TabContentProps) => {
  return (
    <TabsContent value={value}>
      <Card className="bg-background">
        <CardHeader className="tracking-tight">
          <CardTitle className="text-lg">{title}</CardTitle>
          <CardDescription className="text-lg leading-tight">
            {content}
          </CardDescription>
        </CardHeader>
      </Card>
    </TabsContent>
  )
}

export default TabContent

import { TabsContent } from "@/components/ui/tabs"

interface TabContentProps {
  value: string
  title: string
  content: string | string[]
}

const TabContent = ({ value, title, content }: TabContentProps) => {
  return (
    <TabsContent value={value} className="rounded-3xl border bg-background p-6">
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold tracking-tight">{title}</h3>

        {typeof content === "string" && (
          <p className="leading-relaxed text-muted-foreground">{content}</p>
        )}

        {Array.isArray(content) && (
          <ul className="space-y-3">
            {content.map((item, index) => (
              <li key={index} className="flex gap-3 rounded-2xl border p-4">
                <span className="mt-0.5 text-lg">•</span>

                <p className="leading-relaxed text-muted-foreground">{item}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </TabsContent>
  )
}

export default TabContent

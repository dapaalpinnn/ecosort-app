import { policies } from "@/pages/privacy-policy/data/policy-content"
import Section from "@/components/layout/section"
import SectionTitle from "@/components/ui/section-title"
import SecondLifeBetterLife from "@/components/ui/second-life-better-life"

const PrivacyPolicy = () => {
  return (
    <Section>
      <SecondLifeBetterLife />
      <SectionTitle as="h2" className="w-full">
        Kebijakan Privasi
      </SectionTitle>
      <div className="min-h-screen px-6 py-10">
        <ol className="list-decimal space-y-6 font-semibold">
          {policies.map((policy) => (
            <li
              key={policy.title}
              id={policy.title}
              className="ml-6 text-left text-lg md:text-xl"
            >
              <p className="tracking-tight">{policy.title}</p>
              <p className="mt-2 font-normal text-muted-foreground">
                {policy.content}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  )
}

export default PrivacyPolicy

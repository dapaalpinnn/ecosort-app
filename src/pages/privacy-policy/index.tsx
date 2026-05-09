import Section from "@/components/layout/section"
import SectionTitle from "@/components/layout/section/section-title"
import SecondLifeBetterLife2 from "@/components/ui/second-life-better-life-2"
import { policies } from "@/pages/privacy-policy/policy-content"

const PrivacyPolicy = () => {
  return (
    <Section className="py-20 pt-16">
      <SecondLifeBetterLife2 />
      <SectionTitle
        as="h2"
        className="mx-auto my-10 text-center font-serif text-4xl leading-tight"
      >
        Kebijakan Privasi
      </SectionTitle>

      <div className="min-h-screen px-6 font-serif">
        <ol className="list-decimal space-y-6 font-semibold">
          {policies.map((policy) => (
            <li
              key={policy.id}
              id={policy.id}
              className="ml-6 text-left text-lg md:text-xl"
            >
              <p className="tracking-tight">{policy.title}</p>
              <p className="mt-2 font-normal">{policy.content}</p>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  )
}

export default PrivacyPolicy

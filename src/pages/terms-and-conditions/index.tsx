import { terms } from "@/pages/terms-and-conditions/data/terms-content"
import Section from "@/components/layout/section"
import SectionTitle from "@/components/ui/section-title"
import SecondLifeBetterLife from "@/components/ui/second-life-better-life"

const TermsCondition = () => {
  return (
    <Section>
      <SecondLifeBetterLife />
      <SectionTitle as="h2" className="w-full">
        Syarat dan Ketentuan
      </SectionTitle>
      <div className="mmin-h-screen px-6 py-10">
        <ol className="list-decimal space-y-6 font-semibold">
          {terms.map((term) => (
            <li
              key={term.title}
              id={term.title}
              className="ml-6 text-left text-lg md:text-xl"
            >
              <p className="tracking-tight">{term.title}</p>
              {term.content && (
                <p className="mt-2 font-normal text-muted-foreground">
                  {term.content}
                </p>
              )}
              {term.children && term.children.length > 0 && (
                <ul className="mt-2 ml-6 list-disc space-y-2">
                  {term.children.map((child, index) => (
                    <li key={index}>
                      <p className="tracking-tight">{child.subtitle}</p>
                      <p className="mt-1 font-normal text-muted-foreground">
                        {child.content}
                      </p>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ol>
      </div>
    </Section>
  )
}

export default TermsCondition

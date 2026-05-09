import Section from "@/components/layout/section"
import SectionTitle from "@/components/layout/section/section-title"
import SecondLifeBetterLife2 from "@/components/ui/second-life-better-life-2"
import { terms } from "@/pages/terms-and-conditions/terms-content"

const TermsCondition = () => {
  return (
    <Section className="py-20 pt-16">
      <SecondLifeBetterLife2 />
      <SectionTitle
        as="h2"
        className="mx-auto my-10 text-center font-serif text-4xl leading-tight"
      >
        Syarat dan Ketentuan
      </SectionTitle>

      <div className="min-h-screen px-6 font-serif">
        <ol className="list-decimal space-y-6 font-semibold">
          {terms.map((term) => (
            <li
              key={term.title}
              id={term.title}
              className="ml-6 text-left text-lg md:text-xl"
            >
              <p className="tracking-tight">{term.title}</p>
              {term.content && (
                <p className="mt-2 font-normal">{term.content}</p>
              )}
              {term.children && term.children.length > 0 && (
                <ul className="mt-2 ml-6 list-disc space-y-2">
                  {term.children.map((child, index) => (
                    <li key={index}>
                      <p className="font-bold">{child.subtitle}</p>
                      <p className="mt-1 font-normal">{child.content}</p>
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

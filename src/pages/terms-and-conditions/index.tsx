import Section from "@/components/layout/section"
import SectionTitle from "@/components/layout/section/section-title"

import SecondLifeBetterLife2 from "@/components/ui/second-life-better-life-2"

import { terms } from "@/pages/terms-and-conditions/terms-content"

const TermsCondition = () => {
  return (
    <div className="flex min-h-screen flex-col items-center">
      <Section id="head" className="min-h-[20svh]">
        <SecondLifeBetterLife2 />
      </Section>

      <Section id="terms" animate={false} className="wy-5 min-h-screen">
        <SectionTitle
          as="h1"
          className="mx-auto my-10 w-125 text-center leading-tight"
        >
          Syarat dan Ketentuan.
        </SectionTitle>

        <div className="min-h-screen w-full">
          {terms.map((term) => (
            <div key={term.id} id={term.id} className="mb-5">
              <p className="text-justify text-lg font-bold">{term.title}</p>

              {term.content && (
                <p className="mt-1 ml-5 text-justify">{term.content}</p>
              )}

              {term.children?.map((child, index) => (
                <div key={index}>
                  <p className="mt-1 ml-4 text-justify text-lg font-bold">
                    {child.subtitle}
                  </p>

                  <p className="mt-1 ml-12 text-justify">{child.content}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </Section>
    </div>
  )
}

export default TermsCondition

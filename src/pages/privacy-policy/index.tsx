import Section from "@/components/layout/section"
import SectionTitle from "@/components/layout/section/section-title"

import SecondLifeBetterLife2 from "@/components/ui/second-life-better-life-2"

import { policies } from '@/pages/privacy-policy/policy-content'

const PrivacyPolicy = () => {

  return (
    <div className="flex min-h-screen flex-col items-center">
      <Section id="head" className="min-h-[20svh]">
        <SecondLifeBetterLife2 />
      </Section>

      <Section
        id="policy"
        animate={false}
        className="min-h-screen wy-5"
      >
          <SectionTitle 
            as="h1" 
            className="leading-tight w-125 text-center mx-auto my-10"
          >
            Kebijakan Privasi.
          </SectionTitle>
          <div className="min-h-screen w-full">
            <div className="min-h-screen w-full">
              {policies.map((policy) => (
                <div key={policy.id} id={policy.id} className="mb-5">
                  <p className="text-justify text-lg font-bold">
                    {policy.title}
                  </p>

                  <p className="ml-5 mt-1 text-justify">
                    {policy.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
      </Section>
    </div>
  )
}

export default PrivacyPolicy

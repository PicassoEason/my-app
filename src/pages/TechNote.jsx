import Head from 'next/head'
import { Tab } from '@headlessui/react'
import { AtSymbolIcon, CodeBracketIcon, LinkIcon } from '@heroicons/react/20/solid'
import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
function SpeakingSection({ children, ...props }) {
  return (
    <Section {...props}>
      <div className="space-y-16">{children}</div>
    </Section>
  )
}

function Appearance({ title, description, event, cta, href }) {
  return (
    <Card as="article">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Eyebrow decorate>{event}</Card.Eyebrow>
      <Card.Description>{description}</Card.Description>
      <Card.Cta>{cta}</Card.Cta>
    </Card>
  )
}

export default function TechNote() {
  return (
    <>
      <Head>
        <title>TechNote - Eason Wu</title>
        <meta
          name="description"
          content="I’ve spoken at events all around the world and been interviewed for many podcasts."
        />
      </Head>
      <SimpleLayout
        title="Eason Wu技術研究區"
        intro="這裡是Eason Wu技術研究區域歡迎各位指教"
      >
        <div className="space-y-20">
          <SpeakingSection title="物聯網">
            <Appearance
              href="https://hackmd.io/@Eason2392/rJ_FMi-Ao"
              title="如何用 Google Sheets / Excel 當作資料庫？"
              description="用 Google Sheets / Excel 當作資料庫"
              event="2023/02/21"
              cta="查看詳情"
            />
             
          </SpeakingSection>
          <SpeakingSection title="雲技術筆記">
            <Appearance
              href="https://picasso623.notion.site/AWS-a372e50fbc084066a88d7d5d47ae24cc"
              title="AWS 雲端基礎從業人員重點"
              description="AWS 雲端基礎從業人員重點"
              event="2022/12"
              cta="查看詳情"
            />
            <Appearance
              href="https://picasso623.notion.site/GCP-Storage-01444cd5f5f948208f67f5c749a4f81c"
              title="GCP Storage 雲存儲"
              description="GCP Storage 雲存儲"
              event="2023/02"
              cta="查看詳情"
            />
            
          </SpeakingSection>
          
        </div>
    <div><br></br></div>

      <div>
      <form action="#">
      <Tab.Group>
        {({ selectedIndex }) => (
          <>
            <Tab.Panels className="mt-2">
              <Tab.Panel className="-m-0.5 rounded-lg p-0.5">
                <label htmlFor="comment" className="sr-only">
                  Comment
                </label>
                <div>
                  <textarea
                    rows={5}
                    name="comment"
                    id="comment"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="留下你的名言吧!"
                    defaultValue={''}
                  />
                </div>
              </Tab.Panel>
            
            </Tab.Panels>
          </>
        )}
      </Tab.Group>
      <div className="mt-2 flex justify-end">
        <button
          type="submit"
          className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          新增
        </button>
       
      </div>
    </form>
      </div>
      </SimpleLayout>
    </>
  )
}

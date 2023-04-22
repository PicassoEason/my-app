import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

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

export default function Speaking() {
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
      </SimpleLayout>
    </>
  )
}

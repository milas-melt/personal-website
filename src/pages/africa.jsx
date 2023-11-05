import Head from 'next/head'
import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ReadingsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Reading({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export default function Africa() {
  return (
    <>
      <Head>
        <title>Africa - Salim Tlemcani</title>
        <meta name="description" content="Think tank for Africa" />
      </Head>
      <SimpleLayout
        title="On Africa"
        intro="I'll start using this page as a memo for interesting research papers, books, reports and other ressources about Africa. Maybe even write things myself."
      >
        <ReadingsSection title="Public Markets - reports">
          <Reading
            href="https://www.ashmoregroup.com/sites/default/files/article-docs/EV-November-2019-African-markets-issues-for-investors.pdf"
            title="Africa’s public markets:  Issues for investors By Gustavo Medeiros and Jan Dehn"
          >
            This report presents an overview of Africa’s public markets,
            highlighting seven features which make these markets special.
          </Reading>
        </ReadingsSection>
      </SimpleLayout>
    </>
  )
}

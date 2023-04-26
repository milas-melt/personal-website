import Head from 'next/head'

import { SimpleLayout } from '@/components/SimpleLayout'

export default function ThankYou() {
  return (
    <>
      <Head>
        <title>Thank's for reaching out - Salim Tlemcani</title>
        <meta name="description" content="Thanks for reaching out." />
      </Head>
      <SimpleLayout
        title="Thanks for reaching out."
        intro="Looking forward to meeting you! I'll get back to you as soon as possible. In the meantime, you can check out my blog or follow me on Github. Have a great day."
      />
    </>
  )
}

import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import { GitHubIcon, LinkedInIcon, TwitterIcon } from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
  return (
    <>
      <Head>
        <title>About - Salim Tlemcani</title>
        <meta
          name="description"
          content="I’m Salim Tlemcani. I live in London. I'm interested in emerging markets, quant finance and AI."
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              About me.
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                I&apos;m Salim Tlemcani. I live in London. I&apos;m interested
                in tech, emerging markets, music, combat & outdoor sports and
                backpacking.
              </p>
              <p>
                As a young Moroccan, I am extremely excited about the growth of
                my country and my continent. I will contribute to this growth by
                using the knowledge I have acquired in the UK to create
                opportunities in Morocco and Africa.
              </p>
              <p>
                80% of the unicorns are in the fintech sector, none are
                Moroccan. There seem to be a lot of reasons that I&apos;m trying
                to explore at the moment through personal readings but also
                through initiatives like Imperial College Moroccan Society and
                projects such as{' '}
                <b>
                  <a href="https://datamorocco.com/">the DataMorocco</a>
                </b>{' '}
                website: the official website of Moroccan data has less than 400
                datasets and no API. In this project, I&apos;m trying to change
                that.
              </p>
              <p>
                Another thing I&apos;m currently investigating (Related to
                Morocco) is ML methods for credit scoring in Emerging countries
                with a focus on Morocco. Credit scoring is another potential
                area for fintech growth in Morocco. Traditional credit scoring
                models in the country are often based on limited information and
                can be unreliable, which can make it difficult for many people
                to access credit.
              </p>
              <p>
                Fintech startups can leverage alternative data sources, such as
                mobile phone usage and social media activity, to develop more
                accurate credit scoring models. These models can help lenders
                make more informed lending decisions and provide credit to
                individuals who may have been excluded from the traditional
                credit market.
              </p>
              <p className="sm:text-l text-xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
                Morocco has potential, Africa has potential. This is my humble
                attempt to tap into this potential through opensource and
                opendata.
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink
                href="https://github.com/milas-melt"
                icon={GitHubIcon}
                className="mt-4"
              >
                Follow on GitHub
              </SocialLink>
              <SocialLink
                href="https://www.linkedin.com/in/salim-tlem%C3%A7ani-770858148/"
                icon={LinkedInIcon}
                className="mt-4"
              >
                Follow on LinkedIn
              </SocialLink>
              <SocialLink
                href="mailto:salimtlemcaniportfolio@gmail.com"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                salimtlemcaniportfolio@gmail.com
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}

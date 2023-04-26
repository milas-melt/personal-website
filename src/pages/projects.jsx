import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { GitHubIcon } from '@/components/SocialIcons'

import { SimpleLayout } from '@/components/SimpleLayout'

import datamorocco from '@/images/photos/datamorocco.png'
import rentoken from '@/images/photos/rentoken.png'
import dcrowd from '@/images/photos/dcrowd.png'
import ai3ddesigner from '@/images/photos/ai3ddesigner.gif'
import multicharacterai from '@/images/photos/multicharacterai.gif'
import selfbalancingrobot from '@/images/photos/selfbalancingrobot.gif'

const projects = [
  {
    name: 'DataMorocco',
    description:
      "Improving on Morocco's the official website of data by adding more databases and creating an API for the country's databases. Work in progress. Opensource project.",
    link: {
      href: 'https://datamorocco.com/',
      label: 'datamorocco.com',
      github: 'https://github.com/milas-melt/Moroccan-Databases',
    },
    logo: datamorocco,
  },
  {
    name: 'Rentoken',
    description:
      'Discovered the 1st web3 non-invasive solution to rent digital assets without collateral. Rentoken was one of the first NFT rental marketplaces. Was offered angel investment opportunities. Won a scholarship prize by Protocol labs, a blockchain R&D company known for creating IPFS and Filecoin. Note that the code is not completely open source.',
    link: {
      href: 'https://rentoken.xyz/',
      label: 'landing page',
      github: 'https://github.com/rentoken-xyz',
    },
    logo: rentoken,
  },
  {
    name: 'DcrowD',
    description:
      'Decentralized crowdfunding platform running on Polygon made in 36 hours during the Polygon x EasyA hackathon.',
    link: {
      href: null,
      label: null,
      github: 'https://github.com/milas-melt/DcrowD',
    },
    logo: dcrowd,
  },
  {
    name: '3D AI Designer',
    description:
      'Decentralized crowdfunding platform running on Polygon made in 36 hours during the Polygon x EasyA hackathon.',
    link: {
      href: null,
      label: null,
      github: 'https://github.com/milas-melt/e-commerce-ai-preview',
    },
    logo: ai3ddesigner,
  },
  {
    name: 'Multicharacter AI chatbot',
    description:
      'An AI powered application where the user choses a personality and the AI generates a character based on the personality. The prompts are tested by 70k humans, scarped from a github repository.',
    link: {
      href: null,
      label: null,
      github: 'https://github.com/milas-melt/multi-character-AI-bot',
    },
    logo: multicharacterai,
  },
  {
    name: 'Self balancing robot',
    description:
      "Built the hardware, software and firmware for the self balancing robot using arduino, C++, circuit design tools and construction tools such as 3D printers and laser cutters. The balance mechanisms worked successfuly using control theory (mostly PID). (Note that the video is not mine, it' for illustration purposes only).",
    link: {
      href: null,
      label: null,
      github: 'https://github.com/milas-melt/self-balancing-robot',
    },
    logo: selfbalancingrobot,
  },
]

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500  group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects - Salim Tlemcani</title>
        <meta
          name="description"
          content="Some academic, personal and professional projects I've worked on."
        />
      </Head>
      <SimpleLayout
        title="Some academic, personal and professional projects I've worked on."
        intro="I’ve worked on tons of little projects over the years and realised it's time to catalog them. Many of them are open-source, so if you see something that piques your interest, check out the code and contribute if you have ideas for how it can be improved."
      >
        {projects.map((project, idx) => (
          <section
            key={idx}
            className="body-font border-t border-zinc-100 pb-16 pt-10 text-gray-600 dark:border-zinc-700/40"
          >
            <div className="container mx-auto flex flex-col items-center px-5 py-24  md:flex-row">
              <div className="mb-10 w-5/6 md:mb-0 md:w-1/2 lg:w-full lg:max-w-lg">
                <Image
                  className="aspect-square rounded-2xl bg-zinc-100 object-cover object-center"
                  alt="hero"
                  src={project.logo}
                />
              </div>
              <div className="flex flex-col items-center text-center md:w-1/2 md:items-start md:pl-16 md:text-left lg:flex-grow lg:pl-24">
                <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                  {project.name}
                </h1>
                <p className="mb-8 mt-8 text-base text-zinc-600 dark:text-zinc-400">
                  {project.description}
                </p>
                <div className="flex justify-center">
                  {project.link.href && (
                    <SocialLink
                      href={project.link.href}
                      icon={LinkIcon}
                      className="mr-4 "
                    >
                      <p className="invisible lg:visible">
                        {project.link.label}
                      </p>
                    </SocialLink>
                  )}
                  {project.link.github && (
                    <SocialLink href={project.link.github} icon={GitHubIcon}>
                      <p className="invisible lg:visible">Check the code</p>
                    </SocialLink>
                  )}
                </div>
              </div>
            </div>
          </section>
        ))}
      </SimpleLayout>
    </>
  )
}

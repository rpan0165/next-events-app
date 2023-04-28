import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'

import { getFeaturedEvents  } from '@/dummy-data'



export default function Home() {

  const featuredEvents = getFeaturedEvents();

  return (
    <>
      <Head>
        <title>Events App</title>
        <meta name="description" content="A NextJS app to practice developing projects." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <ul>

        </ul>
      </div>
      
    </>
  )
}

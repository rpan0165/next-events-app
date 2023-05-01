import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'

import { getFeaturedEvents  } from '../helpers/api-util'
import EventList from '@/components/events/event-list'



export default function Home(props) {


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
          <EventList items={props.events}/>
        </ul>
      </div>
      
    </>
  )
}

export async function getStaticProps(){
  const featuredEvents = await getFeaturedEvents();

  return{
    props:{
      events: featuredEvents
    },
    revalidate: 1800
  }
}

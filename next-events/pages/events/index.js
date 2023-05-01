import { getAllEvents } from '../../helpers/api-util'
import React from 'react'
import { useRouter } from 'next/router'
import EventList from '@/components/events/event-list'
import EventsSearch from '@/components/events/events-search'

function AllEventsPage(props) {

  const router = useRouter();
  const { events } = props;

  function findEventsHandler(year,month){
    const fullPath = `/events/${year}/${month}`;

    router.push(fullPath);
  }

  return (
    <div>
      <EventsSearch onSearch={findEventsHandler}/>
      <EventList items={events} />
    </div>
  )
}

export default AllEventsPage


export async function getStaticProps(){
  const events = await getAllEvents();

  return{
    props:{
      events: events,
    },
    revalidate: 60
  }

}
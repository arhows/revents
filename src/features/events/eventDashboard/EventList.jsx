import EventListItem from './EventListItem';

export default function EventList({ events, selectEvent }) {
  return (
    <>
      {events.map((event) => (
        <EventListItem key={event.id} data={event} selectEvent={selectEvent} />
      ))}
    </>
  );
}

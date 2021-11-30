import { Button, Icon, Item, List, Segment } from 'semantic-ui-react';
import EventListAttendee from './EventListAttendee';

export default function EventListItem({ data, selectEvent }) {
  return (
    <Segment.Group>
      <Segment>
        <Item.Group>
          <Item>
            <Item.Image size="tiny" circular src={data.hostPhotoURL} />
            <Item.Content>
              <Item.Header content={data.title} />
              <Item.Description>Hosted by {data.hostedBy}</Item.Description>
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>
      <Segment>
        <span>
          <Icon name="clock" /> {data.date}
          <Icon name="marker" /> {data.venue}
        </span>
      </Segment>
      <Segment>
        <List horizontal>
          {data.attendees.map((attendee) => (
            <EventListAttendee key={attendee.id} secondary items={attendee} />
          ))}
        </List>
      </Segment>
      <Segment clearing>
        <span>{data.description}</span>
        <Button
          onClick={() => selectEvent(data)}
          color="teal"
          floated="right"
          content="View"
        />
      </Segment>
    </Segment.Group>
  );
}

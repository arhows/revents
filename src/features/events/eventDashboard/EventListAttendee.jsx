import { Image, List } from 'semantic-ui-react';

export default function EventListAttendee({ items }) {
  return (
    <List.Item>
      <Image size="mini" circular src={items.photoURL} alt={items.name} />
    </List.Item>
  );
}

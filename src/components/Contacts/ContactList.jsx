import { useSelector } from 'react-redux';
import Contact from './Contact';

export default function ContactList() {
  const contacts = useSelector(state => state.contacts.contacts)
  const filter = useSelector(state => state.contacts.filter);

  if (!contacts && !filter) {
    return;
  }

  const getVisibleContacts = () => {
    const nomalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(nomalizedFilter)
    );
  };

  const visibleContacts = getVisibleContacts();

  return (
    <section>
        <ul className="contact-list">
          {visibleContacts.map(({ id, name, number }) => (
            <Contact key={id} name={name} number={number} />
          ))}
        </ul>
    </section>
  );
}

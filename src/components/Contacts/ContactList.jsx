import { useSelector } from 'react-redux';
import Contact from './Contact';

export default function ContactList() {
  const contacts = useSelector(state => state.contacts.contacts)
  return (
    <section>
      {contacts && (
        <ul className="contact-list">
          {contacts.map(({ id, name, number }) => (
            <Contact key={id} id={id} name={name} number={number} />
          ))}
        </ul>
      )}
    </section>
  );
}

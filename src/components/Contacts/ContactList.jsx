import { useSelector } from 'react-redux';
import { selectContacts, selectFilter } from 'redux/Contacts/ContactsSelectors';
import Contact from './Contact';

export default function ContactList({ openEditModal }) {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

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
          <Contact
            key={id}
            id={id}
            name={name}
            number={number}
            openEditModal={openEditModal}
          />
        ))}
      </ul>
    </section>
  );
}

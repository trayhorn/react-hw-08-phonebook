import Contact from './Contact';

export default function ContactList({ visibleContacts }) {
  return (
    <section>
      <ul className='contact-list'>
        {visibleContacts.map(({ id, name, phone }) => (
          <Contact key={id} id={id} name={name} phone={phone} />
        ))}
      </ul>
    </section>
  );
}

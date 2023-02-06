import s from './ContactList.module.css';
import Contact from './Contact/Contact';

export default function ContactList({ visibleContacts }) {

  return (
    <section>
      <ul className={s.list}>
        {visibleContacts.map(({ id, name, phone }) => (
          <Contact key={id} id={id} name={name} phone={phone} />
        ))}
      </ul>
    </section>
  );
}

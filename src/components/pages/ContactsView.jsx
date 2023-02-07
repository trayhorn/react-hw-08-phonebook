import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAll } from 'redux/Contacts/ContactsOperations';
import ContactList from '../Contacts/ContactList';
import Form from '../Contacts/Form/Form';
import Filter from '../Contacts/Filter';
import '../../ContactsView.css';

function ContactsView() {
  const [filter, setFilter] = useState('');
  const contacts = useSelector(state => state.contacts.contacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAll());
  }, [dispatch])

  if (!contacts) {
    return;
  }

  const getFilterQuery = query => {
    setFilter(query);
  };

  const getVisibleContacts = () => {
    const nomalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(nomalizedFilter)
    );
  };

  const visibleContacts = getVisibleContacts();

  return (
    <div className="App">
      <h1>Phonebook</h1>
      <Form />
      <h2>Contacts</h2>
      <Filter onFilterChange={getFilterQuery} value={filter} />
      <ContactList visibleContacts={visibleContacts} filterQuery={filter} />
    </div>
  );
}

export default ContactsView;

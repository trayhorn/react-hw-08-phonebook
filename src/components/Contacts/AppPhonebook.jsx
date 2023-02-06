import { useState } from 'react';
import { useGetAllContactsQuery } from 'redux/ContactsSlice';
import ContactList from './ContactList';
import Filter from './Filter';
import Form from './Form/Form';
import './AppPhonebook.css';

function AppPhonebook() {
  const [filter, setFilter] = useState('');
  const { data: contacts } = useGetAllContactsQuery();

  const getFilterQuery = query => {
    setFilter(query);
  };

  const getVisibleContacts = () => {
    const nomalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(nomalizedFilter)
    );
  };

  if (!contacts) {
    return;
  }

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

export default AppPhonebook;

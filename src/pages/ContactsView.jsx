import {  useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAllContacts } from 'redux/Contacts/ContactsOperations';
import ContactList from '../components/Contacts/ContactList';
import Form from '../components/Contacts/Form';
import Filter from '../components/Contacts/Filter';

function ContactsView() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllContacts());
  }, [dispatch]);

  return (
    <div className="App">
      <h1>Phonebook</h1>
      <Form />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}

export default ContactsView;

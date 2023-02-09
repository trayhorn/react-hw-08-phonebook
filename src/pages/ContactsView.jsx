import {  useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAllContacts } from 'redux/Contacts/ContactsOperations';
import ContactList from '../components/Contacts/ContactList';
import Filter from '../components/Contacts/Filter';
import ContactModal from 'components/Contacts/Modal';

function ContactsView() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllContacts());
  }, [dispatch]);

  return (
    <div className="App">
      <h1 style={{display: 'inline'}}>Contacts</h1>
      <ContactModal />
      <Filter />
      <ContactList />
    </div>
  );
}

export default ContactsView;

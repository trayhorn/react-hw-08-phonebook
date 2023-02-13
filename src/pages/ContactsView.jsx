import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAllContacts } from 'redux/Contacts/ContactsOperations';
import ContactList from '../components/Contacts/ContactList';
import Filter from '../components/Contacts/Filter';
import Button from '@mui/material/Button';
import Form from 'components/Contacts/Form';
import ContactsModal from 'components/Contacts/ContactsModal';

export default function ContactsView() {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchAllContacts());
  }, [dispatch]);

  const toggleModal = () => {
    setIsModalOpen(prevState => !prevState);
  }

  return (
    <div className="ContactsApp">
      {isModalOpen && (
        <ContactsModal onClose={toggleModal}>
          <Form onAddContact={toggleModal} />
        </ContactsModal>
      )}
      <section className="search-header">
        <Filter />
        <Button
          sx={{ marginLeft: '10px' }}
          onClick={toggleModal}
          variant="contained"
        >
          Add contact
        </Button>
      </section>
      <ContactList />
    </div>
  );
}


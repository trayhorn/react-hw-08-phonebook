import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAllContacts } from 'redux/Contacts/ContactsOperations';
import ContactList from '../components/Contacts/ContactList';
import Filter from '../components/Contacts/Filter';
import Button from '@mui/material/Button';
import Form from 'components/Contacts/Form';
import ContactsModal from 'components/Contacts/ContactsModal';

function ContactsView() {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchAllContacts());
  }, [dispatch]);

  const toggleModal = () => {
    setIsModalOpen(prevState => !prevState);
  }

  const handleModalClick = e => {
    if (e.target.className === 'modal-backdrop') {
      toggleModal();
    }
  }

  return (
    <div className="App">
      <section className="search-header">
        <Filter />
        <Button sx={{marginLeft: '10px'}} onClick={toggleModal} variant="contained">
          Add contact
        </Button>
        {isModalOpen && (
          <ContactsModal handleModalClick={handleModalClick}>
            <Form />
          </ContactsModal>
        )}
      </section>
      <ContactList />
    </div>
  );
}

export default ContactsView;

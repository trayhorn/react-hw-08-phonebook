import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAllContacts } from 'redux/Contacts/ContactsOperations';
import ContactList from '../components/Contacts/ContactList';
import Filter from '../components/Contacts/Filter';
import Form from 'components/Contacts/Form';
import ContactsModal from 'components/Contacts/ContactsModal';
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

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
        <Tooltip title='Add contact'>
          <IconButton
            sx={{
              ':hover': { bgcolor: 'rgb(47, 96, 178)' },
              bgcolor: 'secondary.main',
              marginLeft: '10px',
            }}
            aria-label="add"
            size="large"
            onClick={toggleModal}
          >
            <AddIcon sx={{ color: 'white' }} />
          </IconButton>
        </Tooltip>
      </section>
      <ContactList />
    </div>
  );
}


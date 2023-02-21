import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAllContacts } from 'redux/Contacts/ContactsOperations';
import { ContactList, Filter, Form, ContactsModal, EditForm } from 'components/Contacts';
import {IconButton, Tooltip} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

export default function ContactsView() {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditRequest, setIsEditRequest] = useState(false);

  useEffect(() => {
    dispatch(fetchAllContacts());
  }, [dispatch]);

  const toggleModal = () => {
    setIsModalOpen(prevState => !prevState);
  }
  const toggleEditModal = () => {
    setIsEditRequest(prevState => !prevState);
  };

  return (
    <div className="ContactsApp">
      {isModalOpen && (
        <ContactsModal onClose={toggleModal}>
          <Form onAddContact={toggleModal} />
        </ContactsModal>
      )}
      {isEditRequest && (
        <ContactsModal onClose={toggleEditModal}>
          <EditForm onSave={toggleEditModal} />
        </ContactsModal>
      )}
      <section className="search-header">
        <Filter />
        <Tooltip title="Add contact">
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
      <ContactList openEditModal={toggleEditModal} />
    </div>
  );
}


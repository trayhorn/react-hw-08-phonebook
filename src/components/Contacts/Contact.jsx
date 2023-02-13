import { useDispatch, useSelector } from 'react-redux';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteContact } from 'redux/Contacts/ContactsOperations';

export default function Contact({ id, name, number }) {
  const dispatch = useDispatch();
  const isDeleting = useSelector(state => state.contacts.isDeleting);

  return (
    <li className="contact-list__item">
      <span>{name}</span>
      <span>{number}</span>
      <IconButton
        aria-label="delete"
        disabled={isDeleting}
        onClick={() => dispatch(deleteContact(id))}
      >
        <DeleteIcon />
      </IconButton>
    </li>
  );
}

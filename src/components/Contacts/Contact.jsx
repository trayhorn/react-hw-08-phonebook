import { useDispatch } from 'react-redux';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteContact } from 'redux/Contacts/ContactsOperations';

export default function Contact({ id, name, number }) {
  const dispatch = useDispatch();

  return (
    <li className="contact-list__item">
      <span>{name}</span>
      <span>{number}</span>
      <IconButton aria-label="delete" onClick={() => dispatch(deleteContact(id))}>
        <DeleteIcon />
      </IconButton>
    </li>
  );
}

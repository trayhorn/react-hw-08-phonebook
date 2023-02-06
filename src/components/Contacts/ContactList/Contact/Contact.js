import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDeleteContactMutation } from 'redux/ContactsSlice';
import s from '../ContactList.module.css';

export default function Contact({ id, name, phone }) {
  const [deleteContact, { isLoading }] = useDeleteContactMutation();

  return (
    <li className={s.contactItem}>
      <span>{name}</span>
      <span>{phone}</span>
      <IconButton
        aria-label="delete"
        disabled={isLoading}
        onClick={() => deleteContact(id)}
      >
        <DeleteIcon />
      </IconButton>
    </li>
  );
}
import { useDispatch } from 'react-redux';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteContactApi } from 'redux/Contacts/ContactsSlice';
import s from '../ContactList.module.css';

export default function Contact({ id, name, phone }) {
  const dispatch = useDispatch();

  return (
    <li className={s.contactItem}>
      <span>{name}</span>
      <span>{phone}</span>
      <IconButton
        aria-label="delete"
        onClick={() => dispatch(deleteContactApi(id))}
      >
        <DeleteIcon />
      </IconButton>
    </li>
  );
}

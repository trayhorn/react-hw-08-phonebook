import { useDispatch } from 'react-redux';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteContactApi } from 'redux/Contacts/ContactsSlice';

export default function Contact({ id, name, phone }) {
  const dispatch = useDispatch();

  return (
    <li className='contact-list__item'>
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

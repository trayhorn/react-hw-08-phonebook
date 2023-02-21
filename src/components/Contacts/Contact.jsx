import { useDispatch } from 'react-redux';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { deleteContact } from 'redux/Contacts/ContactsOperations';


export default function Contact({ id, name, number, openEditModal }) {
  const dispatch = useDispatch();

  const handleEditClick = (id) => {
    openEditModal()
    console.log(id);
  }

  return (
    <li className="contact-list__item">
      <span>{name}</span>
      <span>{number}</span>
      <div>
        <IconButton aria-label="edit" onClick={() => handleEditClick(id)}>
          <EditIcon />
        </IconButton>
        <IconButton
          aria-label="delete"
          onClick={() => dispatch(deleteContact(id))}
        >
          <DeleteIcon />
        </IconButton>
      </div>
    </li>
  );
}

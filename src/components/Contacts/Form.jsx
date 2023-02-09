import { TextField, Button } from '@mui/material';
import { addContact } from 'redux/Contacts/ContactsOperations';
import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';

export default function Form() {
  const dispatch = useDispatch();
  const handleSubmit = async e => {
    e.preventDefault();
    const name = e.target.elements.name.value;
    const number = e.target.elements.number.value;
    const contact = {
      id: nanoid(),
      name,
      number,
    };
    console.log(contact);
    try {
      await dispatch(addContact(contact));
      e.target.reset();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form autoComplete="off" onSubmit={handleSubmit}>
      <TextField
        fullWidth
        name="name"
        id="outlined-basic"
        label="Name"
        variant="outlined"
        size="small"
        sx={{ marginBottom: '20px' }}
      />
      <br />
      <TextField
        fullWidth
        name="number"
        id="outlined-basic"
        label="Number"
        variant="outlined"
        size="small"
      />
      <br />
      <Button
        fullWidth
        type="submit"
        sx={{ marginTop: '20px' }}
        variant="contained"
      >
        Add contact
      </Button>
    </form>
  );
}

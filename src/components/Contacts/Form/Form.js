import { TextField, Button } from '@mui/material';
import { useAddContactMutation } from 'redux/ContactsSlice';
import './Form.css';

export default function Form() {
  const [addContact] = useAddContactMutation();

  const handleSubmit = async e => {
    e.preventDefault();
    const name = e.target.elements.name.value;
    const phone = e.target.elements.number.value;
    const contact = {
      name,
      phone,
    };
    try {
      await addContact(contact);
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

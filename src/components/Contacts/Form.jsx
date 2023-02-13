import { TextField, Button } from '@mui/material';
import { addContact } from 'redux/Contacts/ContactsOperations';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';

export default function Form({ onAddContact }) {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: { name: '', number: '' },
    onSubmit: ({ name, number }) => {
      const contact = { name, number };
      dispatch(addContact(contact));
      onAddContact();
    }
  });

  return (
    <form autoComplete="off" onSubmit={formik.handleSubmit}>
      <TextField
        fullWidth
        required
        name="name"
        label="Name"
        id="name"
        variant="outlined"
        size="small"
        sx={{ marginBottom: '20px' }}
        onChange={formik.handleChange}
        value={formik.values.name}
      />
      <br />
      <TextField
        fullWidth
        required
        name="number"
        id="number"
        label="Number"
        variant="outlined"
        size="small"
        onChange={formik.handleChange}
        value={formik.values.number}
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

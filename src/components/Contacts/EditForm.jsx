import { TextField, Button } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { editContact } from 'redux/Contacts/ContactsOperations';
import { selectEditId } from 'redux/Contacts/ContactsSelectors';
import { selectContacts } from 'redux/Contacts/ContactsSelectors';

export default function EditForm({ onSave }) {
  const editId = useSelector(selectEditId);
  const contactToBeEdited = useSelector(selectContacts).find(
    contact => contact.id === editId
  );
  const dispatch = useDispatch();

  const theme = createTheme({
    components: {
      MuiTextField: {
        defaultProps: {
          variant: 'outlined',
          size: 'small',
          fullWidth: true,
        },
      },
    },
  });

  const formik = useFormik({
    initialValues: {
      name: contactToBeEdited.name,
      number: contactToBeEdited.number,
    },
    onSubmit: ({ name, number }) => {
      const updatedContact = { name, number };
      dispatch(editContact({ id: editId, updatedContact: updatedContact }));
      onSave();
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <form autoComplete="off" onSubmit={formik.handleSubmit}>
        <TextField
          id="name"
          name="name"
          label="Name"
          sx={{ marginBottom: '20px' }}
          value={formik.values.name}
          onChange={formik.handleChange}
        />
        <br />
        <TextField
          name="number"
          id="number"
          label="Number"
          value={formik.values.number}
          onChange={formik.handleChange}
        />
        <br />
        <Button
          fullWidth
          type="submit"
          sx={{ marginTop: '20px' }}
          variant="contained"
          disabled={!formik.values.name || !formik.values.number}
        >
          Save
        </Button>
      </form>
    </ThemeProvider>
  );
}

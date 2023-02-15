import { TextField, Button } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { addContact } from 'redux/Contacts/ContactsOperations';
import { addcontactSchema } from 'utils/validation';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';


export default function Form({ onAddContact }) {
  const dispatch = useDispatch();

  const theme = createTheme({
    components: {
      MuiTextField: {
        defaultProps: {
          variant: 'outlined',
          size: 'small',
          fullWidth: true
        },
      },
    },
  });

  const formik = useFormik({
    initialValues: { name: '', number: '' },
    validationSchema: addcontactSchema,
    onSubmit: ({ name, number }) => {
      const contact = { name, number };
      dispatch(addContact(contact));
      onAddContact();
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
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />
        <br />
        <TextField
          name="number"
          id="number"
          label="Number"
          value={formik.values.number}
          onChange={formik.handleChange}
          error={formik.touched.number && Boolean(formik.errors.number)}
          helperText={formik.touched.number && formik.errors.number}
        />
        <br />
        <Button
          fullWidth
          type="submit"
          sx={{ marginTop: '20px' }}
          variant="contained"
          disabled={!formik.values.name || !formik.values.number}
        >
          Add contact
        </Button>
      </form>
    </ThemeProvider>
  );
}

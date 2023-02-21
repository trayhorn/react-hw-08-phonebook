import { TextField, Button } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useFormik } from 'formik';
import { useSelector } from 'react-redux';

export default function EditForm() {
  const contact = useSelector(state => state.contacts.contacts)
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
    initialValues: { name: '', number: '' },
    onSubmit: ({ name, number }) => {
      console.log(name, number);
      console.log(contact);
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

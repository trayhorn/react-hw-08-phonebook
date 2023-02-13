import { TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/Contacts/ContactsSlice';

export default function Filter() {
  const dispatch = useDispatch();
  const handleFilterChange = e => {
    dispatch(setFilter(e.target.value));
  }

  return (
    <div>
      <TextField
        sx={{ bgcolor: 'white' }}
        fullWidth
        autoComplete="off"
        name="filter"
        id="filled"
        label="Filter"
        variant="filled"
        size="small"
        onChange={handleFilterChange}
      />
    </div>
  );
}
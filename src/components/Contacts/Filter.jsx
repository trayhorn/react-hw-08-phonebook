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
        fullWidth
        autoComplete="off"
        name="filter"
        id="outlined"
        label="Filter"
        variant="filled"
        size="small"
        onChange={handleFilterChange}
        sx={{ bgcolor: 'white', borderRadius: '5px' }}
      />
    </div>
  );
}
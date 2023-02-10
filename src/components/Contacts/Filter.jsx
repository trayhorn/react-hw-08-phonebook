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
        id="outlined-basic"
        label="Filter"
        variant="outlined"
        size="small"
        onChange={handleFilterChange}
      />
    </div>
  );
}
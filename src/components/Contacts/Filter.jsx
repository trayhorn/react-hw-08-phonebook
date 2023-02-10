import { TextField } from '@mui/material';

export default function Filter() {

  const handleFilterChange = e => {
    console.log(e.target.value);
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
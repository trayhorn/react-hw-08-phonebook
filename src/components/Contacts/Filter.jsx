import { TextField } from '@mui/material';

export default function Filter({ onFilterChange, value }) {
  const handleChange = e => {
    onFilterChange(e.target.value);
  };

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
        sx={{ marginTop: '20px' }}
        onChange={handleChange}
        value={value}
      />
    </div>
  );
}
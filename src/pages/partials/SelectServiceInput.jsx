import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectServiceInput(props) {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }} className="mb-3">
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Service</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem onClick={props.onClick} value={"Home Care"}>Home Care</MenuItem>
          <MenuItem onClick={props.onClick} value={"Day Care"}>Day Care</MenuItem>
          <MenuItem onClick={props.onClick} value={"Errands Care"}>Errands Care</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
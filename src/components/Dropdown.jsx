import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function Dropdown() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 100  }} >
      <FormControl fullWidth >
        <InputLabel  id="demo-simple-select-label" style={{color: 'white' , height: '30px'}}>Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          style={{height: '30px'}}
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem style={{height: '30px'}} value={10}>ten</MenuItem>
          <MenuItem style={{height: '30px'}} value={20}>twenty</MenuItem>
          <MenuItem  style={{height: '30px'}} value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

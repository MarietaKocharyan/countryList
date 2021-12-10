import { useState, useEffect  } from 'react';
import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const Hedaer = () => {
  // useEffect(() => {
  //   const sortArray = type => {
  //     const types = {
  //       country: 'country',
  //       collection: 'collection',
  //       releasedOn: 'releasedOn',
  //     };
  //     const sortProperty = types[type];
  //     const sorted = [...movies].sort((a, b) => b[sortProperty] - a[sortProperty]);
  //     setData(sorted);
  //   };
  //   sortArray(sortType);
  // }, [sortType]); 
  const [age, setAge] = useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

    return (
        <Box sx={{ p: 3, textAlign: 'center', color: 'blue'}}>
        <AppBar position="static">
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit" sx={{textAlign: 'center'}}>
            List of countries
          </Typography>
        </Toolbar>
      </AppBar>     
      <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Sort by"
          onChange={handleChange}
        >
          <MenuItem >Counrt</MenuItem>
          <MenuItem >Capital</MenuItem>
        </Select>
      </FormControl>
    </Box>
      
         </Box>
    )};

export default Hedaer;
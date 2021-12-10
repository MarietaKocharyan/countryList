import {useState, useEffect} from 'react';
import { useHistory } from "react-router-dom";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import CheckIcon from '@mui/icons-material/Check';


const ListOfCountries = () => {

    const [list, setList] = useState([]);
    const [sortType, setSortType] = useState('');

    const url = 'https://restcountries.com/v3.1/all';

    useEffect(() => {
      fetch(url)
      .then(response => response.json())
      .then(data => setList(data))
      .catch(error => console.log("Something is wrong" + error))
    }, []);
    
    const history = useHistory();

    const handleClick = (country) => {
      history.push(`/country/${country}`)
    }

    return (
      <>
      <Box sx={{ Width: 120 }}>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value="Sort by"
          label="Sort"
          onChange={(e) => setSortType(e.target.value)}  >
            <MenuItem value={'Country'}>Country</MenuItem>
            <MenuItem value={'Capital'}>Capital</MenuItem>
          </Select>
      </Box>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow> 
                <TableCell>Country name</TableCell>
                <TableCell align="right">Capital</TableCell>
                <TableCell align="right">Country area</TableCell>
                <TableCell align="right">Country Flag </TableCell>
                <TableCell align="right">UnMembe</TableCell>
                <TableCell align="right">TimeZone</TableCell>
              </TableRow>
            </TableHead>
            <TableBody >
            {list.map(({altSpellings, area, timezones, flags, unMember , capital, languages}, index)=> 
              <>
                <TableRow key={index}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  onClick={() => handleClick(Object.keys(languages)[0])}
                >
                  <TableCell component="th" scope="row" scope="row">
                    {altSpellings[1] || altSpellings[0]}                  
                  </TableCell>
                  <TableCell align="right" >{capital}</TableCell>
                  <TableCell align="right" >{area}</TableCell>
                  <TableCell align="right" >
                  <Avatar alt="Flag" src={flags.png}/>
                    </TableCell>  
                  <TableCell align="right" > 
                      {unMember &&  <CheckIcon />}
                  </TableCell>
                  <TableCell align="right">{timezones}</TableCell>
                </TableRow>
                </>
            )}
            </TableBody>
          </Table>
        </TableContainer>
        </>
      );
};


export default ListOfCountries;


import {useState, useEffect} from 'react';

import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import CheckIcon from '@mui/icons-material/Check';


const ListByLaungage = ({}) => {
    const [list, setList] = useState([]);

    const { lang } = useParams(); 

    const urlForLang = `https://restcountries.com/v3.1/lang/${lang}`;

    useEffect(() => {
        fetch(urlForLang)
        .then(response => response.json())
        .then(data => setList(data))
        .catch(error => console.log("Something is wrong" + error))
    }, []);
    
    return (
      <>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow> 
                <TableCell>Country name</TableCell>
                <TableCell align="right">Capital</TableCell>
                <TableCell align="right">Country area</TableCell>
                <TableCell align="right">Country Flag </TableCell>
                <TableCell align="right">UnMembe</TableCell>
                <TableCell align="right"> TimeZone</TableCell>
              </TableRow>
            </TableHead>
            <TableBody >
              {list.map(({area, flags, unMember, capital, timezones, altSpellings})=> 
                <TableRow
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row" scope="row" >
                    {altSpellings[1] || altSpellings[1]}
                  </TableCell>
                  <TableCell align="right">{capital}</TableCell>
                  <TableCell align="right">{area}</TableCell>
                  <TableCell align="right">
                  <Avatar alt="Flag" src={flags.png}/>
                    </TableCell>
                  <TableCell align="right"> 
                      {unMember &&  <CheckIcon />}
                  </TableCell>
                  <TableCell align="right">{timezones}</TableCell>
                </TableRow>
            )}
            </TableBody>
          </Table>
        </TableContainer>
        </>
      );
};


export default ListByLaungage;

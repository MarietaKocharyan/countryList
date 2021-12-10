import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

const Hedaer = () => {
    return (
        <Box sx={{ p: 3, textAlign: 'center', color: 'blue'}}>
    <AppBar position="static">
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit" sx={{textAlign: 'center'}}>
            List of countries
          </Typography>
        </Toolbar>

      </AppBar>     
     
      
         </Box>
    )};

export default Hedaer;
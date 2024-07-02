import BottomNavigation from '@mui/material/BottomNavigation';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
//import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
//import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
//import InstagramIcon from '@mui/icons-material/Instagram';
//import FacebookIcon from '@mui/icons-material/Facebook';

//const details = ['+6398283891823', '@Festive Walk Mall, Iloilo'];


export default function Footer() {

  const style = {
   
    position: 'fixed',
    bottom: '0',
    left: '0',
    width: '100%',
  };

  return (
    <BottomNavigation>
        
      <AppBar className='yuki-color' position="static" style={style}>
        
        <Container maxWidth="xl" className='footer-container'>

          
          <Toolbar disableGutters >
    


            <Typography className='cursive-font' variant="h5"  style={{ margin: 'auto'}}>
              Come, play and stay with us!
            </Typography>




            


            {/*
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              {details.map((page) => (
                  <Typography href="#" underline="none"
                    key={page}
                    style={{marginRight: '1rem'}}
                    sx={{ my: 2, color: 'white', display: 'block' }}
                  >
                    {page}
                  </Typography>
                ))}
            </Box>
            
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {details.map((page) => (
                <Typography href="#" underline="none"
                  key={page}
                  style={{marginRight: '1rem'}}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {page}
                </Typography>
              ))}
            </Box>
*/}

{/* 
            <Box sx={{ flexGrow: 0 }}>
              <IconButton style={iconStyle}>
                <InstagramIcon style={logoStyle} />
              </IconButton>
              <IconButton style={iconStyle}>
                <FacebookIcon style={logoStyle}/>
              </IconButton>
            </Box>

            */}
          </Toolbar>
        </Container>
      </AppBar>
    </BottomNavigation>
  )
};
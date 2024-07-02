import { Box, Container, styled, Typography } from "@mui/material";
import React from "react";
import AdminNavbar from "../components/AdminNavbar";
import cartoonDogs from "../assets/images/cartoonDogs.jpeg";
import { amber } from '@mui/material/colors';

import Grid from '@mui/material/Grid';

const amberColor = amber[500]
const LilitaOne = "'Lilita One', cursive";

const AdminDashBoard = () => {
  const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    gap: theme.spacing(5),
    marginTop: theme.spacing(1),
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
    },

  }));
 
  const Title = styled(Typography)(({ theme }) => ({
    fontSize: "900px",
    fontFamily: LilitaOne,
    margin: theme.spacing(4, 0, 4, 0),
    [theme.breakpoints.down("sm")]: {
      fontSize: "40px",
    },
  }));
  return (
    
    <Box sx={{ backgroundColor: "white", minHeight: "80vh" }}>
      
      <Container>
        <AdminNavbar />
        
        <CustomBox>
          <Box sx={{ flex: "1" }}>
           
            <Title variant="h1" sx={{fontSize: '100px', color: amberColor}}>
              
              YUKIMITO
              </Title>
              <Typography
               variant="body2"
               sx={{
                 fontSize: "20px",
                 color: "#5A6473",
                 fontWeight: "1000",
                 my: 2,
                 
               }}>
                Iloilo Pet Hotel and Boarding Services
              </Typography>
          
 
            <Typography
              variant="body2"
              sx={{
                fontSize: "18px",
                color: "#5A6473",
                fontWeight: "500",
                mt: 1,
                mb: 4,
                
              }}>
              
          Rates
            </Typography>

            

            <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} columns={16}>
        <Grid  xs={8} sx = {{ fontSize: "15px", color: "#5A6473"}}>
          <Typography variant="body1">
          Pet Hotel <br/>
          Day Care <br/>
          Grooming<br/>
          </Typography>
        </Grid>


        <Grid  xs={8} sx = {{ fontSize: "15px", color: "#5A6473"}}>
          <Typography variant="body1">
          400/day <br/>
          250/day <br/>
          600
          </Typography>

        </Grid>
      </Grid>
    </Box>



          </Box>
          
    


          

          <Box sx={{ flex: "1.25" }}>
            <img
              src= {cartoonDogs}
              alt="cartoon dog"
              style={{ maxWidth: "100%", marginBottom: "2rem" }}
            />
          </Box>

        </CustomBox>
      </Container>
    </Box>
  );
};

export default AdminDashBoard;

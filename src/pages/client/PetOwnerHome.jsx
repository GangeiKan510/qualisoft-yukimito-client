import React from "react";
import ClientNavBar from "../../components/ClientNavBar";
import Footer from "../../components/partials/Footer";

import { Box, Container, Typography, Grid } from "@mui/material";

import cartoonDogs from "../../assets/images/cartoonDogs.jpeg";

const PetOwnerHome = () => {
  return (
    <>
      <ClientNavBar navItems={[]} />
 <Container sx = {{display: "flex"}}>
      <Grid container rowSpacing={1} >
        <Grid xs={6}>
         
            <Box
              className="main-container input-margin"
              maxWidth="xl"
              sx={{
                flex: "1",
                width: "100%",
                maxWidth: "100%",
                marginLeft: "50px",
              }}
            >
              <Typography
                className="yukimito-font yuki-font-color"
                variant="h1"
                sx={{
                  fontSize: "100px",
                }}
              >
                YUKIMITO
              </Typography>
              <Typography>Iloilo Pet Hotel and Boarding Services</Typography>

              <Typography>Rates</Typography>
            </Box>
         
        </Grid>
        <Grid xs={5}>
          <Box
          
            sx={{
         
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "100%",
            }}
          >
            <img
              src={cartoonDogs}
              alt="Logo"
              style={{
                width: "100%",
                maxWidth: "100%",
                marginLeft: "50px",
               marginTop: "150px",
              }}
            />
          </Box>
        </Grid>
      </Grid>
 </Container>
      <Footer />
    </>
  );
};

export default PetOwnerHome;

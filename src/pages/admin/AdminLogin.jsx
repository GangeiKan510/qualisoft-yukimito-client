import React, { useState } from "react";
import { Box, TextField } from "@mui/material";
import Card from "@mui/material/Card";

import NavBar from "../../components/partials/NavBar";
import Footer from "../../components/partials/Footer";
import axios from "axios";
import LoginHero from "../partials/HeroLogin";

const inputDetails = [
  {
    name: "adminUsername",
    label: "Admin Username",
    placeholder: "Admin Username",
    type: "text",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Password",
    type: "password",
  },
];

async function loginAdmin(credentials) {
  try {
    const response = await axios.post(
      "http://localhost:4269/api/auth/signin/admin",
      credentials
    );
    localStorage.setItem("token", response.data.token);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}

export default function AdminLogin() {
  const [input, setInput] = useState({
    username: String,
    password: String,
  });

  function handleInput(event) {
    const name = event.target.name;
    console.log(name);
    if (name === "adminUsername") {
      setInput({
        ...input,
        username: event.target.value,
      });
    } else if (name === "password") {
      setInput({
        ...input,
        password: event.target.value,
      });
    }
  }

  async function handleSubmit() {
    const success = await loginAdmin(input);
    if (success) {
      window.location.href = "/AdminDashboard";
    }
  }

// when enter is pressed
  const handleKeyPress = (event) => {
    if (event.keyCode === 13 || event.which === 13) {
      handleSubmit();
    }
 }

  return (
    <>
      <NavBar navItems={[]} />

      <div className="container my-5 main-container pt-5">
        <div className="row">
          
          <div className="col-sm mt-3 d-flex justify-content-center text-center">
            <div>
              <div className="row "></div>
              <LoginHero />
            </div>
          </div>

          <div className="col-sm mt-3 p-0">
            <div className="mx-3">
              <Box sx={{ gridArea: "form" }}>
                <Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <Card className="form-bg-color form-styles shadow">
                      <Box className="input-container">
                        <p className="text-center h4 mb-3 black-font fw-bold">
                          Login to Yukimito!
                        </p>

                        {inputDetails.map((details, index) => {
                          return (
                            <TextField
                              key={index}
                              className="input-margin non-inline input-styling"
                              onChange={handleInput}
                              name={details.name}
                              placeholder={details.placeholder}
                              type={details.type}
                              id="outlined-basic"
                              label={details.label}
                              variant="outlined"
                              onKeyPress={handleKeyPress}
                              required
                            />
                          );
                        })}

                        {/* {isInvalidLogin && (
  
                            <Alert severity="error" 
                            >
                              <AlertTitle><h5><b>Error</b></h5></AlertTitle>
                              Invalid login! Please check your credentials.
                            </Alert>
            
                          )} */}

                        <div class="d-grid gap-2 my-2">
                          <button
                            class="btn btn-primary button-color"
                            onClick={handleSubmit}
                            type="button"
                          >
                            Login
                          </button>
                        </div>
                      </Box>
                    </Card>
                  </Box>
                </Box>
              </Box>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

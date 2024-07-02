import React, { useState, useEffect } from 'react';
import { Box, TextField } from "@mui/material";
import Card from "@mui/material/Card";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import WhatWeOffer from '../partials/WhatWeOffer';
import Footer from '../partials/Footer';
import NavBarMain from '../partials/NavBarMain';
import LoginHero from '../partials/HeroLogin';
import LoginIcon from '@mui/icons-material/Login';
import AlertTitle from '@mui/material/AlertTitle';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

const inputDetails = [
  {
    name: 'username',
    label: "Your Username",
    placeholder: "Username",
    type: "text"
  }, 
  {
    name: 'password',
    label: "Your Password",
    placeholder: "Password",
    type: "password"
  }
];

async function loginUser(credentials) {
  try {
    const response = await axios.post(`${process.env.REACT_APP_PUBLIC_API_SERVER}/api/auth/signin/petowner`, credentials);
    localStorage.setItem('token', response.data.accessToken);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}

const PetOwnerLogin = () => {
  const [isInvalidLogin, setIsInvalidLogin] = useState(false);
  const navigate = useNavigate();
  const [input, setInput] = useState({
    username: '',
    password: ''
  });

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      navigate('/PetOwnerDashboard');
    }
  }, [navigate]);

  async function handleLogin() {
    const success = await loginUser(input);
    let test;
    console.log(success);

    if (success) {
      navigate('/PetOwnerDashboard');
    } else {
      setIsInvalidLogin(true);
    }
    return test;
  }

  function handleInput(event) {
    const name = event.target.name;
    setInput({
      ...input,
      [name]: event.target.value
    }); 
  }

  const handleKeyPress = (event) => {
    if (event.keyCode === 13 || event.which === 13) {
      handleLogin();
    }
  };

  const navItems = ["About", "Gallery", "Requirements", "Rates & Services", "Team", "Reviews"];
  return (
    <>
      <hr id="Log In"/>
      <NavBarMain navItems={navItems} customLink={<a className="nav-link text-white nav-link display-6" href="#Log In"><LoginIcon className='me-1'/>Log In</a>}/>
      <div className="container my-5 main-container pt-5">
        <div className="row">
          <div className="col-sm mt-3 d-flex justify-content-center text-center">
            <div>
              <div className="row ">
                <LoginHero />
              </div>
            </div>
          </div>
          <div className="col-sm mt-3 p-0">
            <div className='mx-3'>
              <Box sx={{ gridArea: 'form' }} >
                <Box>
                  <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <Card className='form-bg-color form-styles shadow'>
                      <Box className="input-container">
                        <p className='text-center h4 mb-3 black-font fw-bold'>Login to Yukimito!</p>
                        {inputDetails.map((details, index) => (
                          <TextField
                            key={index}
                            className='input-margin non-inline input-styling'
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
                        ))}
                        <Stack spacing={2}>
                          {isInvalidLogin && (
                            <Alert severity="error">
                              <AlertTitle><h5><b>Error</b></h5></AlertTitle>
                              Invalid login! Please check your credentials.
                            </Alert>
                          )}
                        </Stack>
                        <div className="d-grid gap-2 my-2">
                          <button className="btn btn-primary button-color" onClick={handleLogin} type="button">Login</button>
                        </div>
                        <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                          <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                            No account yet?  
                            <Link to={'/ClientRegister'} className='button-link yuki-font-color' type="submit" variant="text">
                              Create an account
                            </Link>
                          </Box>
                        </Box>
                      </Box>
                    </Card>
                  </Box>
                </Box>
              </Box>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <hr id='About' className='mb-5 pb-5'/>
      </div>
      <WhatWeOffer />
      <Footer /> 
    </>
  );
};

export default PetOwnerLogin;
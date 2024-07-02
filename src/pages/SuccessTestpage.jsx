import React, { useEffect } from "react";
import { Button } from "@mui/material";
import { useNavigate } from 'react-router-dom';

const SuccessTestPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/');
    }
  }, [navigate]);

  function handleLogout () {
    localStorage.removeItem('token');
    navigate('/');
  }

  return (
    <div>
      <Button
        className="button-color"
        variant="contained"
        onClick={handleLogout}
        style={{ marginRight: "10px" }}
      >
        LOG OUT
      </Button>
    </div>
  );
};

export default SuccessTestPage;
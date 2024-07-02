import { useState } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { useNavigate } from "react-router-dom";
import EditPetProfileForm from './EditPetProfileForm';

export default function BasicMenu(props) {
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();

  const isOpen = Boolean(anchorEl);

  const [ open, setOpen ] = useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  function handleLogout () {
    localStorage.removeItem('token');
    navigate('/');
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={isOpen ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={isOpen ? 'true' : undefined}
        onClick={handleClick}
        style={{color: 'white'}}
      >
        <AccountCircleOutlinedIcon style={{fontSize: '50px'}}/>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={isOpen}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem>
          <EditPetProfileForm
            updateFormData={props.updateFormData}
            ownerName={props.ownerName}
            username={props.username}
            contactNumber={props.contactNumber}
            email={props.email}
            open={open}
            handleCancel={handleCancel}
            handleClickOpen={handleClickOpen}
            handleUpdate={props.handleUpdate} />
        </MenuItem>
        <MenuItem onClick={handleClose}><Button className='yuki-font-color2' variant='text'>My account</Button></MenuItem>
        <MenuItem onClick={handleLogout}><Button className='yuki-font-color' variant='text'>Logout</Button></MenuItem>
      </Menu>
    </div>
  );
}

import { useNavigate } from "react-router-dom";
import LogoutIcon from '@mui/icons-material/Logout';

export default function Logout(props) {

  const navigate = useNavigate();

  function handleLogout () {
    localStorage.removeItem('token');
    navigate(props.link);
  }

  return (
    <>
      <a onClick={handleLogout} class="nav-link text-white" href={props.link}><LogoutIcon className="me-1"/>Log out</a>
    </>
  )
};
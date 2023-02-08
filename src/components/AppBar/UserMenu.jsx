import { Typography, Button, Avatar } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useSelector, useDispatch } from 'react-redux';
import { logOut } from 'redux/Auth/AuthOperations';
import { useNavigate, NavLink } from 'react-router-dom';

export default function UserMenu() {
  const name = useSelector(state => state.auth.user.name);
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onLogOut = () => {
    dispatch(logOut());
    navigate('/login');
  };

  return (
    <>
      <Avatar sx={{ bgcolor: 'secondary.main', marginRight: '20px' }}>
        <AccountCircleIcon fontSize="large" />
      </Avatar>
      <Typography
        variant="h6"
        component="div"
        sx={{
          marginRight: '20px',
        }}
      >
        Welcome, {name}!
      </Typography>
      <NavLink to='/contacts' className="navlink">
        <Button color="inherit">Contacts</Button>
      </NavLink>
      <Button color="inherit" onClick={() => onLogOut()}>
        Logout
      </Button>
    </>
  );
}

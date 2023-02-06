import { Typography, Button, Avatar } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useSelector, useDispatch } from 'react-redux';
import { logOut } from 'redux/operations';
import { useNavigate } from 'react-router-dom';


export default function UserMenu() {
  const name = useSelector(state => state.auth.user.name);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onLogOut = () => {
    dispatch(logOut());
    navigate('/login');
  }

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
      <Button color="inherit" onClick={() => onLogOut()}>Logout</Button>
    </>
  );
}

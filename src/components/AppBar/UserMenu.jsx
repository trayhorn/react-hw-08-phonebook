import {
  Typography,
  Avatar,
  IconButton,
  Menu,
  MenuItem,
} from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logOut } from 'redux/Auth/AuthOperations';
import { NavLink } from 'react-router-dom';

export default function UserMenu() {
  const name = useSelector(state => state.auth.user.name);
  const dispatch = useDispatch();

  const onLogOut = () => {
    dispatch(logOut());
    setAnchorEl(null);
  };

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Typography
        variant="h6"
        component="div"
        sx={{
          marginRight: '20px',
        }}
      >
        Welcome, {name}!
      </Typography>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
      >
        <Avatar
          sx={{ bgcolor: 'secondary.main' }}
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
          <AccountCircleIcon fontSize="large" />
        </Avatar>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <NavLink to="/contacts" className="navlink">
            <MenuItem sx={{ color: 'black' }} onClick={handleClose}>
              Contacts
            </MenuItem>
          </NavLink>
          <NavLink to="/login" className="navlink">
            <MenuItem sx={{ color: 'black' }} onClick={onLogOut}>Logout</MenuItem>
          </NavLink>
        </Menu>
      </IconButton>
    </>
  );
}

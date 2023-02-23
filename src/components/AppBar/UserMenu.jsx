import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Typography, Avatar, Menu, MenuItem } from '@mui/material';
import { logOut } from 'redux/Auth/AuthOperations';
import { selectUserName } from 'redux/Auth/AuthSelectors';

export default function UserMenu() {
  const name = useSelector(selectUserName);
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
    <div style={{display: 'flex', alignItems: 'center'}}>
      <Typography
        variant="h6"
        component="div"
        sx={{
          marginRight: '20px',
        }}
      >
        Welcome, {name}!
      </Typography>
      <Avatar
        sx={{ bgcolor: 'secondary.main', cursor: 'pointer' }}
        aria-label="menu"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
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
        <MenuItem sx={{ color: 'black' }} onClick={onLogOut}>
          Logout
        </MenuItem>
      </Menu>
    </div>
  );
}

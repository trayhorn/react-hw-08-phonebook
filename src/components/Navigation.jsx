import React from 'react'
import { AppBar, Box, Toolbar, Typography, Button, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Navigation() {
  const isLoggedIn = useSelector(state => state.phoneBook.isLoggedIn);
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Phonebook
            </Typography>
            {isLoggedIn && (
              <>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  Welcome, Ivan!
                </Typography>
                <Button color="inherit">Logout</Button>
              </>
            )}
            {!isLoggedIn && (
              <>
                <NavLink className="navlink" to="/login">
                  <Button color="inherit">Login</Button>
                </NavLink>
                <NavLink className="navlink" to="/register">
                  <Button color="inherit">Register</Button>
                </NavLink>
              </>
            )}
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}

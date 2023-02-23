import React from 'react';
import { Button } from '@mui/material';
import { NavLink } from 'react-router-dom';


export default function AuthNav() {
  return (
    <div>
      <NavLink className="navlink" to="/login">
        <Button color="inherit">Login</Button>
      </NavLink>
      <NavLink className="navlink" to="/register">
        <Button color="inherit">Register</Button>
      </NavLink>
    </div>
  );
}

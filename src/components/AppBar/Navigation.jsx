import {
  AppBar,
  Box,
  Toolbar,
  Typography,
} from '@mui/material';
import { useSelector } from 'react-redux';
import AuthNav from './AuthNav';
import UserMenu from './UserMenu';


export default function Navigation() {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  
  return (
    <div style={{position: 'absolute', width: '100vw'}}>
      <Box>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
              Phonebook
            </Typography>
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}

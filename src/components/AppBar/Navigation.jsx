import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  FormControlLabel,
  Switch,
} from '@mui/material';
import { useSelector } from 'react-redux';
import AuthNav from './AuthNav';
import UserMenu from './UserMenu';


export default function Navigation({ toggleMode, currentMode }) {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  return (
    <div>
      <Box>
        <AppBar position="static">
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <FormControlLabel
              control={
                <Switch
                  checked={currentMode === 'dark'}
                  onChange={toggleMode}
                />
              }
              label="Dark mode"
            />
            <Typography variant="h5" component="div" sx={{ fontWeight: '600' }}>
              Phonebook
            </Typography>
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}

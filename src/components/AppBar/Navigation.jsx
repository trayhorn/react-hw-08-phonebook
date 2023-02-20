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
import { toggleTheme } from 'redux/Contacts/ContactsSlice';
import { useDispatch } from 'react-redux';


export default function Navigation() {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const dispatch = useDispatch();

  const toggleMode = () => {
    dispatch(toggleTheme())
  }

  return (
    <div>
      <Box>
        <AppBar position="static">
          <Toolbar>
            <Typography
              variant="h5"
              component="div"
              sx={{ flexGrow: 1, fontWeight: '600' }}
            >
              Phonebook
            </Typography>
            <FormControlLabel
              control={
                <Switch
                  // checked={currentMode === 'dark'}
                  onChange={toggleMode}
                />
              }
              label="Dark mode"
            />
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { refreshUser } from 'redux/Auth/AuthOperations';
import { RegisterForm, ContactsView, LoginForm, Layout } from './pages';
import { RestrictedRoute } from 'components/RestrictedRoute';
import { PrivateRoute } from 'components/PrivateRoute';
import Home from 'pages/Home';
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';
import { useSelector } from 'react-redux';

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUser())
  }, [dispatch])

  const mode = useSelector(state => state.contacts.theme);

  const theme = createTheme({
    palette: {
      mode,
      primary: {
        main: '#108d90',
      },
      secondary: {
        main: '#448AFF',
      },
    },
  });



  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="/login"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<LoginForm />}
              />
            }
          />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<RegisterForm />}
              />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<ContactsView />} />
            }
          />
        </Route>
      </Routes>
    </ThemeProvider>
  );
};

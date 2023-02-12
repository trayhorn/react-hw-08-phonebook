import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { refreshUser } from 'redux/Auth/AuthOperations';
import RegisterForm from './pages/RegisterForm';
import ContactsView from './pages/ContactsView';
import LoginForm from './pages/LoginForm';
import Home from './pages/Home';
import Layout from './pages/Layout';
import { RestrictedRoute } from 'RestrictedRoute';
import PrivateRoute from 'PrivateRoute';

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUser())
  }, [dispatch])

  return (
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
            <PrivateRoute
              redirectTo="/login"
              component={<ContactsView />} />
          }
        />
      </Route>
    </Routes>
  );
};

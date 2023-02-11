import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { refreshUser } from 'redux/Auth/AuthOperations';
import Navigation from './components/AppBar/Navigation';
import RegisterForm from './pages/RegisterForm';
import ContactsView from './pages/ContactsView';
import LoginForm from './pages/LoginForm';
import Home from './pages/Home';
import RestrictedRoute from 'RestrictedRoute';

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUser())
  }, [dispatch])

  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={
            <RestrictedRoute component={LoginForm} />
          }
        />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/contacts" element={<ContactsView />} />
      </Routes>
    </div>
  );
};

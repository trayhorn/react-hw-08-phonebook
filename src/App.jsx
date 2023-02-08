import Navigation from './components/AppBar/Navigation';
import { Routes, Route } from 'react-router-dom';
import LoginForm from './pages/LoginForm';
import RegisterForm from './pages/RegisterForm';
import ContactsView from './pages/ContactsView';
import Home from './pages/Home';
import { refreshUser } from 'redux/Auth/AuthOperations';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

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
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/contacts" element={<ContactsView />} />
      </Routes>
    </div>
  );
};

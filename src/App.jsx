import Navigation from './components/AppBar/Navigation';
import { Routes, Route } from 'react-router-dom';
import LoginForm from './components/pages/LoginForm';
import RegisterForm from './components/pages/RegisterForm';
import ContactsView from './components/pages/ContactsView';
import Home from './components/pages/Home';

export const App = () => {
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

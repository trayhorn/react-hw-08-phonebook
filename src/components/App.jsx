import Navigation from "./AppBar/Navigation";
import { Routes, Route } from 'react-router-dom';
import LoginForm from './LoginForm';
import RegisterForm from "./RegisterForm";
import AppPhonebook from "./Contacts/AppPhonebook";

export const App = () => {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route
          path="/"
          element={
            <p style={{ textAlign: 'center', fontSize: '40px' }}>Welcome!</p>
          }
        />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/contacts" element={<AppPhonebook />} />
      </Routes>
    </div>
  );
};

import Navigation from "./Navigation";
// import UserMenu from "./UserMenu";
import LoginForm from './LoginForm';
import RegisterForm from "./RegisterForm";
import { Routes, Route } from 'react-router-dom';

export const App = () => {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<p style={{textAlign: 'center', fontSize: '40px'}}>Welcome!</p>} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
      </Routes>
      {/* <UserMenu /> */}
    </div>
  );
};

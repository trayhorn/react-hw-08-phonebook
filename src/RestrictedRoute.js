import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function RestrictedRoute({ component: Component }) {
  const isLoggedIn = useSelector(state => state.contacts.isLoggedIn);

  return isLoggedIn ? <Navigate to="/contacts" /> : <Component />;
}

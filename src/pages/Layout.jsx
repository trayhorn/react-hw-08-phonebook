import Navigation from "components/AppBar/Navigation";
import { Outlet } from "react-router-dom";


export default function Layout() {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  )
}

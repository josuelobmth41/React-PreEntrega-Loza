import { Outlet } from "react-router-dom";
import NavBar from "./NavBar/NavBar";
import Footer from "./footer/footer";

const Layout = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;

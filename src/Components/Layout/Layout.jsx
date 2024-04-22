import { Fragment } from "react";
import Navbar from "../Navbar/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "./../Footer/Footer";
import Container from "react-bootstrap/esm/Container";

function Layout() {
  return (
    <Fragment>
      {/* <Container className="py-3"> */}
      <Navbar />
        <Outlet />
      <Footer />
      {/* </Container> */}
    </Fragment>
  );
}

export default Layout;

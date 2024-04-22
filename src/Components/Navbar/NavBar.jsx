import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./navbar.css";
import { IoCartOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
function NavBar() {
  return (
   <header className="header">
     <Navbar expand="lg" className="bg-body-tertiary navbar-nav ">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="navbar">
          <Nav className="ms-auto parent">
            <NavLink className="nav_link " to={"/"}>
              الرئيسيه
            </NavLink>
            <NavLink className="nav_link" to={"/oilproducts"}>
              منتجات العسل
            </NavLink>
            <NavLink className="nav_link" to={"/herbalproducts"}>
              منتجات الزيوت
            </NavLink>
            <NavLink className="nav_link" to={"/honeyproducts"}>
              منتجات الأعشاب
            </NavLink>
            <NavLink className="nav_link" to={"/aichat"}>
              تحدث للذكاء الإصطناعي
            </NavLink>
          </Nav>
          <div className="nav__icons">
            <div className="nav__icon">
              <NavLink to={"/cart"}>
                <IoCartOutline />
              </NavLink>
            </div>
            <div className="nav__icon">
              <NavLink to={"/whislist"}>
                <CiHeart  />
              </NavLink>
            </div>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   </header>
  );
}

export default NavBar;

{
  /* <NavLink to={"/"} className={""}>Home</NavLink>
<NavLink to={"/oilproducts"}>Oil Products</NavLink>
<NavLink to={"/herbalproducts"}>Herbal Products </NavLink>
<NavLink to={"/honeyproducts"}>Honey  Products</NavLink> */
}
{
  /* <div className="nav__icons">
  <div className="nav__icon">
    <span>0</span>
    <FaCartArrowDown />
  </div>
  <div className="nav__icon">
    <span>0</span>
    <FaHeart />
  </div>
</div>; */
}

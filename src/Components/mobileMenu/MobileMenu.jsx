import { useContext } from "react";
import { MobileHandlerContext } from "../../utils/MobileHandler";
import { NavLink } from "react-router-dom";
import { easeInOut, motion } from "framer-motion";
function MobileMenu() {
  const { openMenu } = useContext(MobileHandlerContext);
  return (
    <div className={`mobileMenu ${openMenu ? "active" : ""}`}>
      <motion.ul
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.4 , ease:easeInOut }}
      >
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/about"}>About</NavLink>
        <NavLink to={"/shop"}>Shop</NavLink>
        <NavLink to={"/contact"}>Contact</NavLink>
      </motion.ul>
    </div>
  );
}

export default MobileMenu;

import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import { ImWhatsapp } from "react-icons/im";
import './footer.css'
function Footer() {
  return (
    <>
      <div className="footer mt-5 p-3 ">
          <h4 className="footer-title">تواصل معنا </h4>
          <div className="footer-icons">
          <ImWhatsapp />
          <FaFacebookSquare />
          <FaInstagram />
          </div>
      </div>
    </>
  );
}

export default Footer;

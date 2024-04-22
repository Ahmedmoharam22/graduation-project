import { FaCartArrowDown, FaHeart } from "react-icons/fa";
import { herbalData } from "../../constants/constant";
import { Card } from "react-bootstrap";
import "./honeyProducts.css";
import ScrollToTop from "./../../Components/Scroll To Top/ScrollTop";

const HoneyProducts = () => (
  <div className="HoneyProducts">
    <div className="HoneyProducts_hero">
      <img
        src="../../../public/oilProducts_Img_hero.jpg"
        alt="HoneyProducts"
        className="HoneyProducts_hero_img"
      />

      <div className="HoneyProducts_title">
        <img
          src="../../../public/Herbal products_Img.jpg"
          alt="HoneyProducts_title_Img"
          className="HoneyProducts_title_Img"
        />
        <div className="HoneyProducts_title_text">
          <h1 className="HoneyProducts_title_h1">
            <span className="HoneyProducts_title_span">أحصل</span> علي أجود
            الأعشاب <br />
            الطبيعة.
          </h1>
          <button className="btn-HoneyProducts">معرفة المزيد</button>
        </div>
      </div>
    </div>

    {/* card */}

    <div className="flex_HoneyProducts">
      {herbalData.map((honey) => (
        <Card className="card" key={honey.id}>
          <Card.Img className="card_img" src={honey.Image} alt={honey.title} />
          <Card.Title style={{ width: "80%", margin: "5px auto" }}>
            {honey.title}
          </Card.Title>
          <div className="card_btn">
            <div style={{ display: "flex", gap: "10px" }}>
              <FaCartArrowDown size={20} className="c-pointer" />
              <FaHeart size={20} className="c-pointer" />
            </div>
            <b style={{ color: "black" }}>{honey.price}</b>
          </div>
        </Card>
      ))}
      <ScrollToTop />
    </div>
  </div>
);

export default HoneyProducts;

// <div>
//   <HerbalData />
// </div>

import { FaCartArrowDown, FaHeart } from "react-icons/fa";
import { oilData } from "../../constants/constant";
import { Card } from "react-bootstrap";
import "./herbalProducts.css";
import ScrollToTop from "../../Components/Scroll To Top/ScrollTop";

const HerbalProducts = () => (
  <div className="HerbalProducts">
    <div className="HerbalProducts_hero">
      <img
        src="../../../public/oilProducts_Img_hero.jpg"
        alt="HerbalProducts"
        className="HerbalProducts_hero_img"
      />

      <div className="HerbalProducts_title">
        <img
          src="../../../public/Oil products_Img.jpg"
          alt="HerbalProducts_title_Img"
          className="HerbalProducts_title_Img"
        />
        <div className="HerbalProducts_title_text">
          <h1 className="HerbalProducts_title_h1">
            <span className="HerbalProducts_title_span">أحصل</span> علي أجود
            الزيوت <br />
            الطبيعة .
          </h1>
          <button className="btn-HerbalProducts">معرفة المزيد</button>
        </div>
      </div>
    </div>

    {/* card */}

    <div className="flex_HerbalProducts">
      {oilData.map((oil) => (
        <Card className="card" key={oil.id}>
          <Card.Img className="card_img" src={oil.Image} alt={oil.title} />
          <Card.Title style={{ width: "80%", margin: "5px auto" }}>
            {oil.title}
          </Card.Title>
          <div className="card_btn">
            <div style={{ display: "flex", gap: "10px" }}>
              <FaCartArrowDown size={20} className="c-pointer " />
              <FaHeart size={20} className="c-pointer" />
            </div>
            <b style={{ color: "black" }}>{oil.price}</b>
          </div>
        </Card>
      ))}
      <ScrollToTop />
    </div>
  </div>
);

export default HerbalProducts;

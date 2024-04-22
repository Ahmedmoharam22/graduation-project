import { FaCartArrowDown, FaHeart } from "react-icons/fa";
import { honeyData } from "../../constants/constant";
import { Card } from "react-bootstrap";
import "./oilProducts.css";
import ScrollToTop from "../../Components/Scroll To Top/ScrollTop";

const OilProducts = () => (
  <div className="oilProduct">
    <div className="oilProduct_hero">
      <img
        src="../../../public/oilProducts-Img.jpg"
        alt="oilProducts"
        className="oilProduct_hero_img"
      />

      <div className="oilProduct_title">
        <img
          src="../../../public/oilProducts_Img-1.png"
          alt="oilProduct_title_Img"
          className="oilProduct_title_Img"
        />
        <div className="oilProduct_title_text">
          <h1 className="oilProduct_title_h1">
            تذوق طعم العسل الأصلي
            <br /> من <span className="oilProduct_title_span">أفضل </span>
            المناحل.
          </h1>
          <button className="btn-oilProducts">معرفة المزيد</button>
        </div>
      </div>
    </div>

    {/* card */}

    <div className="flex_OilProducts">
      {honeyData.map((oil) => (
        <Card className="card" key={oil.id}>
          <Card.Img className="card_img" src={oil.Image} alt={oil.title} />
          <Card.Title style={{ width: "80%", margin: "5px auto" }}>
            {oil.title}
          </Card.Title>
          <div className="card_btn">
            <div style={{ display: "flex", gap: "10px" }}>
              <FaCartArrowDown size={20} className="c-pointer" />
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

export default OilProducts;

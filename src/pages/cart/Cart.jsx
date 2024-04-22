import { IoCartOutline } from "react-icons/io5";
// import CartHeader from './../../Components/CartHeader/CartHeader';
// import CartList from "../../Components/CartList/CartList";
// import CartFooter from './../../Components/CartFooter/CartFooter';
import "./cart.css";
import { Card, Container } from "react-bootstrap";
import { FaCartArrowDown, FaHeart } from "react-icons/fa6";
function Cart() {
  return (
    <>
      <div className="d-flex justify-content-center gap-4 align-items-center my-4 ">
        <h3 style={{ color: "#179C6C", fontSize: "30px" }}>عربة التسوق</h3>
        <IoCartOutline size={45} color="#179C6C" />
      </div>
      <Container>
        <div className="wrapper-cart">
          <div className="cart-text">
            <h1 className="cart-title">عسل حبة البركة ١٠٠٠ جم</h1>
            <h5 className="cart-price">السعر : 180ج.م</h5>
            <div className="cart-btns">
              <button className="btn btn-primary" style={{backgroundColor:"#179C6C"}}>تأكيد الطلب</button>
              <button className="btn btn-info" style={{backgroundColor:"#DA9D00"}}>إلغاء</button>
            </div>
          </div>
          <div className="cart-items">
            <Card className="card">
              <Card.Img
                className="card_img"
                src="oilImages/زيت حبة البركه2.jpg"
              />
              <Card.Title style={{ width: "80%", margin: "5px auto" }}>
                عسل حبة البركة ١٠٠٠ جم
              </Card.Title>
              <div className="card_btn">
                <div style={{ display: "flex", gap: "10px" }}>
                  <FaCartArrowDown size={20} className="c-pointer" />
                  <FaHeart size={20} className="c-pointer" />
                </div>
                <b style={{ color: "black" }}>180ج.م</b>
              </div>
            </Card>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Cart;

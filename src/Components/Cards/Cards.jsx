import { Fragment } from "react";
import "./cards.css";
// import { Row, Col, Container } from "react-bootstrap";
function Cards() {
  return (
    <Fragment>
      <div className="container">
        <div className="box py-5">
          <div className="item">
            <h5>علاج الأمراض طبيعيا</h5>
            <img src="assets/box1.png" alt="" />
          </div>
          <div className="item">
            <h5>العلاج بالأعشاب</h5>
            <img src="assets/box2.png" alt="" />
          </div>
          <div className="item">
            <h5>العسل</h5>
            <img src="assets/box3.png" alt="" />
          </div>
          <div className="item">
            <h5>العلاج الطبيعي</h5>
            <img src="assets/box4.png" alt="" />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Cards;

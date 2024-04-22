import { Col, Container, Row } from "react-bootstrap";
import HeadLines from "./../headLine/HeadLines";
import { honeyData } from "./../../data/honeyData";
import { Link } from "react-router-dom";
function HoneyData() {
  return (
    <Container>
      <HeadLines title={" العسل"} />
      <Row>
        {honeyData.map((el) => {
          return (
            <Col sm={12} lg={4} md={6} key={el.id}>
              <Link
                style={{ textDecoration: "none", color: "#000" }}
                to={`/singleproductpage/${el.id}`}            >
                <div className="herbal-treatment" key={el.id}>
                  <img className="herbal-treat-image" src={el.Image} alt="" />
                  <p className="herbal-treat-title">{el.title}</p>
                </div>
              </Link>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default HoneyData;

{
  /* <Col sm={12} lg={4} md={6} key={el.id}>
                <Link
                  style={{ textDecoration: "none" , color:"#000" }}
                  to={`/singleproductpage/${el.id}`}
                >
                  <div className="treatment-dises" key={el.id}>
                    <img className="treating-dises-image" src={el.image} alt="" />
                    <p className="treating-dises-title">{el.title}</p>
                  </div>
                </Link>
              </Col> */
}

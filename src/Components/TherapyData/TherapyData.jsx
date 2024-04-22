import { therapyData } from "./../../data/therapyData";
import { Col, Container, Row } from "react-bootstrap";
import HeadLines from "./../headLine/HeadLines";
import "../HerbalData/herbalData.css";
import { Link } from "react-router-dom";
function TherapyData() {
  return (
    <div>
      <Container>
        <HeadLines title={"العلاج الطبيعي"} />
        <Row>
          {therapyData.map((el) => {
            return (
              <Col sm={12} lg={4} md={6} key={el.id}>
                <Link
                  style={{ textDecoration: "none", color: "#000" }}
                  to={`/singleproductpage/${el.id}`}
                >
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
    </div>
  );
}

export default TherapyData;

import { herbalTreatment } from "./../../data/herbalTreatment";
import { Col, Container, Row } from "react-bootstrap";
import "./herbalData.css";
import { Link } from "react-router-dom";
function HerbalData() {
  return (
    <Container>
      <Row>
        {herbalTreatment.map((el) => {
          return (
            <Col sm={12} lg={4} md={6} key={el.id}>
              <Link
                style={{ textDecoration: "none", color: "#000" }}
                to={`/singleproductpage/${el.id}`}
              >
                <div className="herbal-treatment" key={el.id}>
                  <img className="herbal-treat-image" src={el.image} alt="" />
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

export default HerbalData;

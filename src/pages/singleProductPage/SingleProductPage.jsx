import { useParams } from "react-router-dom";
// import { treatingDiseases } from "../../data/treatingDiseases";
// import { honeyData } from "./../../data/honeyData";
import "./singleProductPage.css";
import { Container } from "react-bootstrap";
import { herbalTreatment } from "../../data/herbalTreatment";
import { therapyData } from './../../data/therapyData';
import { honeyData } from "../../data/honeyData";
import { treatingDiseases } from './../../data/treatingDiseases';
function SingleProductPage() {
  const { id } = useParams();
  const product = herbalTreatment.find((p) => p.id === +id);
  const item = therapyData.find((p) => p.id === +id);
  const element = honeyData.find((p) => p.id === +id);
  const categorey = treatingDiseases.find((p) => p.id === +id);
  return (
    <>
    <section className="my-5">
      <Container>
        <h4 className="title">{product.title}</h4>
        <div className="single-product">
          <img src={product.image} alt="" />
          <div className="product-info">
            <p>{product.description}</p>
          </div>
        </div>
      </Container>
    </section>
    <section className="my-5">
      <Container>
        <h4 className="title">{item.title}</h4>
        <div className="single-product">
          <img src={item.Image} alt="" />
          <div className="product-info">
            <p>{item.description}</p>
          </div>
        </div>
      </Container>
    </section>
    <section className="my-5">
      <Container>
        <h4 className="title">{element.title}</h4>
        <div className="single-product">
          <img src={element.Image} alt="" />
          <div className="product-info">
            <p>{element.description}</p>
          </div>
        </div>
      </Container>
    </section>
    <section className="my-5">
      <Container>
        <h4 className="title">{categorey.title}</h4>
        <div className="single-product">
          <img src={categorey.image} alt="" />
          <div className="product-info">
            <p>{categorey.description}</p>
          </div>
        </div>
      </Container>
    </section>
    </>
  );
}

export default SingleProductPage;

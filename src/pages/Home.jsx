import Helmet from "../components/Helmet/Helmet.js";
import { Container, Row, Col } from "reactstrap";

import { Link } from "react-router-dom";

import "../styles/hero-section.css";

const Home = () => {
  return (
    <Helmet title="Home">
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content">
                <h4 className="mb-3">Hello Potchefstroom</h4>
                <h1 className="mb-4 hero__title">
                  <span>Order ready made meals now</span>
                </h1>

                <button className="order__btn d-flex align-items-center justify-content-between ">
                  <Link to="/meals">
                    Menu <i className="ri-arrow-right-s-line"></i>
                  </Link>
                </button>
              </div>
            </Col>

            <Col lg="6" md="6">
              {/* <div className="hero__img">
                <img src={guyImg} alt="delivery-guy" className="w-100" />
              </div> */}
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
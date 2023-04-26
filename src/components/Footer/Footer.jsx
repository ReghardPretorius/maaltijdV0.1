import { ListGroup } from "reactstrap";

import logo from "../../assets/images/logo2.png";

import "../../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__logo">
        <img src={logo} alt="logo" />
        {/* <h5>MyPizza</h5> */}
        <p>Order before 12h00 for next day delivery</p>
      </div>
      <div>
        <h5 className="footer__title mb-3">Deliveries</h5>
        <ListGroup>
          <div className="delivery__time-item border-0 ps-0">
            <span>Monday - Friday</span>
            <p>8:00am - 17:00pm</p>
          </div>
          <div className="delivery__time-item border-0 ps-0">
            <span>Saterday - Sunday</span>
            <p>Closed</p>
          </div>
        </ListGroup>
      </div>
    </footer>
  );
};

export default Footer;
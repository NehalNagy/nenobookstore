import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import banner1 from "../../images/banner1.jpeg";
import banner2 from "../../images/banner2.jpeg";
import banner3 from "../../images/banner3.jpeg";
import banner4 from "../../images/banner4.jpeg";

import classes from "./Footer.module.css";
function Footer() {
  return (
    <div className="container">
      <div className={classes.banners}>
        <Container>
          <Row className="mb-5">
            <Col xs={12} md={4}>
              <Image src={banner1} className="img-fluid" />
            </Col>
            <Col xs={12} md={4}>
              <Image src={banner2} className="img-fluid" />
            </Col>
            <Col xs={12} md={4}>
              <Image src={banner3} className="img-fluid" />
            </Col>
          </Row>
          <Row className="mb-5">
            <Col xs={12} md={12}>
              <Image src={banner4} className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </div>
      <div className={classes.footerContent}></div>
      <div className={classes.copyRight + " row"}>
        <div className="col-12 text-center p-2">
          Samir & Aly Libraries © 2022 All Rights Reserved
        </div>
      </div>
    </div>
  );
}
export default Footer;

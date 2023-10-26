import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import LeftBanner from "../../../images/BTS-en.png";
import RightBanner1 from "../../../images/montessory-en.png";
import RightBanner2 from "../../../images/babycare-en.png";
import classes from "./HomeTopSection.module.css";
function HomeTopSection() {
  return (
    <>
      <Container>
        <Row>
          <Col xs={12} md={7}>
            <Image src={LeftBanner} className="img-fluid mb-3" />
          </Col>
          <Col xs={12} md={5}>
            <Container>
              <Row>
                <Col xs={12} md={12}>
                  <Image src={RightBanner1} className="img-fluid mb-3" />
                </Col>
                <Col xs={12} md={12}>
                  <Image src={RightBanner2} className="img-fluid mb-3" />
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>

      <Container className={classes.policyContainer + " mt-3"}>
        <Row>
          <Col xs={6} md={3} className={classes.rightBorder + " mb-2"}>
            <h5>Exchange And Return Policy</h5>
            <p>You Can Refund Your Purchases Within 30 Days</p>
            <a title="" href="#">
              More
            </a>
          </Col>
          <Col xs={6} md={3} className={classes.rightBorder + " mb-2"}>
            <h5>Multiple Payment Methods</h5>
            <p>You Can Pay In More Than One Way Safely</p>
            <a title="" href="#">
              More
            </a>
          </Col>
          <Col xs={6} md={3} className={classes.rightBorder + " mb-2"}>
            <h5>Shipping And Delivery Policy</h5>
            <p>Shipping To All Provinces</p>
            <a title="" href="#">
              More
            </a>
          </Col>
          <Col xs={6} md={3} className={classes.rightBorder + " mb-2"}>
            <h5>Support All Days Of The Week</h5>
            <a title="" href="#">
              More
            </a>
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default HomeTopSection;

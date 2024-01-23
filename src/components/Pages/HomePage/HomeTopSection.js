import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import LeftBanner from "../../../images/BTS-en.png";
//import LeftBanner from "../../../images/Palestine.png";
import RightBanner1 from "../../../images/desk-set-en.png";
import RightBanner2 from "../../../images/parker-jotter-festive-season-en.png";
import classes from "./HomeTopSection.module.css";
function HomeTopSection() {
  return (
    <>
      <Container>
        <Row className="mb-5">
          <Col xs={12} md={7} className="p-0">
            <Image src={LeftBanner} className={classes.banners} />
          </Col>
          <Col xs={12} md={5} className="pe-0">
            <Container className="h-100">
              <Row className="h-100">
                <Col xs={12} className="pe-0 mb-2">
                  <Image
                    src={RightBanner1}
                    className={classes.banners + " h-100 float-end"}
                  />
                </Col>
                <Col xs={12} className="pe-0 mt-2">
                  <Image
                    src={RightBanner2}
                    className={classes.banners + " h-100 float-end"}
                  />
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>

      <Container className={classes.policyContainer + " mt-3"}>
        <Row>
          <Col xs={6} md={3} className={classes.policyItem + " mb-2"}>
            <h5>Exchange And Return Policy</h5>
            <p className="mb-5">You Can Refund Your Purchases Within 30 Days</p>
            <a href="/" className={classes.moreLinks}>
              More
            </a>
          </Col>
          <Col xs={6} md={3} className={classes.policyItem + " mb-2"}>
            <h5>Multiple Payment Methods</h5>
            <p className="mb-5">You Can Pay In More Than One Way Safely</p>
            <a href="/" className={classes.moreLinks}>
              More
            </a>
          </Col>
          <Col xs={6} md={3} className={classes.policyItem + " mb-2"}>
            <h5>Shipping And Delivery Policy</h5>
            <p className="mb-5">Shipping To All Provinces</p>
            <a href="/" className={classes.moreLinks}>
              More
            </a>
          </Col>
          <Col xs={6} md={3} className={classes.policyItem + " mb-2"}>
            <h5 className="mb-5">Support All Days Of The Week</h5>
            <a href="/" className={classes.moreLinks}>
              More
            </a>
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default HomeTopSection;

import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import banner1 from "../../../images/banner1.jpeg";
import banner2 from "../../../images/banner2.jpeg";
import banner3 from "../../../images/banner3.jpeg";
import banner4 from "../../../images/banner4.jpeg";
import SubscribeBanner from "../../../images/subscribe-banner.jpg";
import classes from "./BottomBanners.module.css";
function BottomBanners() {
  return (
    <Container>
      <Row className="mb-5">
        <Col xs={12} md={4}>
          <Image src={banner1} className={classes.bannerImages} />
        </Col>
        <Col xs={12} md={4}>
          <Image src={banner2} className={classes.bannerImages} />
        </Col>
        <Col xs={12} md={4}>
          <Image src={banner3} className={classes.bannerImages} />
        </Col>
      </Row>
      <Row className="mb-5">
        <Col xs={12} md={12}>
          <Image src={banner4} className={classes.bannerImages} />
        </Col>
      </Row>
      <Row className="mb-5">
        <Col xs={12} md={12}>
          <div className={classes.subscribeContainer}>
            <Image src={SubscribeBanner} className={classes.bannerImages} />
            <Form className={classes.subscribeForm}>
              <div className=" row mb-5 ">
                <div className="col-md-9">
                  <Form.Group controlId="formSearch">
                    <Form.Control
                      type="text"
                      placeholder="Enter Your E-mail Address..."
                      className="shadow-none"
                    />
                  </Form.Group>
                </div>
                <div className="col-md-3">
                  <Button type="submit" variant="dark">
                    Search
                  </Button>
                </div>
              </div>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
export default BottomBanners;

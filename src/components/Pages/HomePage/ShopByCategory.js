import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import CategoryArt from "../../../images/art.jpg";
import BannerGeneration from "../../../images/banner-generation.png";
function ShopByCategory() {
  return (
    <Container className="mt-3">
      <Row>
        <Col xs={3} md={2}>
          <Image src={CategoryArt} className="img-fluid mb-3" />
        </Col>
        <Col xs={3} md={2}>
          <Image src={CategoryArt} className="img-fluid mb-3" />
        </Col>
        <Col xs={3} md={2}>
          <Image src={CategoryArt} className="img-fluid mb-3" />
        </Col>
        <Col xs={3} md={2}>
          <Image src={CategoryArt} className="img-fluid mb-3" />
        </Col>
        <Col xs={3} md={2}>
          <Image src={CategoryArt} className="img-fluid mb-3" />
        </Col>
        <Col xs={3} md={2}>
          <Image src={CategoryArt} className="img-fluid mb-3" />
        </Col>
        <Col xs={3} md={2}>
          <Image src={CategoryArt} className="img-fluid mb-3" />
        </Col>
        <Col xs={3} md={2}>
          <Image src={CategoryArt} className="img-fluid mb-3" />
        </Col>
        <Col xs={3} md={2}>
          <Image src={CategoryArt} className="img-fluid mb-3" />
        </Col>
        <Col xs={3} md={2}>
          <Image src={CategoryArt} className="img-fluid mb-3" />
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={12}>
          <Image src={BannerGeneration} className="img-fluid mb-3" />
        </Col>
      </Row>
    </Container>
  );
}
export default ShopByCategory;

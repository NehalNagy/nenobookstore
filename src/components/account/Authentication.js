import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import loginImage from "../../images/login-image.jpg";

function Authentication() {
  return (
    <Container>
      <Row>
        <Col xs={12} md={6} className="p-0">
          <Image src={loginImage} className="img-fluid mb-3" />
        </Col>
        <Col xs={12} md={6} className="p-0"></Col>
      </Row>
    </Container>
  );
}

export default Authentication;

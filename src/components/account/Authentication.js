import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import loginImage from "../../images/login-image.jpg";
import { Form } from "react-router-dom";
import classes from "./Authentication.module.css";
function Authentication() {
  return (
    <Container fluid>
      <Row>
        <Col xs={12} md={6} className={classes.imageContainer + " p-0"}>
          <Image src={loginImage} className={classes.loginBanner} />
          <div className={classes.imageText}>
            <p>You have an account?</p>
            <h3 className="mb-3">Log in to your account</h3>
            <Button type="submit" className={classes.loginBtn}>
              Login
            </Button>
          </div>
        </Col>
        <Col xs={12} md={6} className="p-0">
          <Form></Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Authentication;

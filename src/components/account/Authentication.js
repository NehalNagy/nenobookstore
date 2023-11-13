import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import classes from "./Authentication.module.css";
import logo from "../../images/Logo_S_A.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faCartShopping } from "@fortawesome/free-solid-svg-icons";
function Authentication() {
  return (
    <Container fluid>
      <Row>
        <Col xs={12} md={6} className={classes.imageContainer + " p-0"}>
          {/* <Image src={loginImage} className={classes.loginBanner} /> */}
          <div className={classes.loginImage}></div>
          <div className={classes.imageText}>
            <p>You have an account?</p>
            <h3 className="mb-3">Log in to your account</h3>
            <Button type="submit" className={classes.loginBtn}>
              Login
            </Button>
          </div>
        </Col>
        <Col xs={12} md={6}>
          <div className={classes.loginWarapper}>
            <div className={classes.logo}>
              <img src={logo} alt="website logo" />
            </div>
            <h3>Create an Account</h3>
            <p> Create an account with</p>
            <Button
              type="submit"
              variant="dark"
              className={classes.addToCartBtn}
            >
              <FontAwesomeIcon icon={faCartShopping} /> Google
            </Button>
            <Button
              type="submit"
              variant="dark"
              className={classes.addToCartBtn}
            >
              <FontAwesomeIcon icon={faCartShopping} /> facebook
            </Button>
            <form></form>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Authentication;

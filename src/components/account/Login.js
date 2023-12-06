import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import classes from "./Authentication.module.css";
import logo from "../../images/Logo_S_A.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { Form } from "react-router-dom";
function Login() {
  return (
    <div className={classes.loginWarapper}>
      <div className={classes.logo + " mb-5"}>
        <img src={logo} alt="website logo" />
      </div>
      <h3>Login</h3>
      <p> Login with</p>
      <Button
        type="submit"
        className={classes.loginBySocialBtn + " " + classes.loginByFacebookBtn}
      >
        <FontAwesomeIcon icon={faFacebookF} className="pe-2" /> Sign in with
        Facebook
      </Button>
      <Button
        type="submit"
        className={classes.loginBySocialBtn + " " + classes.loginByGoogleBtn}
      >
        <FontAwesomeIcon icon={faGoogle} className="pe-2" /> Sign in with Google
      </Button>
      <p className={classes.or}>
        <span>OR</span>
      </p>
      <h5>Enter your email and password</h5>
      <Form method="post" className="mt-5">
        <Container className="p-0">
          <Row>
            <Col xs={12} md={12}>
              <div className="form-floating mb-3">
                <input
                  type="email"
                  className={classes.loginInput + " form-control"}
                  id="loginEmail"
                  name="email"
                  placeholder="name@example.com"
                />
                <label htmlFor="loginEmail">Email Address</label>
              </div>
            </Col>
            <Col xs={12} md={12}>
              <div className="form-floating">
                <input
                  type="password"
                  className={classes.loginInput + " form-control"}
                  id="loginPassword"
                  name="password"
                  placeholder="Password"
                />
                <label htmlFor="loginPassword">Password</label>
              </div>
            </Col>
          </Row>
          <Button
            type="submit"
            variant="dark"
            className={classes.loginBtn + " mt-3"}
          >
            Sign In
          </Button>
        </Container>
      </Form>
    </div>
  );
}
export default Login;

import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import classes from "./Authentication.module.css";
import logo from "../../images/Logo_S_A.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { Form } from "react-router-dom";
function NewAccount() {
  return (
    <div className={classes.loginWarapper}>
      <div className={classes.logo + " mb-5"}>
        <img src={logo} alt="website logo" />
      </div>
      <h3>Create an Account</h3>
      <p> Create an account with</p>
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
      <Form method="post">
        <Container>
          <Row>
            <Col xs={6} md={6}>
              <div class="form-floating mb-3">
                <input
                  type="text"
                  class={classes.loginInput + " form-control"}
                  id="firstName"
                  name="firstName"
                  placeholder="First Name"
                />
                <label for="firstName"> First Name</label>
              </div>
            </Col>
            <Col xs={6} md={6}>
              <div class="form-floating mb-3">
                <input
                  type="text"
                  class={classes.loginInput + " form-control"}
                  id="lastName"
                  name="lastName"
                  placeholder="Last Name"
                />
                <label for="lastName"> Last Name</label>
              </div>
            </Col>
            <Col xs={12} md={12}>
              <div class="form-floating mb-3">
                <input
                  type="email"
                  class={classes.loginInput + " form-control"}
                  id="email"
                  name="email"
                  placeholder="name@example.com"
                />
                <label for="email">Email address</label>
              </div>
            </Col>
            <Col xs={12} md={12}>
              <div class="form-floating">
                <input
                  type="password"
                  class={classes.loginInput + " form-control"}
                  id="password"
                  name="password"
                  placeholder="Password"
                />
                <label for="password">Password</label>
              </div>
            </Col>
            <Col xs={12} md={12} className="mt-3">
              <div class="form-floating">
                <input
                  type="password"
                  class={classes.loginInput + " form-control"}
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder="confirmPassword"
                />
                <label for="confirmPassword">Confirm Password</label>
              </div>
            </Col>
          </Row>
          <Button
            type="submit"
            variant="dark"
            className={classes.loginBtn + " mt-3"}
          >
            Create an account
          </Button>
        </Container>
      </Form>
    </div>
  );
}
export default NewAccount;

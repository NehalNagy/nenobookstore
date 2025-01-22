import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import classes from "./Authentication.module.css";
import logo from "../../images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { Form, useNavigation } from "react-router-dom";
function NewAccount() {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return (
    <div className={classes.loginWarapper}>
      <div className={classes.logo + " mb-2"}>
        <img src={logo} alt="website logo" />
      </div>
      <h3>Create an Account</h3>

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
              <div className="form-floating mb-2">
                <input
                  type="text"
                  className={classes.loginInput + " form-control"}
                  id="firstName"
                  name="firstName"
                  placeholder="First Name"
                />
                <label htmlFor="firstName"> First Name</label>
              </div>
            </Col>
            <Col xs={6} md={6}>
              <div className="form-floating mb-2">
                <input
                  type="text"
                  className={classes.loginInput + " form-control"}
                  id="lastName"
                  name="lastName"
                  placeholder="Last Name"
                />
                <label htmlFor="lastName"> Last Name</label>
              </div>
            </Col>
            <Col xs={12} md={12}>
              <div className="form-floating mb-2">
                <input
                  type="email"
                  className={classes.loginInput + " form-control"}
                  id="email"
                  name="email"
                  placeholder="name@example.com"
                />
                <label htmlFor="email">Email address</label>
              </div>
            </Col>
            <Col xs={12} md={12}>
              <div className="form-floating">
                <input
                  type="password"
                  className={classes.loginInput + " form-control"}
                  id="password"
                  name="password"
                  placeholder="Password"
                />
                <label htmlFor="password">Password</label>
              </div>
            </Col>
            <Col xs={12} md={12} className="mt-2">
              <div className="form-floating">
                <input
                  type="password"
                  className={classes.loginInput + " form-control"}
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder="confirmPassword"
                />
                <label htmlFor="confirmPassword">Confirm Password</label>
              </div>
            </Col>
          </Row>
          <Button
            type="submit"
            variant="dark"
            className={classes.loginBtn + " mt-2"}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Create an account"}
          </Button>
        </Container>
      </Form>
    </div>
  );
}
export default NewAccount;

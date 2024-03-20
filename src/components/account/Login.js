import { Form } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import classes from "./Authentication.module.css";
import logo from "../../images/Logo_S_A.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faGoogle } from "@fortawesome/free-brands-svg-icons";

import { isEmail, isNotEmpty, hasMinLength } from "../../util/validation.js";
import { useInput } from "../../hooks/useInput.js";
function Login() {
  const {
    value: emailValue,
    handleInputChange: handleEmailChange,
    handleInputBlur: handleEmailBlur,
    hasError: emailHasError,
  } = useInput("", (value) => isEmail(value) && isNotEmpty(value));
  const {
    value: passwordValue,
    handleInputChange: handlePasswordChange,
    handleInputBlur: handlePasswordBlur,
    hasError: passwordHasError,
  } = useInput("", (value) => hasMinLength(value, 6));

  function handleSubmit(event) {
    event.preventDefault();

    if (emailHasError || passwordHasError) {
      return;
    }
    console.log(emailValue, passwordValue);

    // event.form.dispatchEvent(
    //   new Event("submit", { cancelable: true, bubbles: true })
    // );
  }

  return (
    <div className={classes.loginWarapper}>
      <div className={classes.logo + " mb-2"}>
        <img src={logo} alt="website logo" />
      </div>
      <h3>Login</h3>

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
      <Form onSubmit={handleSubmit} method="post" className="mt-2">
        <Container className="p-0">
          <Row>
            <Col xs={12} md={12}>
              <div className="form-floating mb-2">
                <input
                  type="email"
                  className={classes.loginInput + " form-control"}
                  id="loginEmail"
                  name="email"
                  placeholder="name@example.com"
                  onBlur={handleEmailBlur}
                  onChange={handleEmailChange}
                />
                <label htmlFor="loginEmail">Email Address</label>
                <div className={classes.controlError}>
                  {emailHasError && <p>Please enter a valid email</p>}
                </div>
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
                  onBlur={handlePasswordBlur}
                  onChange={handlePasswordChange}
                />
                <label htmlFor="loginPassword">Password</label>
                <div className={classes.controlError}>
                  {passwordHasError && <p>Please enter a valid password</p>}
                </div>
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

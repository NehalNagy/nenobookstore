import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import classes from "./Authentication.module.css";
import NewAccount from "./NewAccount";
import Login from "./Login";
import { useState } from "react";
function Authentication() {
  const [signin, setSignin] = useState("signup"); // signup OR login

  function loginToggleHandler() {
    if (signin === "signup") {
      setSignin("login");
    } else setSignin("signup");
  }
  return (
    <Container fluid>
      <Row>
        <Col xs={12} md={6} className={classes.imageContainer + " p-0"}>
          <div className={classes.loginImage}></div>
          <div className={classes.imageText}>
            {signin === "signup" && (
              <div>
                <p>You have an account?</p>
                <h3 className="mb-3">Log in to your account</h3>
              </div>
            )}
            {signin === "login" && (
              <div>
                <p>You do not have an account?</p>
                <h3 className="mb-3">
                  Create your account now and enjoy many benefits
                </h3>
                <ul>
                  <li>Create your order faster</li>
                  <li>Track your order easily</li>
                  <li>Add different shipping addresses</li>
                </ul>
              </div>
            )}
            <Button
              type="submit"
              onClick={loginToggleHandler}
              className={classes.loginTogglerBtn}
            >
              {signin === "signup" ? "Login" : "Create an Account"}
            </Button>
          </div>
        </Col>
        <Col xs={12} md={6}>
          {signin === "signup" ? <NewAccount /> : <Login />}
        </Col>
      </Row>
    </Container>
  );
}

export default Authentication;

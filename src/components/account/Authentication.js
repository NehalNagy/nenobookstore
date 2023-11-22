import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import classes from "./Authentication.module.css";
import NewAccount from "./NewAccount";
import Login from "./Login";
import { Link, useSearchParams } from "react-router-dom";

function Authentication() {
  const [searchParams] = useSearchParams();
  const isLogin = searchParams.get("mode") === "login";

  return (
    <Container fluid>
      <Row>
        <Col xs={12} md={6} className={classes.imageContainer + " p-0"}>
          <div className={classes.loginImage}></div>
          <div className={classes.imageText}>
            {!isLogin && (
              <div>
                <p>You have an account?</p>
                <h3 className="mb-3">Log in to your account</h3>
              </div>
            )}
            {isLogin && (
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
            <Link
              to={`?mode=${isLogin ? "signup" : "login"}`}
              className={classes.loginTogglerBtn}
            >
              {isLogin ? "Create an Account" : "Login"}
            </Link>
          </div>
        </Col>
        <Col xs={12} md={6}>
          {isLogin ? <Login /> : <NewAccount />}
        </Col>
      </Row>
    </Container>
  );
}

export default Authentication;

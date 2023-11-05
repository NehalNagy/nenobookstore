import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { NavLink } from "react-router-dom";
import banner1 from "../../images/banner1.jpeg";
import banner2 from "../../images/banner2.jpeg";
import banner3 from "../../images/banner3.jpeg";
import banner4 from "../../images/banner4.jpeg";
import SubscribeBanner from "../../images/subscribe-banner.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faClock,
  faFacebookF,
  faTwitter,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-solid-svg-icons";

import classes from "./Footer.module.css";
function Footer() {
  return (
    <div className="container">
      <div className={classes.banners}>
        <Container>
          <Row className="mb-5">
            <Col xs={12} md={4}>
              <Image src={banner1} className="img-fluid" />
            </Col>
            <Col xs={12} md={4}>
              <Image src={banner2} className="img-fluid" />
            </Col>
            <Col xs={12} md={4}>
              <Image src={banner3} className="img-fluid" />
            </Col>
          </Row>
          <Row className="mb-5">
            <Col xs={12} md={12}>
              <Image src={banner4} className="img-fluid" />
            </Col>
          </Row>
          <Row className="mb-5">
            <Col xs={12} md={12}>
              <div className={classes.subscribeContainer}>
                <Image src={SubscribeBanner} className="img-fluid" />
                <Form className={classes.subscribeForm}>
                  <div className=" row mb-5 ">
                    <div className="col-md-9">
                      <Form.Group controlId="formSearch">
                        <Form.Control
                          type="text"
                          placeholder="Enter Your E-mail Address..."
                          className="shadow-none"
                        />
                      </Form.Group>
                    </div>
                    <div className="col-md-3">
                      <Button type="submit" variant="dark">
                        Search
                      </Button>
                    </div>
                  </div>
                </Form>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={3} md={3} className={classes.footerTitle}>
              <h5>
                <FontAwesomeIcon icon={faLocationDot} className="me-3" />
                Head Office
              </h5>
              <p className={classes.addresses}>
                64 Zaker Hussein Street - Naser City - Cairo
              </p>

              <h5>
                <FontAwesomeIcon icon={faClock} className="me-3" />
                Head Office Working Days
              </h5>
              <p className={classes.addresses}>
                Sunday - Thursday: 9:00 AM - 5:00 PM
              </p>
              <h5>
                <FontAwesomeIcon icon={faClock} className="me-3" />
                Branches Working Days
              </h5>
              <p className={classes.addresses}>
                Saturday - Thursday: 10:00 AM - 11:00 PM Friday: 2:00 PM - 11:00
                PM
              </p>

              <h5>
                <FontAwesomeIcon icon={faClock} className="me-3" />
                Except for the branches Obour-El Shorouk-El Rehab-
              </h5>
              <h5>
                <FontAwesomeIcon icon={faClock} className="me-3" />
                Waterway-Downtown
              </h5>
              <p className={classes.addresses}>
                Saturday - Friday: 10:00 AM - 12:00 PM
              </p>

              <h5>
                <FontAwesomeIcon icon={faLocationDot} className="me-3" />
                Abbasia-Sharif
              </h5>
              <p className={classes.addresses}>
                Saturday - Thursday: 10:00 AM - 10:00 PM Friday: 1:00 PM - 10:00
                PM
              </p>
            </Col>
            <Col xs={2} md={2} className={classes.footerTitle}>
              <h5>Shopping Categories</h5>
              <ul>
                <li>
                  <NavLink to="#" className={classes.footerLinks}>
                    Engineering
                  </NavLink>
                </li>
                <li>
                  <NavLink to="#" className={classes.footerLinks}>
                    Art
                  </NavLink>
                </li>
                <li>
                  <NavLink to="#" className={classes.footerLinks}>
                    School Products
                  </NavLink>
                </li>
                <li>
                  <NavLink to="#" className={classes.footerLinks}>
                    Office Tools
                  </NavLink>
                </li>
                <li>
                  <NavLink to="#" className={classes.footerLinks}>
                    Paper
                  </NavLink>
                </li>
                <li>
                  <NavLink to="#" className={classes.footerLinks}>
                    Home Supplies
                  </NavLink>
                </li>
                <li>
                  <NavLink to="#" className={classes.footerLinks}>
                    Camping Tools
                  </NavLink>
                </li>
                <li>
                  <NavLink to="#" className={classes.footerLinks}>
                    fitness
                  </NavLink>
                </li>
              </ul>
            </Col>
            <Col xs={2} md={2} className={classes.footerTitle}>
              <h5>About Company</h5>
              <ul>
                <li>
                  <NavLink to="#" className={classes.footerLinks}>
                    Branches
                  </NavLink>
                </li>
                <li>
                  <NavLink to="#" className={classes.footerLinks}>
                    About Company
                  </NavLink>
                </li>
                <li>
                  <NavLink to="#" className={classes.footerLinks}>
                    Contact us
                  </NavLink>
                </li>
                <li>
                  <NavLink to="#" className={classes.footerLinks}>
                    Jobs
                  </NavLink>
                </li>
              </ul>
            </Col>
            <Col xs={2} md={2} className={classes.footerTitle}>
              <h5>More</h5>
              <ul>
                <li>
                  <NavLink to="#" className={classes.footerLinks}>
                    Exchange and Return Policy
                  </NavLink>
                </li>
                <li>
                  <NavLink to="#" className={classes.footerLinks}>
                    Shipping and Delivery
                  </NavLink>
                </li>
                <li>
                  <NavLink to="#" className={classes.footerLinks}>
                    Payment Methods
                  </NavLink>
                </li>
              </ul>
            </Col>
            <Col xs={2} md={2} className={classes.footerTitle}>
              <h5>Social Media</h5>
              <FontAwesomeIcon icon={faFacebookF} />
              <FontAwesomeIcon icon={faTwitter} />
              <FontAwesomeIcon icon={faInstagram} />
              <FontAwesomeIcon icon={faYoutube} />
            </Col>
          </Row>
        </Container>
      </div>
      <div className={classes.footerContent}></div>
      <div className={classes.copyRight + " row"}>
        <div className="col-12 text-center p-2">
          Samir & Aly Libraries © 2022 All Rights Reserved
        </div>
      </div>
    </div>
  );
}
export default Footer;

import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

import Row from "react-bootstrap/Row";

import { NavLink } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faClock } from "@fortawesome/free-solid-svg-icons";

import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import classes from "./Footer.module.css";
function Footer() {
  return (
    <Container>
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
            Saturday - Thursday: 10:00 AM - 11:00 PM Friday: 2:00 PM - 11:00 PM
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
            Saturday - Thursday: 10:00 AM - 10:00 PM Friday: 1:00 PM - 10:00 PM
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
          <NavLink to="#" className={classes.footerLinks}>
            <FontAwesomeIcon
              icon={faFacebookF}
              className={classes.socialLinks + " pe-3"}
            />
          </NavLink>
          <NavLink to="#" className={classes.footerLinks}>
            <FontAwesomeIcon
              icon={faTwitter}
              className={classes.socialLinks + " pe-3"}
            />
          </NavLink>
          <NavLink to="#" className={classes.footerLinks}>
            <FontAwesomeIcon
              icon={faInstagram}
              className={classes.socialLinks + " pe-3"}
            />
          </NavLink>
          <NavLink to="#" className={classes.footerLinks}>
            <FontAwesomeIcon
              icon={faYoutube}
              className={classes.socialLinks + " pe-3"}
            />
          </NavLink>
        </Col>
      </Row>
      <Row>
        <div className={classes.copyRight}>
          <div className="col-12 text-center p-2">
            Samir & Aly Libraries © 2022 All Rights Reserved
          </div>
        </div>
      </Row>
    </Container>
  );
}
export default Footer;

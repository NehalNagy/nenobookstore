import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import { NavLink } from "react-router-dom";
import CategoryGift from "../../../images/gifts.jpg";
import CategoryArt from "../../../images/art.jpg";
import CategorySchool from "../../../images/school-tools.jpg";
import CategoryEng from "../../../images/math-tools.jpg";
import CategoryPaper from "../../../images/printing-paper.jpg";
import CategoryOffice from "../../../images/office-tools.jpg";
import CategoryHome from "../../../images/food-tools.jpg";
import CategoryToys from "../../../images/toys.jpg";
import Categoryfitness from "../../../images/sport.jpg";
import CategoryCamping from "../../../images/camping.jpg";
import BannerGeneration from "../../../images/banner-generation.png";
import classes from "./ShopByCategory.module.css";

function ShopByCategory() {
  return (
    <>
      <Container className="mt-3">
        <h3 className="mt-5">Shop By Category</h3>
        <Row>
          <Col xs={4} md={2} className="text-center mb-4">
            <NavLink to="/products">
              <Image src={CategoryGift} className="img-fluid mb-3" />
            </NavLink>
            <NavLink to="/products" className={classes.categoryText}>
              Gifts
            </NavLink>
          </Col>
          <Col xs={4} md={2} className="text-center mb-4">
            <NavLink to="#">
              <Image src={CategoryArt} className="img-fluid mb-3" />
            </NavLink>
            <NavLink to="#" className={classes.categoryText}>
              Art
            </NavLink>
          </Col>
          <Col xs={4} md={2} className="text-center mb-4">
            <NavLink to="#">
              <Image src={CategorySchool} className="img-fluid mb-3" />
            </NavLink>
            <NavLink to="#" className={classes.categoryText}>
              School-Products
            </NavLink>
          </Col>
          <Col xs={4} md={2} className="text-center mb-4">
            <NavLink to="#">
              <Image src={CategoryEng} className="img-fluid mb-3" />
            </NavLink>
            <NavLink to="#" className={classes.categoryText}>
              Engineering
            </NavLink>
          </Col>
          <Col xs={4} md={2} className="text-center mb-4">
            <NavLink to="#">
              <Image src={CategoryPaper} className="img-fluid mb-3" />
            </NavLink>
            <NavLink to="#" className={classes.categoryText}>
              Paper
            </NavLink>
          </Col>
          <Col xs={4} md={2} className="text-center mb-4">
            <NavLink to="#">
              <Image src={CategoryOffice} className="img-fluid mb-3" />
            </NavLink>
            <NavLink to="#" className={classes.categoryText}>
              Office-tools
            </NavLink>
          </Col>
          <Col xs={4} md={2} className="text-center mb-4">
            <NavLink to="#">
              <Image src={CategoryHome} className="img-fluid mb-3" />
            </NavLink>
            <NavLink to="#" className={classes.categoryText}>
              Food-Supply
            </NavLink>
          </Col>
          <Col xs={4} md={2} className="text-center mb-4">
            <NavLink to="#">
              <Image src={CategoryToys} className="img-fluid mb-3" />
            </NavLink>
            <NavLink to="#" className={classes.categoryText}>
              Toys
            </NavLink>
          </Col>
          <Col xs={4} md={2} className="text-center mb-4">
            <NavLink to="#">
              <Image src={Categoryfitness} className="img-fluid mb-3" />
            </NavLink>
            <NavLink to="#" className={classes.categoryText}>
              Fitness
            </NavLink>
          </Col>
          <Col xs={4} md={2} className="text-center mb-4">
            <NavLink to="#">
              <Image src={CategoryCamping} className="img-fluid mb-3" />
            </NavLink>
            <NavLink to="#" className={classes.categoryText}>
              Camping Tools
            </NavLink>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={12}>
            <Image
              src={BannerGeneration}
              className={classes.banner + " mb-3"}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default ShopByCategory;

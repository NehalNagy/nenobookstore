import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { NavLink } from "react-router-dom";
import ItemCard from "./ItemCard";
import Row from "react-bootstrap/Row";
import classes from "./ShopByPromotion.module.css";
function ShopByCategory() {
  return (
    <>
      <Container className="mt-3">
        <Row>
          <h3 className="mt-5">Promotions</h3>
          <NavLink to="#" className={classes.NavLinkStyle + " mb-4"}>
            Browse All Offers
          </NavLink>
        </Row>
        <Row>
          <ItemCard />
        </Row>
      </Container>
    </>
  );
}
export default ShopByCategory;

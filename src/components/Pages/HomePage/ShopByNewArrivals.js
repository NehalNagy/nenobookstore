import Container from "react-bootstrap/Container";
import { NavLink } from "react-router-dom";
import ItemCard from "./ItemCard";
import Row from "react-bootstrap/Row";
import classes from "./ShopByPromotion.module.css";
function ShopByNewArrivals() {
  return (
    <>
      <Container className="mt-3 mb-5">
        <Row>
          <h3 className="mt-5">New Arrivals</h3>
          <NavLink to="#" className={classes.NavLinkStyle + " mb-4"}>
            Browse All New Arrivals
          </NavLink>
        </Row>
        <Row>
          <ItemCard numberOfCol={2} />
          <ItemCard numberOfCol={2} />
          <ItemCard numberOfCol={2} />
          <ItemCard numberOfCol={2} />
          <ItemCard numberOfCol={2} />
          <ItemCard numberOfCol={2} />
        </Row>
      </Container>
    </>
  );
}
export default ShopByNewArrivals;

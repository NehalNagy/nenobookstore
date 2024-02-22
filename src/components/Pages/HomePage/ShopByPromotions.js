import Container from "react-bootstrap/Container";
import { NavLink } from "react-router-dom";
import ItemCard from "./ItemCard";
import Row from "react-bootstrap/Row";
import classes from "./ShopByPromotion.module.css";
import { DUMMY_Products } from "../Products/dummy-products";
function ShopByPromotion() {
  const productsListPromotion = DUMMY_Products.map((product) => (
    <ItemCard key={product.id} numberOfCol={3} product={product} />
  ));
  return (
    <>
      <Container className="mt-3">
        <Row>
          <h3 className="mt-5">Promotions</h3>
          <NavLink to="#" className={classes.NavLinkStyle + " mb-4"}>
            Browse All Offers
          </NavLink>
        </Row>
        <Row>{productsListPromotion}</Row>
      </Container>
    </>
  );
}
export default ShopByPromotion;

import Container from "react-bootstrap/Container";
import { NavLink } from "react-router-dom";
import ItemCard from "./ItemCard";
import Row from "react-bootstrap/Row";
import classes from "./ShopByPromotion.module.css";
const DUMMY_Products_promotion = [
  {
    id: "pp1",
    name: "Sushi pp1",
    description: "Finest fish and veggies",
    price: 22.99,
    sku: "234jll",
    stockQuantity: 6,
    image: "abc",
    discountPercent: 30,
  },
  {
    id: "pp2",
    name: "Schnitzel pp2",
    description: "A german specialty!",
    price: 16.5,
    sku: "567mbn",
    stockQuantity: 6,
    image: "abc",
    discountPercent: 40,
  },
  {
    id: "pp3",
    name: "Barbecue Burger pp3",
    description: "American, raw, meaty",
    price: 12.99,
    sku: "876jkv",
    stockQuantity: 6,
    image: "abc",
    discountPercent: 20,
  },
  {
    id: "pp4",
    name: "Green Bowl pp4",
    description: "Healthy...and green...",
    price: 18.99,
    sku: "198ytr",
    stockQuantity: 6,
    image: "abc",
    discountPercent: 10,
  },
];
function ShopByPromotion() {
  const productsListPromotion = DUMMY_Products_promotion.map((product) => (
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

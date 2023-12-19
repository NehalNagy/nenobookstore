import Container from "react-bootstrap/Container";
import { NavLink } from "react-router-dom";
import ItemCard from "./ItemCard";
import Row from "react-bootstrap/Row";
import classes from "./ShopByPromotion.module.css";
const DUMMY_Products_NewArrivals = [
  {
    id: "pna1",
    name: "Sushi - pna1",
    description: "Finest fish and veggies - pna1",
    price: 22.99,
    sku: "234jll",
    stockQuantity: 6,
    image: "abc",
    discountPercent: 30,
  },
  {
    id: "pna2",
    name: "Schnitzel - pna2",
    description: "A german specialty! - pna2",
    price: 16.5,
    sku: "567mbn",
    stockQuantity: 6,
    image: "abc",
    discountPercent: 40,
  },
  {
    id: "pna3",
    name: "Barbecue Burger - pna3",
    description: "American, raw, meaty",
    price: 12.99,
    sku: "876jkv",
    stockQuantity: 6,
    image: "abc",
    discountPercent: 20,
  },
  {
    id: "pna4",
    name: "Green Bowl - pna4",
    description: "Healthy...and green...",
    price: 18.99,
    sku: "198ytr",
    stockQuantity: 6,
    image: "abc",
    discountPercent: 10,
  },
];
function ShopByNewArrivals() {
  const productsListNewArrivals = DUMMY_Products_NewArrivals.map((product) => (
    <ItemCard numberOfCol={3} product={product} />
  ));
  return (
    <>
      <Container className="mt-3 mb-5">
        <Row>
          <h3 className="mt-5">New Arrivals</h3>
          <NavLink to="#" className={classes.NavLinkStyle + " mb-4"}>
            Browse All New Arrivals
          </NavLink>
        </Row>
        <Row>{productsListNewArrivals}</Row>
      </Container>
    </>
  );
}
export default ShopByNewArrivals;

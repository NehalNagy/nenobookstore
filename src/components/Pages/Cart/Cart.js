import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";
import CartItemQuantityBtn from "./CartItemQuantityBtn";
function Cart() {
  return (
    <Container>
      <h3>
        Shopping Cart <span className={classes.titleSpan}>(4 products)</span>
      </h3>
      <Row className="mt-5">
        <Col md={8}>
          <table class="table ">
            <thead>
              <tr>
                <th scope="col">Product</th>
                <th className="text-center" scope="col">
                  Qty
                </th>
                <th className="text-center" scope="col">
                  Price
                </th>
              </tr>
            </thead>
            <tbody class="table-group-divider">
              <tr>
                <td>
                  <CartItem />
                </td>
                <td>
                  <CartItemQuantityBtn />
                </td>
                <th className="text-center">1,513.00ج.م</th>
              </tr>
              <tr>
                <td>
                  <CartItem />
                </td>
                <td>
                  <CartItemQuantityBtn />
                </td>
                <th className="text-center">1,513.00ج.م</th>
              </tr>
            </tbody>
          </table>
        </Col>
        <Col md={4} className={classes.checkoutPanel}>
          <h3 className="pt-3 pb-3">Shopping Cart Total</h3>
          <Row>
            <Col md={6}>
              <h5>Subtotal</h5>
            </Col>
            <Col md={6} className="text-end">
              <h5>3,394.00ج.م</h5>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <h5>Tax</h5>
            </Col>
            <Col md={6} className="text-end">
              <h5>0.00ج.م</h5>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
export default Cart;

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button } from "react-bootstrap";
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
        <Col md={4} className={classes.checkoutPanel + " ps-3 pe-3"}>
          <h3 className="pt-3 pb-3">Shopping Cart Total</h3>
          <Row>
            <Col md={6}>
              <h5>Subtotal</h5>
            </Col>
            <Col md={6} className="text-end">
              <h5>3,394.00ج.م</h5>
            </Col>
          </Row>
          <Row className={classes.horizontalLine}>
            <Col md={6}>
              <h5>Tax</h5>
            </Col>
            <Col md={6} className="text-end">
              <h5>0.00ج.م</h5>
            </Col>
          </Row>
          <Row className={classes.horizontalLine + " mt-4 mb-4"}>
            <Col md={6}>
              <h4>Order Total</h4>
            </Col>
            <Col md={6} className="text-end">
              <h5>3,394.00ج.م</h5>
            </Col>
          </Row>

          <h4>Apply Discount Code</h4>
          <input
            type="text"
            placeholder="Enter discount code"
            className={classes.discountCodeInput}
          />
          <Button type="button" variant="dark" className={classes.discountBtn}>
            Apply Discount
          </Button>
          <div className={classes.checkoutBtnWrapper}>
            <Button
              type="button"
              variant="dark"
              className={classes.checkoutBtn}
            >
              Proceed to Checkout
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
export default Cart;

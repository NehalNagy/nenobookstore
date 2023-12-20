import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";
function Cart() {
  return (
    <Container>
      <h3>
        Shopping Cart <span className={classes.titleSpan}>(4 products)</span>
      </h3>
      <Row className="mt-5">
        <Col md={8}>
          <table class="table table-sm">
            <thead>
              <tr>
                <th scope="col">Product</th>
                <th scope="col">Qty</th>
                <th scope="col">Price</th>
              </tr>
            </thead>
            <tbody class="table-group-divider">
              <tr>
                <td>
                 <CartItem/>
                </td>
                <td>5</td>
                <th>1,513.00ج.م</th>
              </tr>
              <tr>
                <td> <CartItem/></td>
                <td>3</td>
                <th>1,513.00ج.م</th>
              </tr>
            </tbody>
          </table>
        </Col>
        <Col md={4}>checkout</Col>
      </Row>
    </Container>
  );
}
export default Cart;

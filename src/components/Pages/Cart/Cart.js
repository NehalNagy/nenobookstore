import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
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
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
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

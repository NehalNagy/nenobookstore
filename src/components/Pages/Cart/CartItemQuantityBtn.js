import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import classes from "./CartItemQuantityBtn.module.css";
function CartItemQuantityBtn() {
  return (
    <form>
      <Row className={classes.quantityBtns + " justify-content-around"}>
        <Col md={3} sm={3} className={classes.quantityDecrement}>
          -
        </Col>
        <Col md={3} sm={3} className={classes.quantity}>
          <input
            type="number"
            class="form-control"
            value="2"
            className={classes.quantityInput}
          />
        </Col>
        <Col md={3} sm={3} className={classes.quantityIncrement}>
          +
        </Col>
      </Row>
    </form>
  );
}
export default CartItemQuantityBtn;

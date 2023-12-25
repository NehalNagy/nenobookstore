import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import classes from "./CartItemQuantityBtn.module.css";
function CartItemQuantityBtn() {
  return (
    <form>
      <Row className={classes.quantityBtns + " justify-content-between"}>
        <Col md={3} className={classes.quantityDecrement}>
          <button type="button" className={classes.quantityDecrementBtn}>
            -
          </button>
        </Col>
        <Col md={6} className={classes.quantity}>
          <input type="number" value="20" className={classes.quantityInput} />
        </Col>
        <Col md={3} className={classes.quantityIncrement}>
          <button type="button" className={classes.quantityIncrementBtn}>
            +
          </button>
        </Col>
      </Row>
    </form>
  );
}
export default CartItemQuantityBtn;

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import classes from "./CartItemQuantityBtn.module.css";
import { useContext } from "react";
import { CartContext } from "../../store/shopping-cart-context.jsx";
function CartItemQuantityBtn({ item }) {
  const { updateItemQuantity } = useContext(CartContext);
  return (
    <form>
      <Row className={classes.quantityBtns + " justify-content-between"}>
        <Col md={3} className={classes.quantityDecrement}>
          <button
            type="button"
            className={classes.quantityDecrementBtn}
            onClick={() => updateItemQuantity(item.id, -1)}
          >
            -
          </button>
        </Col>
        <Col md={6} className={classes.quantity}>
          <input
            type="number"
            value={item.quantity}
            className={classes.quantityInput}
          />
        </Col>
        <Col md={3} className={classes.quantityIncrement}>
          <button
            type="button"
            className={classes.quantityIncrementBtn}
            onClick={() => updateItemQuantity(item.id, 1)}
          >
            +
          </button>
        </Col>
      </Row>
    </form>
  );
}
export default CartItemQuantityBtn;

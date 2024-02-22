import { useContext } from "react";
import { CartContext } from "../../store/shopping-cart-context.jsx";
import Image from "react-bootstrap/Image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";

import classes from "./ShoppingCartPopover.module.css";
import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function ShoppingCartPopover() {
  const { items } = useContext(CartContext);
  return (
    <div className="container-fluid">
      {items.map((cartItem) => (
        <div className="row">
          <div className="col-md-2">
            <Image src={cartItem.image} className={classes.cartItemImage} />
          </div>
          <div className="col-md-5">
            <span className={classes.cartItemCode}>{cartItem.sku}</span>
            <p>
              {cartItem.name} <br /> No: {cartItem.sku}
            </p>
          </div>
          <div className="col-md-2">x {cartItem.quantity}</div>
          <div className="col-md-2">
            {cartItem.quantity * cartItem.price} LE
          </div>
          <div className="col-md-1">
            <FontAwesomeIcon icon={faTrashCan} />
          </div>
        </div>
      ))}

      <div className="row mt-5">
        <div className="col-6">
          <h5>Cart Subtotal</h5>
        </div>
        <div className="col-6 text-end">
          <h5>1500 LE</h5>
        </div>
      </div>

      <div className="row mt-3">
        <div className="col-6">
          <Button
            type="submit"
            variant="dark"
            className={classes.cartPopoverBtn}
          >
            Ckeckout
          </Button>
        </div>
        <div className="col-6">
          <NavLink to="/cart">
            <Button
              variant="outline-dark"
              className={classes.cartPopoverBtn}
              onClick={() => {
                document.getElementById("popoverId").style.display = "none";
              }}
            >
              Edit cart
            </Button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
export default ShoppingCartPopover;

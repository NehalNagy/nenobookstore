import Image from "react-bootstrap/Image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import CartItem from "../../../images/backpack.jpg";
import classes from "./ShoppingCartPopover.module.css";
import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function ShoppingCartPopover() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2">
          <Image src={CartItem} className={classes.cartItemImage} />
        </div>
        <div className="col-md-5">
          <span className={classes.cartItemCode}>6111501131100</span>
          <p>
            MUST KINDERGARTEN BACKPACK LITTLE FAIRY <br /> No: 84489
          </p>
        </div>
        <div className="col-md-2">x 1</div>
        <div className="col-md-2">1500 LE</div>
        <div className="col-md-1">
          <FontAwesomeIcon icon={faTrashCan} />
        </div>
      </div>
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
            <Button variant="outline-dark" className={classes.cartPopoverBtn} onClick={()=>{
            document.getElementById("popoverId").style.display= "none";}}>
              Edit cart
            </Button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
export default ShoppingCartPopover;

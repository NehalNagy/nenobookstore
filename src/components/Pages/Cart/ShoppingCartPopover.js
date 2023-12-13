import Image from "react-bootstrap/Image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import CartItem from "../../../images/backpack.jpg";
import classes from "./ShoppingCartPopover.module.css";

function ShoppingCartPopover() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2">
          <Image src={CartItem} className={classes.cartItemImage} />
        </div>
        <div className="col-md-4">
          <p>6111501131100</p>
          <p>MUST KINDERGARTEN BACKPACK LITTLE FAIRY No: 84489</p>
        </div>
        <div className="col-md-2">x 1</div>
        <div className="col-md-2">1500 LE</div>
        <div className="col-md-2">
          <FontAwesomeIcon icon={faTrashCan} />
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <h3>Cart Subtotal</h3>
        </div>
        <div className="col-6">1500 LE</div>
      </div>
    </div>
  );
}
export default ShoppingCartPopover;

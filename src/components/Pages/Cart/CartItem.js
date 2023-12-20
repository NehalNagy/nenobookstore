import Image from "react-bootstrap/Image";
// import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faHeart } from "@fortawesome/free-regular-svg-icons";
import CartItemImage from "../../../images/backpack.jpg";
import classes from "./CartItem.module.css";
function CartItem() {
  return (
    <div className="row mt-2">
      <div className="col-md-2">
        <Image src={CartItemImage} className={classes.cartItemImage} />
      </div>
      <div className="col-md-7">
        <span className={classes.cartItemCode}>6111501131100</span>
        <p className={classes.itemName}>
          MUST KINDERGARTEN BACKPACK LITTLE FAIRY <br /> No: 84489
        </p>
        <span className={classes.addToWishList}>
          <FontAwesomeIcon icon={faHeart} className="me-2" /> Add to Wishlist
        </span>
        <span className={classes.removeItem}>
          <FontAwesomeIcon icon={faTrashCan} className="ms-2 me-2" />
          Remove item
        </span>
      </div>
    </div>
  );
}
export default CartItem;

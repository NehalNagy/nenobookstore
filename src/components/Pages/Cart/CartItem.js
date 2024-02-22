import Image from "react-bootstrap/Image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faHeart } from "@fortawesome/free-regular-svg-icons";
import classes from "./CartItem.module.css";
function CartItem({ item }) {
  return (
    <div className="row">
      <div className="col-md-2 col-sm-2">
        <Image src={item.image} className={classes.cartItemImage} />
      </div>
      <div className="col-md-10 col-sm-5">
        <span className={classes.cartItemCode}>{item.sku}</span>
        <p className={classes.itemName}>
          {item.name} <br /> No: {item.sku}
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

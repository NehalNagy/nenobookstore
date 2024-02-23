import { useContext } from "react";
import { CartContext } from "../../store/shopping-cart-context.jsx";
import Image from "react-bootstrap/Image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faHeart } from "@fortawesome/free-regular-svg-icons";
import classes from "./CartItem.module.css";

function CartItem({ item }) {
  const { deleteItemFromCart } = useContext(CartContext);
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
        <button
          type="button"
          className={classes.removeItem}
          onClick={() => deleteItemFromCart(item.id)}
        >
          <FontAwesomeIcon icon={faTrashCan} className="ms-2 me-2" />
          Remove item
        </button>
      </div>
    </div>
  );
}
export default CartItem;

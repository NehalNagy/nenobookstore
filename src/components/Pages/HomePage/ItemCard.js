import { useContext } from "react";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";
import classes from "./ItemCard.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { CartContext } from "../../store/shopping-cart-context.jsx";

function ItemCard(props) {
  const { addItemToCart } = useContext(CartContext);
  return (
    <Col xs={4} md={props.numberOfCol} className="text-center mb-4">
      <div className={classes.itemImage}>
        {props.product.discountPercent > 0 && (
          <div className={classes.promotionSale}>
            Sale {props.product.discountPercent}%
          </div>
        )}
        <NavLink to="#">
          <Image src={props.product.image} className="img-fluid mb-3" />
          <span className={classes.wishlistIcon}>
            <FontAwesomeIcon icon={faHeart} />
          </span>
        </NavLink>
      </div>

      <div className={classes.ItemDetails + " mb-3"}>
        <div>
          <span className={classes.ItemCode}>{props.product.sku} </span>
        </div>
        <NavLink to="#" className={classes.ItemTitle}>
          {props.product.name}
        </NavLink>
        <div>
          <span className={classes.oldPrice}>{props.product.price}ج.م </span>
        </div>
        <div>
          <span className={classes.finalPrice}>414.00ج.م </span>
        </div>
      </div>
      <Button
        onClick={() => addItemToCart(props.product.id)}
        variant="dark"
        className={classes.addToCartBtn}
      >
        <FontAwesomeIcon icon={faCartShopping} /> Add to Cart
      </Button>
    </Col>
  );
}
export default ItemCard;

import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";
import classes from "./ItemCard.module.css";
import Stapler from "../../../images/promtion1.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faCartShopping } from "@fortawesome/free-solid-svg-icons";

function ItemCard() {
  return (
    <Col xs={4} md={2} className="text-center mb-4">
      <div className={classes.itemImage}>
        <div className={classes.promotionSale}>Sale 40%</div>
        <NavLink to="#">
          <Image src={Stapler} className="img-fluid mb-3" />
          <span className={classes.wishlistIcon}>
            <FontAwesomeIcon icon={faHeart} />
          </span>
        </NavLink>
      </div>

      <div className={classes.ItemDetails + " mb-3"}>
        <div>
          <span className={classes.ItemCode}>2500185391 </span>
        </div>
        <NavLink to="#" className={classes.ItemTitle}>
          Eagle-Heavy Dutty Stapler High capacty Stapling 100 sheet 23-15 8538
        </NavLink>
        <div>
          <span className={classes.oldPrice}>690.00ج.م </span>
        </div>
        <div>
          <span className={classes.finalPrice}>414.00ج.م </span>
        </div>
      </div>
      <Button type="submit" variant="dark" className={classes.addToCartBtn}>
        <FontAwesomeIcon icon={faCartShopping} /> Add to Cart
      </Button>
    </Col>
  );
}
export default ItemCard;

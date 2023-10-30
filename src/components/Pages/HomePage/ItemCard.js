import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import { NavLink } from "react-router-dom";
import classes from "./ItemCard.module.css";
import Stapler from "../../../images/promtion1.jpg";
function ItemCard() {
  return (
    <Col xs={4} md={2} className="text-center mb-4">
      <NavLink to="#">
        <Image src={Stapler} className="img-fluid mb-3" />
      </NavLink>
      <div className={classes.ItemDetails}><div>
        <span className="ItemCode">2500185391 </span>
      </div>
      <NavLink to="#" className={classes.ItemTitle}>
        Eagle-Heavy Dutty Stapler High capacty Stapling 100 sheet 23-15 8538
      </NavLink>
      <div>
        <span className="oldPrice">690.00ج.م </span>
      </div>
      <div>
        <span className="finalPrice">414.00ج.م </span>
      </div></div>
      
    </Col>
  );
}
export default ItemCard;

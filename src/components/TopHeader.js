import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faHeart,
  faUser,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../images/Logo_S_A.png";
import classes from "./TopHeader.module.css";

function TopHeader() {
  return (
    <header>
      <div className={classes.headerTop + " container-fluid "}>
        <div className="row align-items-center ">
          <div className=" col-md-4">
            <ul className="list-unstyled list-group list-group-horizontal ">
              <li className={classes.rightBorder}>
                <a href="#" className="p-3">
                  العربية
                </a>
              </li>
              <li>
                <FontAwesomeIcon icon={faLocationDot} />
                <a href="#" className="m-2">Branches</a>
              </li>
            </ul>
          </div>
          <div className={classes.logo + " col-md-4"}>
            <img src={logo} alt="website logo" />
          </div>
          <div className={classes.headerControls + " col-md-4"}>
            <ul className="list-unstyled list-group list-group-horizontal container">
              <li className="row">
                <span className="col-md-12 text-center">
                  <FontAwesomeIcon icon={faUser} />
                </span>
                <span className="col-md-12 text-center">
                  <a href="#">Create Account</a>
                </span>
              </li>
              <li className="row">
                <span className="col-md-12 text-center">
                  <FontAwesomeIcon icon={faCartShopping} />
                </span>
                <span className="col-md-12 text-center">
                  <a href="#">My Cart</a>
                </span>
              </li>
              <li className="row">
                <span className="col-md-12 text-center">
                  <FontAwesomeIcon icon={faHeart} />
                </span>
                <span className="col-md-12 text-center">
                  <a href="#">My Wishlist</a>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
    </header>
  );
}

export default TopHeader;

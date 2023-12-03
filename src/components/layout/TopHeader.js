import { Form, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faLocationDot,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { faUser, faHeart } from "@fortawesome/free-regular-svg-icons";
import logo from "../../images/Logo_S_A.png";
import classes from "./TopHeader.module.css";

function TopHeader() {
  return (
    <header>
      <div className={classes.headerTop + " container"}>
        <div className="row align-items-center ">
          <div className="col-md-4 col-sm-12 col-xs-12">
            <ul className="list-unstyled list-group list-group-horizontal ">
              <li className={classes.rightBorder}>
                <a href="/" className={classes.lang + " p-3"}>
                  العربية
                </a>
              </li>
              <li>
                <FontAwesomeIcon icon={faLocationDot} />
                <a href="/" className={classes.branches + " m-2"}>
                  Branches
                </a>
              </li>
            </ul>
          </div>
          <div className={classes.logo + " col-md-4 col-sm-3 col-sx-2"}>
            <img src={logo} alt="website logo" />
          </div>
          <div
            className={classes.headerControls + " col-md-4 col-sm-3 col-xs-2"}
          >
            <ul className="list-unstyled list-group list-group-horizontal container">
              <li className="row">
                <span className="col-md-12 text-center">
                  <FontAwesomeIcon icon={faUser} />
                </span>
                <span className="col-md-12 text-center d-none d-sm-block">
                  <NavLink to="/account?mode=signup">Create Account</NavLink>
                </span>
              </li>
              <li className="row">
                <span className="col-md-12 text-center">
                  <FontAwesomeIcon icon={faCartShopping} />
                </span>
                <span className="col-md-12 text-center d-none d-sm-block">
                  <a href="#">My Cart</a>
                </span>
              </li>
              <li className="row">
                <span className="col-md-12 text-center">
                  <FontAwesomeIcon icon={faHeart} />
                </span>
                <span className="col-md-12 text-center d-none d-sm-block">
                  <a href="#">My Wishlist</a>
                </span>
              </li>
              <li className="row">
                <span className="col-md-12 text-center">
                  <FontAwesomeIcon icon={faArrowRightFromBracket} />
                </span>
                <span className="col-md-12 text-center d-none d-sm-block">
                  <Form action="/logout" method="post">                  
                    <button className="btn btn-link">logout</button>
                  </Form>
                </span>
              </li>
            </ul>
          </div>

          {/* <div className="col-md-12 col-sm-3 col-xs-2">
            <MainNav />
          </div> */}
        </div>
      </div>
    </header>
  );
}

export default TopHeader;

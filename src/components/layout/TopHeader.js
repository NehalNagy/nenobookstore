import { useContext } from "react";
import { Form, NavLink, useRouteLoaderData } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faLocationDot,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { faUser, faHeart } from "@fortawesome/free-regular-svg-icons";
import logo from "../../images/logo.png";
import classes from "./TopHeader.module.css";
import { Popover, OverlayTrigger } from "react-bootstrap";
import ShoppingCartPopover from "../Pages/Cart/ShoppingCartPopover";
import { CartContext } from "../store/shopping-cart-context.jsx";

function TopHeader() {
  const token = useRouteLoaderData("root");
  const { items } = useContext(CartContext);
  const cartQuantity = items.length;
  const popover = (
    <Popover id="popoverId" className={classes.popoverContainer}>
      <Popover.Header as="h3">My Shopping Cart</Popover.Header>
      <Popover.Body>
        {cartQuantity > 0 ? (
          <ShoppingCartPopover />
        ) : (
          <p>You have no items in your shopping cart.</p>
        )}
      </Popover.Body>
    </Popover>
  );

  return (
    <header>
      <div className={classes.headerTop + " container"}>
        <div className="row align-items-center ">
          <div className="col-12 col-md-4 ">
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
          <div className={classes.logo + " col-6 col-md-4 text-center"}>
            <NavLink to="/">
              <img src={logo} alt="website logo" />
            </NavLink>
          </div>
          <div
            className={classes.headerControls + " col-6 col-md-4 "}
          >
            <ul className="list-unstyled list-group list-group-horizontal container justify-content-end">
              {!token && (
                <li className="row">
                  <span className="col-md-12 text-center">
                    <NavLink to="/account?mode=login">
                      <FontAwesomeIcon icon={faUser} />
                    </NavLink>
                  </span>
                  <span className="col-md-12 text-center d-none d-sm-block">
                    <NavLink to="/account?mode=login">Login</NavLink>
                  </span>
                </li>
              )}
              <OverlayTrigger
                trigger="click"
                placement="bottom"
                overlay={popover}
                rootClose={true}
              >
                <li className={classes.myCartBtn + " row"}>
                  <span className="col-md-12 text-center">
                    <FontAwesomeIcon
                      icon={faCartShopping}
                      className={classes.myCartText}
                    />

                    {cartQuantity > 0 && (
                      <span className={classes.cartBadge}>{cartQuantity}</span>
                    )}
                  </span>
                  <span className="col-md-12 text-center d-none d-sm-block">
                    <span className={classes.myCartText}>My Cart</span>
                  </span>
                </li>
              </OverlayTrigger>
              <li className="row">
                <span className="col-md-12 text-center">
                  <NavLink to="/">
                    <FontAwesomeIcon icon={faHeart} />
                  </NavLink>
                </span>
                <span className="col-md-12 text-center d-none d-sm-block">
                  <NavLink to="/">My Wishlist</NavLink>
                </span>
              </li>

              {token && (
                <li className="row">
                  <span className="col-md-12 text-center">
                    <NavLink to="/myaccount">
                      <FontAwesomeIcon icon={faUser} />
                    </NavLink>
                  </span>
                  <span className="col-md-12 text-center d-none d-sm-block">
                    <NavLink to="/myaccount">My Account</NavLink>
                  </span>
                </li>
              )}

              {token && (
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
              )}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export default TopHeader;

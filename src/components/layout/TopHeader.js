import { Form, NavLink, useRouteLoaderData } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faLocationDot,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { faUser, faHeart } from "@fortawesome/free-regular-svg-icons";
import logo from "../../images/Logo_S_A.png";
import classes from "./TopHeader.module.css";
import { Popover, OverlayTrigger } from "react-bootstrap";
import ShoppingCartPopover from "../Pages/Cart/ShoppingCartPopover";

const popover = (
  <Popover id="popoverId" className={classes.popoverContainer}>
    <Popover.Header as="h3">My Shopping Cart</Popover.Header>
    <Popover.Body>
      <ShoppingCartPopover />
    </Popover.Body>
  </Popover>
);

function TopHeader() {
  const token = useRouteLoaderData("root");

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
            <NavLink to="/">
              <img src={logo} alt="website logo" />
            </NavLink>
          </div>
          <div
            className={classes.headerControls + " col-md-4 col-sm-3 col-xs-2"}
          >
            <ul className="list-unstyled list-group list-group-horizontal container">
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

                    <span className={classes.cartBadge}> 2</span>
                  </span>
                  <span className="col-md-12 text-center d-none d-sm-block">
                    <span className={classes.myCartText}> Cart</span>
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
                  <NavLink to="/"> Wishlist</NavLink>
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

import { useState } from "react";
import { Outlet, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import classes from "./MyAccountLayout.module.css";
function MyAccountLayout() {
  // const [selectedItem, setSelectedItem] = useState(false);
  return (
    <div className="container">
      <div className="row mt-4">
        <div className="col-md-3">
          <ul className={classes.myAccountList + " p-0"}>
            <NavLink to="myaccount">
              <li className="row">
                <div className="col-8">My Account</div>
                <div className="col-3 text-end">
                  <FontAwesomeIcon icon={faChevronRight} />
                </div>
              </li>
            </NavLink>

            <NavLink to="myorders">
              <li className="row">
                <div className="col-8">My Orders</div>
                <div className="col-3 text-end">
                  <FontAwesomeIcon icon={faChevronRight} />
                </div>
              </li>
            </NavLink>

            <NavLink to="mywishlist">
              <li className="row">
                <div className="col-8">My Wishlist</div>
                <div className="col-3 text-end">
                  <FontAwesomeIcon icon={faChevronRight} />
                </div>
              </li>
            </NavLink>
            <NavLink to="addressbook">
              <li className="row">
                <div className="col-8">Address Book</div>
                <div className="col-3 text-end">
                  <FontAwesomeIcon icon={faChevronRight} />
                </div>
              </li>
            </NavLink>

            <NavLink to="myaccountinfo">
              <li className="row">
                <div className="col-8">Account Information</div>
                <div className="col-3 text-end">
                  <FontAwesomeIcon icon={faChevronRight} />
                </div>
              </li>
            </NavLink>
            <NavLink to="myproductreviews">
              <li className="row">
                <div className="col-8">My Product Reviews</div>
                <div className="col-3 text-end">
                  <FontAwesomeIcon icon={faChevronRight} />
                </div>
              </li>
            </NavLink>
            <NavLink to="newslettersub">
              <li className="row">
                <div className="col-8">Newsletter Subscriptions</div>
                <div className="col-3 text-end">
                  <FontAwesomeIcon icon={faChevronRight} />
                </div>
              </li>
            </NavLink>
            <NavLink to="compareproducts">
              <li className="row">
                <div className="col-8">Compare Products</div>
                <div className="col-3 text-end">
                  <FontAwesomeIcon icon={faChevronRight} />
                </div>
              </li>
            </NavLink>
          </ul>
        </div>
        <div className="col-md-9">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
export default MyAccountLayout;

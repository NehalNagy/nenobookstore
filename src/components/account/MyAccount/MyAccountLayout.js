import { Outlet, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import classes from "./MyAccountLayout.module.css";
import { useState } from "react";
function MyAccountLayout() {
  const [item1Active, setItem1Active] = useState(false);
  const [item2Active, setItem2Active] = useState(false);
  const [item3Active, setItem3Active] = useState(false);
  const [item4Active, setItem4Active] = useState(false);
  const [item5Active, setItem5Active] = useState(false);
  const [item6Active, setItem6Active] = useState(false);
  const [item7Active, setItem7Active] = useState(false);
  const [item8Active, setItem8Active] = useState(false);
  return (
    <div className="container">
      <div className="row mt-4">
        <div className="col-md-3">
          <ul className={classes.myAccountList + " p-0"}>
            <NavLink
              to="myaccount"
              className={({ isActive }) =>
                isActive ? setItem1Active(true) : setItem1Active(false)
              }
            >
              <li className="row">
                <div
                  className={
                    item1Active ? classes.activeLink + " col-8" : " col-8"
                  }
                >
                  My Account
                </div>
                {item1Active && (
                  <div className="col-3 text-end">
                    <FontAwesomeIcon icon={faChevronRight} />
                  </div>
                )}
              </li>
            </NavLink>

            <NavLink
              to="myorders"
              className={({ isActive }) =>
                isActive ? setItem2Active(true) : setItem2Active(false)
              }
            >
              <li className="row">
                <div
                  className={
                    item2Active ? classes.activeLink + " col-8" : " col-8"
                  }
                >
                  My Orders
                </div>
                {item2Active && (
                  <div className="col-3 text-end">
                    <FontAwesomeIcon icon={faChevronRight} />
                  </div>
                )}
              </li>
            </NavLink>

            <NavLink
              to="mywishlist"
              className={({ isActive }) =>
                isActive ? setItem3Active(true) : setItem3Active(false)
              }
            >
              <li className="row">
                <div
                  className={
                    item3Active ? classes.activeLink + " col-8" : " col-8"
                  }
                >
                  My Wishlist
                </div>
                {item3Active && (
                  <div className="col-3 text-end">
                    <FontAwesomeIcon icon={faChevronRight} />
                  </div>
                )}
              </li>
            </NavLink>
            <NavLink
              to="addressbook"
              className={({ isActive }) =>
                isActive ? setItem4Active(true) : setItem4Active(false)
              }
            >
              <li className="row">
                <div
                  className={
                    item4Active ? classes.activeLink + " col-8" : " col-8"
                  }
                >
                  Address Book
                </div>
                {item4Active && (
                  <div className="col-3 text-end">
                    <FontAwesomeIcon icon={faChevronRight} />
                  </div>
                )}
              </li>
            </NavLink>

            <NavLink
              to="myaccountinfo"
              className={({ isActive }) =>
                isActive ? setItem5Active(true) : setItem5Active(false)
              }
            >
              <li className="row">
                <div
                  className={
                    item5Active ? classes.activeLink + " col-8" : " col-8"
                  }
                >
                  Account Information
                </div>
                {item5Active && (
                  <div className="col-3 text-end">
                    <FontAwesomeIcon icon={faChevronRight} />
                  </div>
                )}
              </li>
            </NavLink>
            <NavLink
              to="myproductreviews"
              className={({ isActive }) =>
                isActive ? setItem6Active(true) : setItem6Active(false)
              }
            >
              <li className="row">
                <div
                  className={
                    item6Active ? classes.activeLink + " col-8" : " col-8"
                  }
                >
                  My Product Reviews
                </div>
                {item6Active && (
                  <div className="col-3 text-end">
                    <FontAwesomeIcon icon={faChevronRight} />
                  </div>
                )}
              </li>
            </NavLink>
            <NavLink
              to="newslettersub"
              className={({ isActive }) =>
                isActive ? setItem7Active(true) : setItem7Active(false)
              }
            >
              <li className="row">
                <div
                  className={
                    item7Active ? classes.activeLink + " col-8" : " col-8"
                  }
                >
                  Newsletter Subscriptions
                </div>
                {item7Active && (
                  <div className="col-3 text-end">
                    <FontAwesomeIcon icon={faChevronRight} />
                  </div>
                )}
              </li>
            </NavLink>
            <NavLink
              to="compareproducts"
              className={({ isActive }) =>
                isActive ? setItem8Active(true) : setItem8Active(false)
              }
            >
              <li className="row">
                <div
                  className={
                    item8Active ? classes.activeLink + " col-8" : " col-8"
                  }
                >
                  Compare Products
                </div>
                {item8Active && (
                  <div className="col-3 text-end">
                    <FontAwesomeIcon icon={faChevronRight} />
                  </div>
                )}
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

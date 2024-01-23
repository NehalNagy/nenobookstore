import { Outlet } from "react-router-dom";
import classes from "./MyAccountLayout.module.css";
import SideMenuItem from "./SideMenuItem";
function MyAccountLayout() {
  return (
    <div className="container">
      <div className="row mt-4">
        <div className="col-md-3">
          <ul className={classes.myAccountList + " p-0"}>
            <SideMenuItem navigateTo="myaccount" title="My Account" />
            <SideMenuItem navigateTo="myorders" title="My Orders" />
            <SideMenuItem navigateTo="mywishlist" title="My Wishlist" />
            <SideMenuItem navigateTo="addressbook" title="Address Book" />
            <SideMenuItem
              navigateTo="myaccountinfo"
              title="Account Information"
            />
            <SideMenuItem
              navigateTo="myproductreviews"
              title="My Product Reviews"
            />
            <SideMenuItem
              navigateTo="newslettersub"
              title="Newsletter Subscriptions"
            />
            <SideMenuItem
              navigateTo="compareproducts"
              title="Compare Products"
            />
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

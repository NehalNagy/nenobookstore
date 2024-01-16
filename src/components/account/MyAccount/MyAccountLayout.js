import { Outlet, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import classes from "./MyAccountLayout.module.css";
import { useState } from "react";
import SideMenuItem from "./SideMenuItem";
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

<SideMenuItem navigateTo="myaccount" title="My Account"/>
<SideMenuItem navigateTo="myorders" title="My Orders"/>
<SideMenuItem navigateTo="mywishlist" title="My Wishlist"/>         
<SideMenuItem navigateTo="addressbook" title="Address Book"/> 
<SideMenuItem navigateTo="myaccountinfo" title="Account Information"/>        
<SideMenuItem navigateTo="myproductreviews" title="My Product Reviews"/> 
<SideMenuItem navigateTo="newslettersub" title="Newsletter Subscriptions"/>       
<SideMenuItem navigateTo="compareproducts" title="Compare Products"/>         

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

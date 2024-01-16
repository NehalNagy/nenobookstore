import {  NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import classes from "./MyAccountLayout.module.css";
import { useState } from "react";

function SideMenuItem({navigateTo, title}){
    const [item1Active, setItem1Active] = useState(false);
    return(
    <NavLink
    to={navigateTo}
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
       {title}
      </div>
      {item1Active && (
        <div className="col-3 text-end">
          <FontAwesomeIcon icon={faChevronRight} />
        </div>
      )}
    </li>
  </NavLink>);
}
export default SideMenuItem;
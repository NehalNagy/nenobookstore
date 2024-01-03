import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import classes from "./MyAccount.module.css";
function MyAccount() {
  return (
    <div className="container">
      <div className="row mt-4">
        <div className="col-md-3">
          <ul className={classes.myAccountList +" p-0"}>
            <li className="row">
              <div className="col-7">My Account</div>
              <div className="col-4 text-end">
                <FontAwesomeIcon icon={faChevronRight} />
              </div>
            </li>

            <li className="row">
              <div className="col-7">My Orders</div>
              <div className="col-4 text-end">
                <FontAwesomeIcon icon={faChevronRight} />
              </div>
            </li>


            <li className="row">
              <div className="col-7">My Wishlist</div>
              <div className="col-4 text-end">
                <FontAwesomeIcon icon={faChevronRight} />
              </div>
            </li>
            <li className="row">
              <div className="col-7">Address Book</div>
              <div className="col-4 text-end">
                <FontAwesomeIcon icon={faChevronRight} />
              </div>
            </li>
            <li className="row">
              <div className="col-7">Account Information</div>
              <div className="col-4 text-end">
                <FontAwesomeIcon icon={faChevronRight} />
              </div>
            </li>
            <li className="row">
              <div className="col-7">My Product Reviews</div>
              <div className="col-4 text-end">
                <FontAwesomeIcon icon={faChevronRight} />
              </div>
            </li>
            <li className="row">
              <div className="col-7">Newsletter Subscriptions</div>
              <div className="col-4 text-end">
                <FontAwesomeIcon icon={faChevronRight} />
              </div>
            </li>
            <li className="row">
              <div className="col-7">Compare Products</div>
              <div className="col-4 text-end">
                <FontAwesomeIcon icon={faChevronRight} />
              </div>
            </li>
          </ul>
        </div>
        <div className="col-md-9">
          <h4>My Account</h4>
        </div>
      </div>
    </div>
  );
}
export default MyAccount;

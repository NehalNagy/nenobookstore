import ItemCard from "./HomePage/ItemCard";
import classes from "./pages.module.css";
function ItemsList() {
  return (
    <div className={classes.pageContentWrapper + " container"}>
      <div className="mb-5">carousel</div>
      <div className="row">
        <div className="col-md-2">filter</div>
        <div className="col-md-10">
          <div className="row mb-5">
            <div className="col-4">
              <strong>Gifts</strong>
              Items 1-12 of 713
            </div>
            <div className="col-4">sort filter</div>
          </div>
          <div className="row">
            <ItemCard numberOfCol={4} />
            <ItemCard numberOfCol={4} />
            <ItemCard numberOfCol={4} />
            <ItemCard numberOfCol={4} />
            <ItemCard numberOfCol={4} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default ItemsList;

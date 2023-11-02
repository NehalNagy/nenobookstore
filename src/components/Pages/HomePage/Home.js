import HomeTopSection from "./HomeTopSection";
import classes from "../pages.module.css";
import SearchStore from "./SearchStore";
import ShopByCategory from "./ShopByCategory";
import ShopByPromotions from "./ShopByPromotions";
import ShopByNewArrivals from "./ShopByNewArrivals";
function Home() {
  return (
    <div className={classes.pageContentWrapper}>
      <SearchStore />
      <HomeTopSection />
      <ShopByCategory />
      <ShopByPromotions />
      <ShopByNewArrivals />
    </div>
  );
}
export default Home;

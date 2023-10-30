import HomeTopSection from "./HomeTopSection";
import classes from "../pages.module.css";
import SearchStore from "./SearchStore";
import ShopByCategory from "./ShopByCategory";
import ShopByPromotions from "./ShopByPromotions"
function Home() {
  return (
    <div className={classes.pageContentWrapper}>
      <SearchStore />
      <HomeTopSection />
      <ShopByCategory />
      <ShopByPromotions/>
    </div>
  );
}
export default Home;

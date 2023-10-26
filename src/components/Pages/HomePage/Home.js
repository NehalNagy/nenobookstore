import HomeTopSection from "./HomeTopSection";
import classes from "../pages.module.css";
import SearchStore from "./SearchStore";
import ShopByCategory from "./ShopByCategory";
function Home() {
  return (
    <div className={classes.pageContentWrapper}>
      <SearchStore />
      <HomeTopSection />
      <ShopByCategory />
    </div>
  );
}
export default Home;

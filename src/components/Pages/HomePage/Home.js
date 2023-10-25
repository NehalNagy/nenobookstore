import HomeTopSection from "./HomeTopSection";
import classes from "../pages.module.css";
import SearchStore from "./SearchStore";
function Home() {
  return (
    <div className={classes.pageContentWrapper}>
      <SearchStore />
      <HomeTopSection />
    </div>
  );
}
export default Home;

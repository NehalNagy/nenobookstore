import HomeTopSection from "./HomeTopSection";
import classes from "../pages.module.css";
function Home() {
  return (
    <div className={classes.pageContentWrapper}>
      <HomeTopSection />
    </div>
  );
}
export default Home;

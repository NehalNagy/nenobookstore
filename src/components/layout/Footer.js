import classes from "./Footer.module.css";
function Footer() {
  return (
    <div className={classes.footerPosition + " container"}>
      <div className={classes.footerContent}></div>
      <div className={classes.copyRight + " row"}>
        <div className="col-12 text-center p-3">
          Samir & Aly Libraries © 2022 All Rights Reserved
        </div>
      </div>
    </div>
  );
}
export default Footer;

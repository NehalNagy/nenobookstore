import ItemCard from "./HomePage/ItemCard";
import Image from "react-bootstrap/Image";
import SubCategory from "../../images/bd.jpg";
import generalClasses from "./pages.module.css";
import classes from "./ItemsList.module.css";
import { register } from "swiper/element/bundle";
import { useRef, useEffect } from "react";

register();

function ItemsList() {
  const swiperElRef = useRef(null);

  return (
    <div className={generalClasses.pageContentWrapper + " container"}>
      <div className="m-5">
        <swiper-container
          ref={swiperElRef}
          slides-per-view="3"
          navigation="true"
          pagination="true"
          autoplay-delay="5000"
          loop="true"
          autoplay-disable-on-interaction="false"
          autoplay-reverse-direction="true"
        >
          <swiper-slide>
            <Image src={SubCategory} className={classes.swiperImages} />
          </swiper-slide>
          <swiper-slide>
            <Image src={SubCategory} className={classes.swiperImages} />
          </swiper-slide>
          <swiper-slide>
            <Image src={SubCategory} className={classes.swiperImages} />
          </swiper-slide>
          <swiper-slide>
            <Image src={SubCategory} className={classes.swiperImages} />
          </swiper-slide>
          <swiper-slide>
            <Image src={SubCategory} className={classes.swiperImages} />
          </swiper-slide>
          <swiper-slide>
            <Image src={SubCategory} className={classes.swiperImages} />
          </swiper-slide>
        </swiper-container>
      </div>
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

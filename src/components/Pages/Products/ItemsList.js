import ItemCard from "../HomePage/ItemCard";
import Image from "react-bootstrap/Image";
import SubCategory from "../../../images/bd.jpg";
import generalClasses from "../pages.module.css";
import classes from "./ItemsList.module.css";
import { register } from "swiper/element/bundle";
import { useRef } from "react";
import Accordion from "react-bootstrap/Accordion";
import Form from "react-bootstrap/Form";
import { DUMMY_Products } from "./dummy-products";
register();
function ItemsList() {
  const swiperElRef = useRef(null);
  const productsList = DUMMY_Products.map((product) => (
    <ItemCard numberOfCol={4} product={product} />
  ));
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
        <div className="col-md-3">
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <strong>Category</strong>
              </Accordion.Header>
              <Accordion.Body>
                <Form>
                  <div key="default-checkbox" className="mb-3">
                    <Form.Check
                      type="checkbox"
                      id="checkbox1"
                      label="subcategory 1"
                    />
                    <Form.Check
                      type="checkbox"
                      id="checkbox2"
                      label="subcategory 2"
                    />
                    <Form.Check
                      type="checkbox"
                      id="checkbox3"
                      label="subcategory 3"
                    />
                  </div>
                </Form>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                <strong>Brand</strong>
              </Accordion.Header>
              <Accordion.Body>
                <Form>
                  <div key="default-checkbox" className="mb-3">
                    <Form.Check
                      type="checkbox"
                      id="checkbox4"
                      label="brand 1"
                    />
                    <Form.Check
                      type="checkbox"
                      id="checkbox5"
                      label="brand 2"
                    />
                    <Form.Check
                      type="checkbox"
                      id="checkbox6"
                      label="brand 3"
                    />
                  </div>
                </Form>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
        <div className="col-md-9">
          <div className="row mb-5">
            <div className="col-4">
              <h5 className={classes.categoryName}>Gifts </h5>
              Items 1-12 of 713
            </div>
            <div className="col-4">sort filter</div>
          </div>
          <div className="row">{productsList}</div>
        </div>
      </div>
    </div>
  );
}
export default ItemsList;

import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Link, Route } from "react-router-dom";

export const CategoriesBar = () => {
  return (
    <div>
      <section className="hero">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="col-lg-3">
                <div className="hero__categories__all">
                  <i className="fa fa-bars" />
                  <span>Danh mục</span>
                </div>
              </div>
              <div className="hero__search col-lg-9">
                <div className="hero__search__form">
                  <form style={{ borderColor: 'red' }} action="#">
                    {/* <div className="hero__search__categories">
                      All Categories
                      <span className="arrow_carrot-down" />
                    </div> */}
                    <input type="text" placeholder="Bạn cần mua gì cho bé hôm nay?" />
                    <button type="submit" className="site-btn">
                      SEARCH
                    </button>
                  </form>
                </div>
                <div className="hero__search__phone">
                  <div className="hero__search__phone__icon">
                    <i className="fa fa-phone" />
                  </div>
                  <div className="hero__search__phone__text">
                    <h5>+65 11.188.888</h5>
                    <span>support 24/7 time</span>
                  </div>
                </div>
              </div>
              <div
                className="hero__item set-bg col-lg-12"
                style={{ backgroundImage: "url:(img/hero/banner.jpg)" }}
              >
                {/* <img src = "img/hero/banner.jpg"/> */}
                <div className="hero__text">
                  <span>A PET FAVORITE PLACE</span>
                  <h2>
                    Welcome to Our Pet Supply Shop <br />
                  </h2>
                  <p>Free Pickup and Delivery Available</p>
                  <a href="#" className="primary-btn">
                    SHOP NOW
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

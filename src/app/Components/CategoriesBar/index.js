import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Link, Route } from "react-router-dom";
import { Navbar } from 'react-bootstrap';

export const CategoriesBar = () => {
  return (
    <Navbar sticky = "top">

    {/* <div>
      <section className="hero"> */}
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
                <div className="hero__search__form col-lg-8">
                  <form style={{ borderColor: 'red' }} action="#">
                    {/* <div className="hero__search__categories">
                      All Categories
                      <span className="arrow_carrot-down" />
                    </div> */}
                    <input type="text" placeholder="Bạn cần mua gì?" />
                    <button type="submit" className="site-btn">
                      TÌM KIẾM
                    </button>
                  </form>
                </div>
                <div className="hero__search__phone col-lg-4">
                  <div className="hero__search__phone__icon">
                    <i className="fa fa-phone" />
                  </div>
                  <div className="hero__search__phone__text">
                    <h5>+65 11.188.888</h5>
                    <span>Hỗ trợ 24/7</span>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      {/* </section>
    </div> */}
    </Navbar>

  );
};

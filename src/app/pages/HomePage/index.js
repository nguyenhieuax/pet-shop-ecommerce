import React, { Component } from "react";

import "./index.css";
import { connect } from "react-redux";
import { Switch, Route, Link } from "react-router-dom";
import { selectors, actions } from "../services";

import { TopBar, ProductItem } from "../../Components";
class HomePage extends Component {
  componentDidMount() {
    this.props.getListProduct();
  }
  render() {
    return (
      <>
        <TopBar />

        <section className="hero">
          <div className="container">
            <div className="row">
              <div className="col-lg-3">
                <div className="hero__categories">
                  <div className="hero__categories__all">
                    <i className="fa fa-bars" />
                    <span>Danh mục </span>
                  </div>
                  <ul>
                    <li>
                      <a href="#">Shop cho chó</a>
                    </li>
                    <li>
                      <a href="#">Shop cho mèo</a>
                    </li>
                    <li>
                      <a href="#">Birds</a>
                    </li>
                    <li>
                      <a href="#">Fish and Aquatics</a>
                    </li>
                    <li>
                      <a href="#">Small Animal</a>
                    </li>
                    <li>
                      <a href="#">Reptiles</a>
                    </li>
                    {/* <li>
                        <a href="#"></a>
                      </li>
                      <li>
                        <a href="#">Fresh Onion</a>
                      </li>
                      <li>
                        <a href="#">Papayaya &amp; Crisps</a>
                      </li>
                      <li>
                        <a href="#">Oatmeal</a>
                      </li>
                      <li>
                        <a href="#">Fresh Bananas</a>
                      </li> */}
                  </ul>
                </div>
              </div>
              <div className="col-lg-9">
                <div className="hero__search">
                  <div className="hero__search__form">
                    <form action="#">
                      <div className="hero__search__categories">
                        All Categories
                        <span className="arrow_carrot-down" />
                      </div>
                      <input type="text" placeholder="What do yo u need?" />
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
                  className="hero__item set-bg"
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
        {/* Hero Section End */}
        {/* Categories Section Begin */}

        {/* Categories Section End */}
        {/* Featured Section Begin */}
        <section className="featured spad">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title">
                  <h2>Featured Product</h2>
                </div>
                <div className="featured__controls">
                  <ul>
                    <li className="active" data-filter="*">
                      All
                    </li>
                    <li data-filter=".oranges">Dogs</li>
                    <li data-filter=".fresh-meat">Cats</li>
                    <li data-filter=".vegetables">Birds</li>
                    <li data-filter=".fastfood">Fishs</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row featured__filter">
              <ProductItem
                url="/img/dog1.jpg"
                name="Chỗ ngủ cho chó"
                price="100$"
                id = "234"
              />
              <ProductItem
                url="/img/dogFood/1.jpg"
                name="Chỗ ngủ cho chó"
                price="100$"
                id = "456"
              />
              <ProductItem
                url="/img/dogFood/2.png"
                name="Chỗ ngủ cho chó"
                price="100$"
                id = "678"
              />
              <ProductItem
                url="/img/dogFood/3.png"
                name="Chỗ ngủ cho chó"
                price="100$"
                id = "678"

              />
              <ProductItem
                url="/img/dog1.jpg"
                name="Chỗ ngủ cho chó"
                price="100$"
                id = "678"

              />
              <ProductItem
                url="/img/dog1.jpg"
                name="Chỗ ngủ cho chó"
                price="100$"
                id = "678"

              />
              <ProductItem
                url="/img/dog1.jpg"
                name="Chỗ ngủ cho chó"
                price="100$"
                id = "678"

              />
              <ProductItem
                url="/img/dog1.jpg"
                name="Chỗ ngủ cho chó"
                price="100$"
                id = "678"

              />
            </div>
          </div>
        </section>
        {/* Featured Section End */}
        {/* Banner Begin */}
        <div className="banner">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-6">
                <div className="banner__pic">
                  <img src="img/fish1.png" alt />
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6">
                <div className="banner__pic">
                  <img src="img/mouse_1.png" alt />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Banner End */}
        {/* Latest Product Section Begin */}
        <section className="latest-product spad">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="latest-product__text">
                  <h4>Latest Products</h4>
                  <div className="latest-product__slider owl-carousel">
                    <div className="latest-prdouct__slider__item">
                      <a href="#" className="latest-product__item">
                        <div className="latest-product__item__pic">
                          <img src="img/latest-product/lp-1.jpg" alt />
                        </div>
                        <div className="latest-product__item__text">
                          <h6>Crab Pool Security</h6>
                          <span>$30.00</span>
                        </div>
                      </a>
                      <a href="#" className="latest-product__item">
                        <div className="latest-product__item__pic">
                          <img src="img/latest-product/lp-2.jpg" alt />
                        </div>
                        <div className="latest-product__item__text">
                          <h6>Crab Pool Security</h6>
                          <span>$30.00</span>
                        </div>
                      </a>
                      <a href="#" className="latest-product__item">
                        <div className="latest-product__item__pic">
                          <img src="img/latest-product/lp-3.jpg" alt />
                        </div>
                        <div className="latest-product__item__text">
                          <h6>Crab Pool Security</h6>
                          <span>$30.00</span>
                        </div>
                      </a>
                    </div>
                    <div className="latest-prdouct__slider__item">
                      <a href="#" className="latest-product__item">
                        <div className="latest-product__item__pic">
                          <img src="img/latest-product/lp-1.jpg" alt />
                        </div>
                        <div className="latest-product__item__text">
                          <h6>Crab Pool Security</h6>
                          <span>$30.00</span>
                        </div>
                      </a>
                      <a href="#" className="latest-product__item">
                        <div className="latest-product__item__pic">
                          <img src="img/latest-product/lp-2.jpg" alt />
                        </div>
                        <div className="latest-product__item__text">
                          <h6>Crab Pool Security</h6>
                          <span>$30.00</span>
                        </div>
                      </a>
                      <a href="#" className="latest-product__item">
                        <div className="latest-product__item__pic">
                          <img src="img/latest-product/lp-3.jpg" alt />
                        </div>
                        <div className="latest-product__item__text">
                          <h6>Crab Pool Security</h6>
                          <span>$30.00</span>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="latest-product__text">
                  <h4>Top Rated Products</h4>
                  <div className="latest-product__slider owl-carousel">
                    <div className="latest-prdouct__slider__item">
                      <a href="#" className="latest-product__item">
                        <div className="latest-product__item__pic">
                          <img src="img/latest-product/lp-1.jpg" alt />
                        </div>
                        <div className="latest-product__item__text">
                          <h6>Crab Pool Security</h6>
                          <span>$30.00</span>
                        </div>
                      </a>
                      <a href="#" className="latest-product__item">
                        <div className="latest-product__item__pic">
                          <img src="img/latest-product/lp-2.jpg" alt />
                        </div>
                        <div className="latest-product__item__text">
                          <h6>Crab Pool Security</h6>
                          <span>$30.00</span>
                        </div>
                      </a>
                      <a href="#" className="latest-product__item">
                        <div className="latest-product__item__pic">
                          <img src="img/latest-product/lp-3.jpg" alt />
                        </div>
                        <div className="latest-product__item__text">
                          <h6>Crab Pool Security</h6>
                          <span>$30.00</span>
                        </div>
                      </a>
                    </div>
                    <div className="latest-prdouct__slider__item">
                      <a href="#" className="latest-product__item">
                        <div className="latest-product__item__pic">
                          <img src="img/latest-product/lp-1.jpg" alt />
                        </div>
                        <div className="latest-product__item__text">
                          <h6>Crab Pool Security</h6>
                          <span>$30.00</span>
                        </div>
                      </a>
                      <a href="#" className="latest-product__item">
                        <div className="latest-product__item__pic">
                          <img src="img/latest-product/lp-2.jpg" alt />
                        </div>
                        <div className="latest-product__item__text">
                          <h6>Crab Pool Security</h6>
                          <span>$30.00</span>
                        </div>
                      </a>
                      <a href="#" className="latest-product__item">
                        <div className="latest-product__item__pic">
                          <img src="img/latest-product/lp-3.jpg" alt />
                        </div>
                        <div className="latest-product__item__text">
                          <h6>Crab Pool Security</h6>
                          <span>$30.00</span>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="latest-product__text">
                  <h4>Review Products</h4>
                  <div className="latest-product__slider owl-carousel">
                    <div className="latest-prdouct__slider__item">
                      <a href="#" className="latest-product__item">
                        <div className="latest-product__item__pic">
                          <img src="img/latest-product/lp-1.jpg" alt />
                        </div>
                        <div className="latest-product__item__text">
                          <h6>Crab Pool Security</h6>
                          <span>$30.00</span>
                        </div>
                      </a>
                      <a href="#" className="latest-product__item">
                        <div className="latest-product__item__pic">
                          <img src="img/latest-product/lp-2.jpg" alt />
                        </div>
                        <div className="latest-product__item__text">
                          <h6>Crab Pool Security</h6>
                          <span>$30.00</span>
                        </div>
                      </a>
                      <a href="#" className="latest-product__item">
                        <div className="latest-product__item__pic">
                          <img src="img/latest-product/lp-3.jpg" alt />
                        </div>
                        <div className="latest-product__item__text">
                          <h6>Crab Pool Security</h6>
                          <span>$30.00</span>
                        </div>
                      </a>
                    </div>
                    <div className="latest-prdouct__slider__item">
                      <a href="#" className="latest-product__item">
                        <div className="latest-product__item__pic">
                          <img src="img/latest-product/lp-1.jpg" alt />
                        </div>
                        <div className="latest-product__item__text">
                          <h6>Crab Pool Security</h6>
                          <span>$30.00</span>
                        </div>
                      </a>
                      <a href="#" className="latest-product__item">
                        <div className="latest-product__item__pic">
                          <img src="img/latest-product/lp-2.jpg" alt />
                        </div>
                        <div className="latest-product__item__text">
                          <h6>Crab Pool Security</h6>
                          <span>$30.00</span>
                        </div>
                      </a>
                      <a href="#" className="latest-product__item">
                        <div className="latest-product__item__pic">
                          <img src="img/latest-product/lp-3.jpg" alt />
                        </div>
                        <div className="latest-product__item__text">
                          <h6>Crab Pool Security</h6>
                          <span>$30.00</span>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Latest Product Section End */}
        {/* Blog Section Begin */}
        <section className="from-blog spad">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title from-blog__title">
                  <h2>From The Blog</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-6">
                <div className="blog__item">
                  <div className="blog__item__pic">
                    <img src="img/blog/1crop.jpg" alt />
                  </div>
                  <div className="blog__item__text">
                    <ul>
                      <li>
                        <i className="fa fa-calendar-o" /> May 4,2019
                      </li>
                      <li>
                        <i className="fa fa-comment-o" /> 5
                      </li>
                    </ul>
                    <h5>
                      <a href="#">
                        Is there an easy way to feed my dog a raw diet?
                      </a>
                    </h5>
                    <p>
                      Sed quia non numquam modi tempora indunt ut labore et
                      dolore magnam aliquam quaerat{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6">
                <div className="blog__item">
                  <div className="blog__item__pic">
                    <img src="img/blog/4crop.jpg" alt />
                  </div>
                  <div className="blog__item__text">
                    <ul>
                      <li>
                        <i className="fa fa-calendar-o" /> May 4,2019
                      </li>
                      <li>
                        <i className="fa fa-comment-o" /> 5
                      </li>
                    </ul>
                    <h5>
                      <a href="#">How To Give Pets Their Medication</a>
                    </h5>
                    <p>
                      Sed quia non numquam modi tempora indunt ut labore et
                      dolore magnam aliquam quaerat{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6">
                <div className="blog__item">
                  <div className="blog__item__pic">
                    <img src="img/blog/3crop.jpg" alt />
                  </div>
                  <div className="blog__item__text">
                    <ul>
                      <li>
                        <i className="fa fa-calendar-o" /> May 4,2019
                      </li>
                      <li>
                        <i className="fa fa-comment-o" /> 5
                      </li>
                    </ul>
                    <h5>
                      <a href="#">How can I manage my dog's weight?</a>
                    </h5>
                    <p>
                      Sed quia non numquam modi tempora indunt ut labore et
                      dolore magnam aliquam quaerat{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Blog Section End */}
        {/* Footer Section Begin */}
        <footer className="footer spad">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="footer__about">
                  <div className="footer__about__logo">
                    <Link to="/">
                      <img src="img/logo.png" alt />
                    </Link>
                  </div>
                  <ul>
                    <li>Address: 60-49 Road 11378 New York</li>
                    <li>Phone: +65 11.188.888</li>
                    <li>Email: hello@colorlib.com</li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-1">
                <div className="footer__widget">
                  <h6>Useful Links</h6>
                  <ul>
                    <li>
                      <a href="#">About Us</a>
                    </li>
                    <li>
                      <a href="#">About Our Shop</a>
                    </li>
                    <li>
                      <a href="#">Secure Shopping</a>
                    </li>
                    <li>
                      <a href="#">Delivery infomation</a>
                    </li>
                    <li>
                      <a href="#">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="#">Our Sitemap</a>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <a href="#">Who We Are</a>
                    </li>
                    <li>
                      <a href="#">Our Services</a>
                    </li>
                    <li>
                      <a href="#">Projects</a>
                    </li>
                    <li>
                      <a href="#">Contact</a>
                    </li>
                    <li>
                      <a href="#">Innovation</a>
                    </li>
                    <li>
                      <a href="#">Testimonials</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-md-12">
                <div className="footer__widget">
                  <h6>Join Our Newsletter Now</h6>
                  <p>
                    Get E-mail updates about our latest shop and special offers.
                  </p>
                  <form action="#">
                    <input type="text" placeholder="Enter your mail" />
                    <button type="submit" className="site-btn">
                      Subscribe
                    </button>
                  </form>
                  <div className="footer__widget__social">
                    <a href="#">
                      <i className="fa fa-facebook" />
                    </a>
                    <a href="#">
                      <i className="fa fa-instagram" />
                    </a>
                    <a href="#">
                      <i className="fa fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fa fa-pinterest" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  listProduct: selectors.getListProduct(state),
});

const mapDispatchToProps = (dispatch) => ({
  getListProduct: () => dispatch(actions.getListProduct()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

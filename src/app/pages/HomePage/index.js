import React, { Component } from "react";

import "./index.css";
import { Switch, Route, Link } from "react-router-dom";
import { icons } from "../../assets/icons";
import { images } from "../../assets/images";

import { Item } from "./item";
import { connect } from "react-redux";
import { selectors, actions } from "./services";

class HomePage extends Component {
  componentDidMount() {
    this.props.getListProduct();
  }
  render() {
    return (
      <>
        <header className="header">
          <div className="header__top">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <div className="header__top__left">
                    <ul>
                      <li>
                        <i className="fa fa-envelope" /> hello@colorlib.com
                      </li>
                      <li>Free Shipping for all Order of $99</li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="header__top__right">
                    <div className="header__top__right__social">
                      <a href="#">
                        <i className="fa fa-facebook" />
                      </a>
                      <a href="#">
                        <i className="fa fa-twitter" />
                      </a>
                      <a href="#">
                        <i className="fa fa-linkedin" />
                      </a>
                      <a href="#">
                        <i className="fa fa-pinterest-p" />
                      </a>
                    </div>
                    <div className="header__top__right__language">
                      <img src="img/language.png" alt />
                      <div>English</div>
                      <span className="arrow_carrot-down" />
                      <ul>
                        <li>
                          <a href="#">Spanis</a>
                        </li>
                        <li>
                          <a href="#">English</a>
                        </li>
                      </ul>
                    </div>
                    <div className="header__top__right__auth">
                      <a href="#">
                        <i className="fa fa-user" /> Login
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-3">
                <div className="header__logo">
                  <a href="./index.html">
                    {/* <span className="logo-4pet" bold>
                      All4pet
                    </span> */}
                    <img src="img/logo.png" alt />
                  </a>
                </div>
              </div>
              <div className="col-lg-6">
                <nav className="header__menu">
                  <ul>
                    <li className="active">
                      <a href="./index.html">Home</a>
                    </li>
                    <li>
                      <a href="./shop-grid.html">Shop</a>
                    </li>
                    <li>
                      <a href="#">Pages</a>
                      <ul className="header__menu__dropdown">
                        <li>
                          <a href="./shop-details.html">Shop Details</a>
                        </li>
                        <li>
                          <a href="./shoping-cart.html">Shoping Cart</a>
                        </li>
                        <li>
                          <a href="./checkout.html">Check Out</a>
                        </li>
                        <li>
                          <a href="./blog-details.html">Blog Details</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="./blog.html">Blog</a>
                    </li>
                    <li>
                      <a href="./contact.html">Contact</a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="col-lg-3">
                <div className="header__cart">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fa fa-heart" /> <span>1</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-shopping-bag" /> <span>3</span>
                      </a>
                    </li>
                  </ul>
                  <div className="header__cart__price">
                    item: <span>$150.00</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="humberger__open">
              <i className="fa fa-bars" />
            </div>
          </div>
        </header>

        <div>
          <section className="hero">
            <div className="container">
              <div className="row">
                <div className="col-lg-3">
                  <div className="hero__categories">
                    <div className="hero__categories__all">
                      <i className="fa fa-bars" />
                      <span>All departments</span>
                    </div>
                    <ul>
                      <li>
                        <a href="#"> Dogs</a>
                      </li>
                      <li>
                        <a href="#">Cats</a>
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
                <div className="col-lg-3 col-md-4 col-sm-6 mix oranges fresh-meat">
                  <div className="featured__item">
                    <div
                      className="featured__item__pic set-bg"
                      data-setbg="img/featured/feature-1.jpg"
                    >
                      <ul className="featured__item__pic__hover">
                        <li>
                          <a href="#">
                            <i className="fa fa-heart" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-retweet" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-shopping-cart" />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="featured__item__text">
                      <h6>
                        <a href="#">Crab Pool Security</a>
                      </h6>
                      <h5>$30.00</h5>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 mix vegetables fastfood">
                  <div className="featured__item">
                    <div
                      className="featured__item__pic set-bg"
                      data-setbg="img/featured/feature-2.jpg"
                    >
                      <ul className="featured__item__pic__hover">
                        <li>
                          <a href="#">
                            <i className="fa fa-heart" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-retweet" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-shopping-cart" />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="featured__item__text">
                      <h6>
                        <a href="#">Crab Pool Security</a>
                      </h6>
                      <h5>$30.00</h5>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 mix vegetables fresh-meat">
                  <div className="featured__item">
                    <div
                      className="featured__item__pic set-bg"
                      data-setbg="img/featured/feature-3.jpg"
                    >
                      <ul className="featured__item__pic__hover">
                        <li>
                          <a href="#">
                            <i className="fa fa-heart" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-retweet" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-shopping-cart" />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="featured__item__text">
                      <h6>
                        <a href="#">Crab Pool Security</a>
                      </h6>
                      <h5>$30.00</h5>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 mix fastfood oranges">
                  <div className="featured__item">
                    <div
                      className="featured__item__pic set-bg"
                      data-setbg="img/featured/feature-4.jpg"
                    >
                      <ul className="featured__item__pic__hover">
                        <li>
                          <a href="#">
                            <i className="fa fa-heart" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-retweet" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-shopping-cart" />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="featured__item__text">
                      <h6>
                        <a href="#">Crab Pool Security</a>
                      </h6>
                      <h5>$30.00</h5>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 mix fresh-meat vegetables">
                  <div className="featured__item">
                    <div
                      className="featured__item__pic set-bg"
                      data-setbg="img/featured/feature-5.jpg"
                    >
                      <ul className="featured__item__pic__hover">
                        <li>
                          <a href="#">
                            <i className="fa fa-heart" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-retweet" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-shopping-cart" />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="featured__item__text">
                      <h6>
                        <a href="#">Crab Pool Security</a>
                      </h6>
                      <h5>$30.00</h5>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 mix oranges fastfood">
                  <div className="featured__item">
                    <div
                      className="featured__item__pic set-bg"
                      data-setbg="img/featured/feature-6.jpg"
                    >
                      <ul className="featured__item__pic__hover">
                        <li>
                          <a href="#">
                            <i className="fa fa-heart" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-retweet" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-shopping-cart" />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="featured__item__text">
                      <h6>
                        <a href="#">Crab Pool Security</a>
                      </h6>
                      <h5>$30.00</h5>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 mix fresh-meat vegetables">
                  <div className="featured__item">
                    <div
                      className="featured__item__pic set-bg"
                      data-setbg="img/featured/feature-7.jpg"
                    >
                      <ul className="featured__item__pic__hover">
                        <li>
                          <a href="#">
                            <i className="fa fa-heart" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-retweet" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-shopping-cart" />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="featured__item__text">
                      <h6>
                        <a href="#">Crab Pool Security</a>
                      </h6>
                      <h5>$30.00</h5>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 mix fastfood vegetables">
                  <div className="featured__item">
                    <div
                      className="featured__item__pic set-bg"
                      data-setbg="img/featured/feature-8.jpg"
                    >
                      <ul className="featured__item__pic__hover">
                        <li>
                          <a href="#">
                            <i className="fa fa-heart" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-retweet" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-shopping-cart" />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="featured__item__text">
                      <h6>
                        <a href="#">Crab Pool Security</a>
                      </h6>
                      <h5>$30.00</h5>
                    </div>
                  </div>
                </div>
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
                        <a href="#">Is there an easy way to feed my dog a raw diet?</a>
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
                      <a href="./index.html">
                        <img src="img/logo.png" alt />
                      </a>
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
                      Get E-mail updates about our latest shop and special
                      offers.
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
        </div>
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

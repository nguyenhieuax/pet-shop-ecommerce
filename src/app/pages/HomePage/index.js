import React, { Component } from "react";

import "./index.css";
import { connect } from "react-redux";
import { Switch, Route, Link } from "react-router-dom";
import { selectors, actions } from "../services";

import { TopBar, ProductItem, CategoriesBar } from "../../Components";
import { act } from "react-dom/test-utils";
class HomePage extends Component {
  componentDidMount() {
    this.props.getListProduct();
    // this.props.getTopProduct();

    console.log('homepage props ====', this.props);
  }

  renderProductItem = (item, history) => {
    return (
      <ProductItem
       url= {`${item.url}`}
       name={item.name}
       price={item.price}
       id = {item.id}
       history = {history}
       key = {item.id}
      />

    
    )
  }

  render() {
    const { listProduct, history } = this.props;
    const dogProduct = listProduct && listProduct.length ? listProduct[2].listProducts : [];
    console.log('dog product =========================>', dogProduct);

    return (
      <>
        <TopBar />
        <CategoriesBar/>
        
        {/* Hero Section End */}
        {/* Categories Section Begin */}

        {/* Categories Section End */}
        {/* Featured Section Begin */}
        <section className="featured spad">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title">
                  <h2>Sản phẩm nổi bật</h2>
                </div>
                {/* <div className="featured__controls">
                  <ul>
                    <li className="active" data-filter="*">
                      All
                    </li>
                    <li data-filter=".oranges">Dogs</li>
                    <li data-filter=".fresh-meat">Cats</li>
                    <li data-filter=".vegetables">Birds</li>
                    <li data-filter=".fastfood">Fishs</li>
                  </ul>
                </div> */}
              </div>
            </div>
            <div className="row featured__filter">
              <ProductItem
                url="/img/dog1.jpg"
                name="Chỗ ngủ cho chó"
                price="100$"
                id = "234"
                history = {history}
              />
              <ProductItem
                url="/img/dogFood/1.jpg"
                name="Chỗ ngủ cho chó"
                price="100$"
                id = "456"
                history = {history}

              />
              <ProductItem
                url="/img/dogFood/2.png"
                name="Chỗ ngủ cho chó"
                price="100$"
                id = "678"
                history = {history}

              />
              <ProductItem
                url="/img/dogFood/3.png"
                name="Chỗ ngủ cho chó"
                price="100$"
                id = "678"
                history = {history}

              />
              <ProductItem
                url="/img/dog1.jpg"
                name="Chỗ ngủ cho chó"
                price="100$"
                id = "678"
                history = {history}


              />
              <ProductItem
                url="/img/dog1.jpg"
                name="Chỗ ngủ cho chó"
                price="100$"
                id = "678"
                history = {history}


              />
             
            </div>
          </div>
        </section>

        <section className="featured spad">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title">
                  <h2>Sản phẩm cho chó</h2>
                </div>
                {/* <div className="featured__controls">
                  <ul>
                    <li className="active" data-filter="*">
                      All
                    </li>
                    <li data-filter=".oranges">Dogs</li>
                    <li data-filter=".fresh-meat">Cats</li>
                    <li data-filter=".vegetables">Birds</li>
                    <li data-filter=".fastfood">Fishs</li>
                  </ul>
                </div> */}
              </div>
            </div>
            <div className="row featured__filter">
             {dogProduct.length ? dogProduct.map((item, index) =>console.log('index', index)) : null}
            
            </div>
          </div>
        </section>

        <section className="featured spad">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title">
                  <h2>Sản phẩm cho mèo</h2>
                </div>
                {/* <div className="featured__controls">
                  <ul>
                    <li className="active" data-filter="*">
                      All
                    </li>
                    <li data-filter=".oranges">Dogs</li>
                    <li data-filter=".fresh-meat">Cats</li>
                    <li data-filter=".vegetables">Birds</li>
                    <li data-filter=".fastfood">Fishs</li>
                  </ul>
                </div> */}
              </div>
            </div>
            <div className="row featured__filter">
              <ProductItem
                url="/img/dog1.jpg"
                name="Chỗ ngủ cho chó"
                price="100$"
                id = "234"
                history = {history}
              />
              <ProductItem
                url="/img/dogFood/1.jpg"
                name="Chỗ ngủ cho chó"
                price="100$"
                id = "456"
                history = {history}

              />
              <ProductItem
                url="/img/dogFood/2.png"
                name="Chỗ ngủ cho chó"
                price="100$"
                id = "678"
                history = {history}

              />
              <ProductItem
                url="/img/dogFood/3.png"
                name="Chỗ ngủ cho chó"
                price="100$"
                id = "678"
                history = {history}

              />
            
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
                    <img alt = "crop-product" src="img/blog/1crop.jpg"  />
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
                    <img  alt = "crop-item" src="img/blog/4crop.jpg"  />
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
                    <img alt = "crop-item" src="img/blog/3crop.jpg"  />
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
                      <img alt = "logo-allforpet" src="img/logo.png"  />
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
  getTopProduct: () => dispatch(actions.getTopProduct())
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

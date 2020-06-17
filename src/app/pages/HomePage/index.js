import React, { Component } from "react";

import "./index.css";
import { connect } from "react-redux";
import { Switch, Route, Link } from "react-router-dom";
import { selectors, actions } from "../services";
import useWindowDimensions from '../../utils/useWindowDimensions'
import { TopBar, ProductItem, CategoriesItem, Loader, Footer } from "../../Components";
class HomePage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      width: 0,
      height: 0,
      listStorageItem: JSON.parse(localStorage.getItem('ValueInLocalStorage3')) || []
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.props.getListProduct();
    this.props.getTopProduct();
    // this.props.showCart({});

    console.log('homepage props ====', this.props);

  }


  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  };

  addToCart = (item) => {
    const { listStorageItem } = this.state;
    console.log('onclick button add to cart ---------------')
    let buyItem = { productEntity: item, quantity: 1 }

    let mergeListStorage = listStorageItem.map(product => product.productEntity.id === item.id ?  {
      productEntity: product.productEntity,
      quantity: product.quantity+=1
    } : product) || [];

    let itemExist  = listStorageItem.find(product=> product.productEntity.id === item.id) || null;

    let _listStorageItem = itemExist === null ? listStorageItem.concat(buyItem) : mergeListStorage;
    console.log('storage item =================', _listStorageItem)
    localStorage.setItem('ValueInLocalStorage3', JSON.stringify(_listStorageItem));
    this.setState({ listStorageItem: _listStorageItem });
  }

  renderProductItem = (item) => {
    const { history } = this.props;
    return (
      <ProductItem
        url={`${item.url}`}
        name={item.name}
        price={item.price}
        id={item.id}
        history={history}
        key={`${item.id}`}
        addToCart={() => this.addToCart(item)}
      />
    )
  }

  render() {
    const { listProduct, history, topProduct } = this.props;
    const dogProduct = listProduct && listProduct.length ? listProduct[2].listProducts : [];
    const catProduct = listProduct && listProduct.length ? listProduct[1].listProducts : [];
    const topProductDog = topProduct && topProduct.length ? topProduct[0].listProducts : [];
    const topProductCat = topProduct && topProduct.length ? topProduct[1].listProducts : [];

    // console.log('dog product =========================>', dogProduct);

    return (
      <> {
        listProduct && listProduct.length ? <>   <TopBar history={history}
        />
          <CategoriesItem />

          {/* Hero Section End */}
          {/* Categories Section Begin */}

          {/* Categories Section End */}
          {/* Featured Section Begin */}
          <div className="container">

            <div className="col-lg-12">

              <div
                className="hero__item set-bg col-lg-12"
                style={{ backgroundImage: "url:(img/hero/banner.jpg)" }}
              >
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
                {topProductDog.map(item => this.renderProductItem(item))}

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
                {dogProduct.length ? dogProduct.map((item, index) => index < 12 ? this.renderProductItem(item) : null) : null}

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
                {catProduct.length ? catProduct.map((item, index) => index < 12 ? this.renderProductItem(item) : null) : null}


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
                      <img alt="crop-product" src="img/blog/1crop.jpg" />
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
                      <img alt="crop-item" src="img/blog/4crop.jpg" />
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
                      <img alt="crop-item" src="img/blog/3crop.jpg" />
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

          <Footer />
        </>
          :
          <>
            <Loader />
          </>
      }

      </>
    );
  }
}

const mapStateToProps = (state) => ({
  listProduct: selectors.getListProduct(state),
  topProduct: selectors.getTopProduct(state)
});

const mapDispatchToProps = (dispatch) => ({
  getListProduct: () => dispatch(actions.getListProduct()),
  getTopProduct: () => dispatch(actions.getTopProduct()),
  showCart: () => dispatch(actions.showCart())
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

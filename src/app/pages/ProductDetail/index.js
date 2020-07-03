import React, { Component, useEffect, useState } from "react";

import { connect } from "react-redux";
import { selectors, actions } from "../services";
import "./index.css";
import { TopBar, CategoriesBar, Loader, Footer } from '../../Components';
import { Switch, Route, Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { FormatNumber } from '../../utils/formatNumber'
import Carousel from 'react-bootstrap/Carousel';
import { icons } from '../../assets/icons/index';


function ProductDetail(props) {
  const dispatch = useDispatch()
  const [productId, setProductId] = useState(props.location.state);
  // const selectors = useSelector()

  let success = () => {
    console.log('success call api -------------- ')
  }

  useEffect(() => {
    console.log(' props product details  ===', props)
    // props.getProductDetail();
    if (productId) {
      dispatch(actions.getProductDetail(productId, success))
    }

  }, []);

  const productDetails = useSelector(state => selectors.getProductDetail(state)) || {};

  const onBuy = () => {
    props.history.push({ pathname: '/cart', state: 123 });
    let buyItem = {
      productEntity: productDetails,
      quantity
    };

    if (productDetails.url) {
      let mergeListStorage = listStorageItem.map(product => product.productEntity.id === productDetails.id ? {
        productEntity: product.productEntity,
        quantity: product.quantity += Number(quantity)
      } : product) || [];

      let itemExist = listStorageItem.find(product => product.productEntity.id === productDetails.id) || null;

      let _listStorageItem = itemExist === null ? listStorageItem.concat(buyItem) : mergeListStorage;
      localStorage.setItem('ValueInLocalStorage3', JSON.stringify(_listStorageItem));
      setListStorageItem(_listStorageItem);
    }
  }

  const listValue = JSON.parse(localStorage.getItem('ValueInLocalStorage3')) || [];

  const [listStorageItem, setListStorageItem] = useState(listValue);

  const onAddToCart = () => {
    console.log('product detail ------------', productDetails)
    let buyItem = {
      productEntity: productDetails,
      quantity
    };

    if (productDetails.url) {
      let mergeListStorage = listStorageItem.map(product => product.productEntity.id === productDetails.id ? {
        productEntity: product.productEntity,
        quantity: product.quantity += Number(quantity)
      } : product) || [];

      let itemExist = listStorageItem.find(product => product.productEntity.id === productDetails.id) || null;

      let _listStorageItem = itemExist === null ? listStorageItem.concat(buyItem) : mergeListStorage;
      localStorage.setItem('ValueInLocalStorage3', JSON.stringify(_listStorageItem));
      setListStorageItem(_listStorageItem);
    }
  }



  const [quantity, setQuantity] = useState(1);

  console.assert('list cartt ============================>', quantity);

  return (
    <>


      {/* Humberger End */}
      {/* Header Section Begin */}
      <TopBar history={props.history} />


      {productDetails ? <>
        <section className="product-details spad">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <div className="product__details__pic">
                  <div className="product__details__pic__item">
                    <img
                      className="product__details__pic__item--large"
                      src={`${productDetails.url}`}
                      alt="product__details"
                    />
                  </div>
                  <div>

                  </div>


                  {/* <div className="product__details__pic__slider owl-carousel"> */}
                  {/* <img
                    data-imgbigurl="img/product/details/product-details-2.jpg"
                    src="img/product/details/thumb-1.jpg"
                    alt="product__details"
                  />
                  <img
                    data-imgbigurl="img/product/details/product-details-3.jpg"
                    src="img/product/details/thumb-2.jpg"
                    alt="product__details"
                  />
                  <img
                    data-imgbigurl="img/product/details/product-details-5.jpg"
                    src="img/product/details/thumb-3.jpg"
                    alt="product__details"
                  />
                  <img
                    data-imgbigurl="img/product/details/product-details-4.jpg"
                    src="img/product/details/thumb-4.jpg"
                    alt="product__details"
                  /> */}

                  {/* </div> */}
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="product__details__text">
                  <h3>{productDetails.name}</h3>
                  <div className="product__details__rating">
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star-half-o" />
                    <span>(18 reviews)</span>
                  </div>
                  <div className="product__details__price">{FormatNumber(productDetails.price)}</div>
                  <p>
                    {productDetails.description}
                  </p>
                  <div className="product__details__quantity">
                    <div className="quantity">
                      <div className="pro-qty">
                        <input value={quantity} onChange={e => setQuantity(e.target.value)} />
                      </div>
                    </div>
                  </div>
                  <Link onClick={onBuy} className="primary-btn">
                    Mua ngay
                  </Link>
                  <button onClick={onAddToCart} href="#" className="heart-icon">
                    <img style={{ height: 40, width: 40 }} src={icons.addToCart} />
                  </button>

                  <ul>
                    <li>
                      <b>Availability</b> <span>In Stock</span>
                    </li>
                    <li>
                      <b>Shipping</b>
                      <span>
                        01 day shipping. <samp>Free pickup today</samp>
                      </span>
                    </li>
                    <li>
                      <b>Weight</b> <span>0.5 kg</span>
                    </li>
                    <li>
                      <b>Share on</b>
                      <div className="share">
                        <a href="#">
                          <i className="fa fa-facebook" />
                        </a>
                        <a href="#">
                          <i className="fa fa-twitter" />
                        </a>
                        <a href="#">
                          <i className="fa fa-instagram" />
                        </a>
                        <a href="#">
                          <i className="fa fa-pinterest" />
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="product__details__tab">
                  <ul className="nav nav-tabs" role="tablist">
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        data-toggle="tab"
                        href="#tabs-1"
                        role="tab"
                        aria-selected="true"
                      >
                        Khách hàng nhận xét
                      </a>
                    </li>

                  </ul>

                  <div className="tab-pane fade" id="reviews" role="tabpanel">
                    <div className="row">
                      <div className="col-sm-10 col-md-8 col-lg-6 m-lr-auto">
                        <div className="p-b-30 m-lr-15-sm">
                          {/* Review */}
                          <div className="">
                            <div className="">
                              <img src="images/avatar-01.jpg" alt="AVATAR" />
                            </div>
                            <div className="size-207">
                              <div className="flex-w flex-sb-m p-b-17">
                                <span className="mtext-107 cl2 p-r-20">
                                  Ariana Grande
                             </span>
                                <span className="fs-18 cl11">
                                  <i className="zmdi zmdi-star" />
                                  <i className="zmdi zmdi-star" />
                                  <i className="zmdi zmdi-star" />
                                  <i className="zmdi zmdi-star" />
                                  <i className="zmdi zmdi-star-half" />
                                </span>
                              </div>
                              <p className="stext-102 cl6">
                                Quod autem in homine praestantissimum atque optimum est, id deseruit. Apud ceteros autem philosophos
                          </p>
                            </div>
                          </div>
                     
                        </div>
                      </div>
                    </div>
                  </div>


                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Product Details Section End */}
        {/* Related Product Section Begin */}
        <section className="related-product">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title related__product__title">
                  <h2>Related Product</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="product__item">
                  <div
                    className="product__item__pic set-bg"
                    data-setbg="img/product/product-1.jpg"
                  >
                    <ul className="product__item__pic__hover">
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
                  <div className="product__item__text">
                    <h6>
                      <a href="#">Crab Pool Security</a>
                    </h6>
                    <h5>$30.00</h5>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="product__item">
                  <div
                    className="product__item__pic set-bg"
                    data-setbg="img/product/product-2.jpg"
                  >
                    <ul className="product__item__pic__hover">
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
                  <div className="product__item__text">
                    <h6>
                      <a href="#">Crab Pool Security</a>
                    </h6>
                    <h5>$30.00</h5>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="product__item">
                  <div
                    className="product__item__pic set-bg"
                    data-setbg="img/product/product-3.jpg"
                  >
                    <ul className="product__item__pic__hover">
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
                  <div className="product__item__text">
                    <h6>
                      <a href="#">Crab Pool Security</a>
                    </h6>
                    <h5>$30.00</h5>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="product__item">
                  <div
                    className="product__item__pic set-bg"
                    data-setbg="img/product/product-7.jpg"
                  >
                    <ul className="product__item__pic__hover">
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
                  <div className="product__item__text">
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
        {/* Related Product Section End */}
        {/* Footer Section Begin */}
        <Footer />
      </> : <> <Loader /></>}

    </>
  );
}

// const mapStateToProps = (state) => ({
//   // productDetail: selectors.getProductDetail(state),
// });

// const mapDispatchToProps = (dispatch) => ({
//   // getProductDetail: () => dispatch(actions.getProductDetail()),
// });

export default ProductDetail;

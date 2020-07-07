import React, { Component, useEffect, useState } from "react";

import { connect } from "react-redux";
import { selectors, actions } from "../services";
import "./index.css";
import { TopBar, CategoriesBar, Loader, Footer,ProductItem } from '../../Components';
import { Switch, Route, Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { FormatNumber } from '../../utils/formatNumber'
import Carousel from 'react-bootstrap/Carousel';
import { icons } from '../../assets/icons/index';


function ProductDetail(props) {
  const dispatch = useDispatch()
  const [productId, setProductId] = useState(props.location.state);

  const [relateProduct, setRelateProduct] = useState([])
  let success = (productDetails) => {
    dispatch(actions.getRelateProduct(productDetails.type, (data) => {
      let tempArr = [];
      data.map(item => item.id !== productDetails.id && tempArr.push(item));

      setRelateProduct(tempArr);
    }))

  }

  console.log('relate product ------------------', relateProduct)


  useEffect(() => {
    console.log(' props product details  ===', props)
    // props.getProductDetail();
    if (productId) {
      dispatch(actions.getProductDetail(productId, success))
    }

  }, []);

  const productDetails = useSelector(state => selectors.getProductDetail(state)) || {};

  console.log(' props product details  ===', productDetails)

  // const relateProduct = listProduct()


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

  const renderItem = (item) => {
    const { history } = props;
    return (
      <ProductItem
        url={`${item.url}`}
        name={item.name}
        price={item.price}
        promotion = {item.promotion}
        id={item.id}
        history={history}
        key={`${item.id}`}
        size="col-lg-3 col-md-6 col-sm-6 mix oranges fresh-meat"
      />
    )
  }


  return (
    <>


      {/* Humberger End */}
      {/* Header Section Begin */}
      <TopBar history={props.history} />

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
                  <span>(2 đánh giá)</span>
                </div>
                <div className="product__details__price">{`${FormatNumber(productDetails.price)}đ`}</div>
                <h5 style={{ color: '#555555', textDecorationLine: "line-through", textDecorationStyle: "solid", textDecorationColor: "#555555", marginBottom: 30, fontWeight: 'bold' }}>
                  {`${FormatNumber(productDetails.price + (productDetails.price * productDetails.promotion * 0.01))}đ`}
                </h5>
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
                    <b>Tình trạng</b> <span>Còn hàng</span>
                  </li>
                  <li>
                    <b>Hình thức giao hàng</b>
                    <span>
                      Giao hàng trong ngày,<samp> Miễn phí giao hàng vào thứ 3 hàng tuần</samp>
                    </span>
                  </li>
                  {/* <li>
                      <b>Weight</b> <span>0.5 kg</span>
                    </li> */}
                  {/* <li>
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
                    </li> */}
                </ul>
              </div>
            </div>
            {/* <div className="col-lg-12">
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
            <div className="col-lg-12 col-md-12">
              <hr></hr>
              <div>
                <h3>
                  Đánh giá của khách hàng
                </h3>
                <br></br>
              </div>
              <div className="">
                <img src={icons.avartar} alt="AVATAR" />
              </div>
              <div className="size-207">
                <div className="flex-w flex-sb-m p-b-17">
                  <span className="mtext-107 cl2 p-r-20">
                    Thím sáu
                             </span>
                  <div className="product__details__text">
                    <div className="product__details__rating">
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star-half-o" />
                    </div>
                  </div>
                </div>
                <p className="stext-102 cl6">
                  Hàng chất lượng, giá cả phải chăng, tôi mua lần thư 15 vẫn thấy tốt...
                </p>
              </div>
              <hr></hr>
              <div>

                <br></br>
              </div>
              <div className="">
                <img style = {{height: 60, width: 60}} src={icons.bo} alt="AVATAR" />
              </div>
              <div className="size-207">
                <div className="flex-w flex-sb-m p-b-17">
                  <span className="mtext-107 cl2 p-r-20">
                    Con mèo ngu ngok dễ thương cute fomai we
                             </span>
                  <div className="product__details__text">
                    <div className="product__details__rating">
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star-half-o" />
                    </div>
                  </div>
                </div>
                <p className="stext-102 cl6">
                  Hàng rất tốt, chó nhà tôi rất thích sản phẩm của web này, nhưng ship hơi chậm nên cho 4 sao thôi, mèo méo meo mèo meoooo
                </p>
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
          {relateProduct.map((item, index) => index < 4 ? renderItem(item) : null)}
            
          </div>
        </div>
      </section>

      {/* Related Product Section End */}
      {/* Footer Section Begin */}
      <Footer />

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

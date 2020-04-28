import React, { Component, useEffect } from "react";

import { connect } from "react-redux";
import { selectors, actions } from "./services";
import { icons } from "../../assets/icons/index";
import "./index.css";
import { colors } from "../../utils/colors";

function ProductDetail(props) {
  useEffect(() => {
    props.getProductDetail();
  }, []);

  let item = !!props.productDetail ? props.productDetail[4] : {};

  console.log("product detail@@@", item);
  return (
    <div className="container">
      <div className="product-img">
        <img height="400px" src={!!item ? item.img : null} />
      </div>
      <div className="product-detail">
        <div className="product-name">{item ? item.name : null}</div>
        <div className="brand">
          Thương hiệu:{" "}
          <span className="brand-name">{item ? item.brand : null}</span>{" "}
        </div>
        <div className="brand">
          Mã sản phẩm:{" "}
          <span className="brand-code">{item ? item.code : null}</span>{" "}
        </div>
        <span>
          <i className="start">
            <img height="30px" src={icons.start} />
          </i>
          <i className="start">
            <img height="30px" src={icons.start} />
          </i>
          <i className="start">
            <img height="30px" src={icons.start} />
          </i>
          <i className="start">
            <img height="30px" src={icons.start} />
          </i>
          <i className="start">
            <img height="30px" src={icons.start} />
          </i>

          <span>Có 0 người dùng đánh giá</span>
        </span>


        <div className="price">{item ? item.price : null}</div>

        <div className = "numOfProduct">
          <span>
            Số lượng
          </span>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  productDetail: selectors.getProductDetail(state),
});

const mapDispatchToProps = (dispatch) => ({
  getProductDetail: () => dispatch(actions.getProductDetail()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);

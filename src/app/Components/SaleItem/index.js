import React, { useEffect } from "react";
import './index.css'
export const SaleItem = (props) => {
  return (
    <>
      <div className="col-lg-4">
        <div className="product__discount__item">
          <div
            className="product__discount__item__pic set-bg"
            data-setbg="img/product/discount/pd-1.jpg"
          >
            <div className="product__discount__percent">-20%</div>
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
          <div className="product__discount__item__text">
            <span>Dried Fruit</span>
            <h5>
              <a href="#">Raisin’n’nuts</a>
            </h5>
            <div className="product__item__price">
              $30.00 <span>$36.00</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};


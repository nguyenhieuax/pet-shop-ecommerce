import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
export const TopBar = () => {
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
                      <i className="fa fa-envelope" /> all4pet@xyz.com
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
                    <img src="img/language.png" alt = 'true' />
                    <div>English</div>
                    <span className="arrow_carrot-down" />
                    <ul>
                      <li>
                        <a href="#">English</a>
                      </li>
                      <li>
                        <a href="#">Tiếng Việt</a>
                      </li>
                    </ul>
                  </div>
                  <div className="header__top__right__auth">
                    <a href="#">
                      <i className="fa fa-user" /> Đăng nhập
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
                <Link to="/">
                  <img className="logo_img" src="img/logo.png" alt = 'true' />
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <nav className="header__menu">
                <ul>
                  <li className="active">
                    <Link to="/">Nhãn Hiệu</Link>
                    <ul className="header__menu__dropdown">
                      <li>
                        <Link to="/product-detail">8in1</Link>
                      </li>
                      <li>
                        <a href="./shoping-cart.html">Bayer </a>
                      </li>
                      <li>
                        <a href="./checkout.html">Davis</a>
                      </li>
                      <li>
                        <a href="./blog-details.html">Nutrition</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to="/shop">Chó</Link>
                    <ul className="header__menu__dropdown">
                      <li>
                        <Link to="/product-detail">Thức ăn cho chó</Link>
                      </li>
                      <li>
                        <Link to="/product-detail">Mỹ phẩm và làm đẹp</Link>
                      </li>
                      <li>
                        <Link to="/product-detail">Dụng cụ vệ sinh</Link>
                      </li>
                      <li>
                        <Link to="/product-detail">Đồ chơi phụ kiện</Link>
                      </li>
                      <li>
                        <Link to="/product-detail">Y tế và thuốc</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                  <Link to="/shop">Mèo</Link>
                    <ul className="header__menu__dropdown">
                      <li>
                        <Link to="/product-detail">Thức ăn cho mèo</Link>
                      </li>
                      <li>
                        <Link to="/product-detail">Mỹ phẩm và làm đẹp</Link>
                      </li>
                      <li>
                        <Link to="/product-detail">Dụng cụ vệ sinh</Link>
                      </li>
                      <li>
                        <Link to="/product-detail">Đồ chơi phụ kiện</Link>
                      </li>
                      <li>
                        <Link to="/product-detail">Y tế và thuốc</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="./blog.html">Blog</a>
                  </li>
                  <li>
                    <Link to="/product-detail">Vật nuôi khác</Link>
                    <ul className="header__menu__dropdown">
                      <li>
                        <Link to="/product-detail">Chim</Link>
                      </li>
                      <li>
                        <a href="./shoping-cart.html">Hamster </a>
                      </li>
                      <li>
                        <a href="./checkout.html">Cá cảnh</a>
                      </li>
                      <li>
                        <a href="./blog-details.html">Bạn thân</a>
                      </li>
                    </ul>
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
    </>
  );
};

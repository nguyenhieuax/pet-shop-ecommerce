import React, { Component } from 'react'
import { Switch, Route, Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="footer spad">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="footer__about">
              <div className="footer__about__logo">
                <Link to="/">
                  <img alt="logo-allforpet" src="img/logo.png" />
                </Link>
              </div>
              <ul>
                <li>Địa chỉ: TPHCM, Việt Nam</li>
                <li>Điện thoại: +65 11.188.888</li>
                <li>Email: hello@all4pet.com</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-1">
            <div className="footer__widget">
              <h6>Đồ án môn học</h6>
              <div style={{ fontSize: 16 }}>Thương mại điện tử và triển khai ứng dụng</div>
              <div style={{ fontSize: 16 }}>
                Giảng viên: Trần Tuấn Dũng
                    </div>
              <div style={{ fontSize: 16 }}>
                Đề tài: Websites bán vật dụng cho thú cưng
                    </div>

              {/* <div className="fb-page"
               data-href="https://www.facebook.com/facebook"
                data-tabs="timeline" data-width="" data-height="" data-small-header="false"
                 data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true">
                <blockquote cite="https://www.facebook.com/facebook" className="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/facebook">Facebook</a>
                </blockquote></div> */}
              {/* <ul>
                    
                      <li>
                        <a href="#">Các dự án</a>
                      </li>
                      <li>
                        <a href="#">Liên hệ</a>
                      </li>
                      <li>
                        <a href="#">Sự đổi mới</a>
                      </li>
                      <li>
                        <a href="#">Chứng thực</a>
                      </li>
                    </ul> */}
            </div>
          </div>
          <div className="col-lg-4 col-md-12">
            <div className="footer__widget">
              <h6>Tham gia vào cộng đồng all4pet</h6>
              <p>
                Nhận thông tin các sản phẩm mới nhất và các khuyến mãi hot qua Email
                  </p>
              <form action="#">
                <input type="text" placeholder="Nhập Email của bạn" />
                <button type="submit" className="site-btn">
                  Theo dõi
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
  )
}
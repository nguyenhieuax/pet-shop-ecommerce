import React, { useState } from 'react';
import { Link, Route } from 'react-router-dom'

export const LeftBarItem = (props) => {

  const [checkBox1, setcheckBox1] = useState(false)
  const [checkBox2, setcheckBox2] = useState(false)
  const [checkBox3, setcheckBox3] = useState(false)
  const [checkBox4, setcheckBox4] = useState(false)
  const [checkBox5, setcheckBox5] = useState(false)

  return (
    <>
      <div className="col-lg-3 col-md-5">
        <div className="sidebar">
          <div className="sidebar__item">
            <h4>Danh mục</h4>
            <ul>
              <li onClick={() => props.onClickType(0)}>
                <div style={{ fontSize: 16, cursor: 'pointer' }} >Tất cả sản phẩm </div>
              </li>
              <li onClick={() => props.onClickType('food')}>
                <div style={{ fontSize: 16, cursor: 'pointer' }} >Thức ăn </div>
              </li>
              <li onClick={() => props.onClickType('accessory')}>
                <div style={{ fontSize: 16, cursor: 'pointer' }} >Đồ chơi phụ kiện </div>
              </li>
              <li onClick={() => props.onClickType('clothing')}>
                <div style={{ fontSize: 16, cursor: 'pointer' }} >Quần áo trang sức  </div>
              </li>
              <li onClick={() => props.onClickType('cage')}>
                <div style={{ fontSize: 16, cursor: 'pointer' }} >Chuồng, dụng cụ vệ sinh </div>
              </li>

            </ul>
          </div>
          <div className="sidebar__item">
            <h4>Khoảng giá</h4>
            <div className="price-range-wrap">
              <form>

                <div>
                  <input
                    name="isGoing"
                    type="checkbox"
                    // checked={this.state.isGoing}
                    checked={checkBox1}
                    onChange={() => setcheckBox1(!checkBox1)}
                  />
                  <label style={{ fontSize: 16, marginLeft: 10, marginBottom: 5, fontWeight: 'normal' }}>Dưới 50 ngàn</label>
                </div>
                <div>
                  <input
                    name="isGoing"
                    type="checkbox"
                    // checked={this.state.isGoing}
                    checked={checkBox2}
                    onChange={() => setcheckBox2(!checkBox2)}
                  />
                  <label style={{ fontSize: 16, marginLeft: 10, marginBottom: 5, fontWeight: 'normal' }}>50 ngàn - 100 ngàn</label>
                </div>
                <div>
                  <input
                    name="isGoing"
                    type="checkbox"
                    // checked={this.state.isGoing}
                    checked={checkBox3}
                    onChange={() => setcheckBox3(!checkBox3)}
                  />
                  <label style={{ fontSize: 16, marginLeft: 10, marginBottom: 5, fontWeight: 'normal' }}>100 ngàn - 200 ngàn</label>
                </div>
                <div>
                  <input
                    name="isGoing"
                    type="checkbox"
                    // checked={this.state.isGoing}
                    checked={checkBox4}
                    onChange={() => setcheckBox4(!checkBox4)}
                  />
                  <label style={{ fontSize: 16, marginLeft: 10, marginBottom: 5, fontWeight: 'normal' }}>200 ngàn - 500 ngàn</label>
                </div>
                <div>
                  <input
                    name="isGoing"
                    type="checkbox"
                    // checked={this.state.isGoing}
                    checked={checkBox5}
                    onChange={() => setcheckBox5(!checkBox5)}
                  />
                  <label style={{ fontSize: 16, marginLeft: 10, marginBottom: 5, fontWeight: 'normal' }}>Trên 500 ngàn</label>
                </div>


              </form>
            </div>
          </div>
          <div className="sidebar__item">
            <h4>Thương hiệu </h4>
            <div className="price-range-wrap">
              <form>

                <div>
                  <input
                    name="isGoing"
                    type="checkbox"
                    // checked={this.state.isGoing}
                    checked={checkBox1}
                    onChange={() => setcheckBox1(!checkBox1)}
                  />
                  <label style={{ fontSize: 16, marginLeft: 10, marginBottom: 5, fontWeight: 'normal' }}>Dưới 50 ngàn</label>
                </div>
                <div>
                  <input
                    name="isGoing"
                    type="checkbox"
                    // checked={this.state.isGoing}
                    checked={checkBox2}
                    onChange={() => setcheckBox2(!checkBox2)}
                  />
                  <label style={{ fontSize: 16, marginLeft: 10, marginBottom: 5, fontWeight: 'normal' }}>50 ngàn - 100 ngàn</label>
                </div>
                <div>
                  <input
                    name="isGoing"
                    type="checkbox"
                    // checked={this.state.isGoing}
                    checked={checkBox3}
                    onChange={() => setcheckBox3(!checkBox3)}
                  />
                  <label style={{ fontSize: 16, marginLeft: 10, marginBottom: 5, fontWeight: 'normal' }}>100 ngàn - 200 ngàn</label>
                </div>
                <div>
                  <input
                    name="isGoing"
                    type="checkbox"
                    // checked={this.state.isGoing}
                    checked={checkBox4}
                    onChange={() => setcheckBox4(!checkBox4)}
                  />
                  <label style={{ fontSize: 16, marginLeft: 10, marginBottom: 5, fontWeight: 'normal' }}>200 ngàn - 500 ngàn</label>
                </div>
                <div>
                  <input
                    name="isGoing"
                    type="checkbox"
                    // checked={this.state.isGoing}
                    checked={checkBox5}
                    onChange={() => setcheckBox5(!checkBox5)}
                  />
                  <label style={{ fontSize: 16, marginLeft: 10, marginBottom: 5, fontWeight: 'normal' }}>Trên 500 ngàn</label>
                </div>


              </form>
            </div>
          </div>




          {/* <div className="sidebar__item sidebar__item__color--option">
                    <h4>Colors</h4>
                    <div className="sidebar__item__color sidebar__item__color--white">
                      <label htmlFor="white">
                        White
                        <input type="radio" id="white" />
                      </label>
                    </div>
                    <div className="sidebar__item__color sidebar__item__color--gray">
                      <label htmlFor="gray">
                        Gray
                        <input type="radio" id="gray" />
                      </label>
                    </div>
                    <div className="sidebar__item__color sidebar__item__color--red">
                      <label htmlFor="red">
                        Red
                        <input type="radio" id="red" />
                      </label>
                    </div>
                    <div className="sidebar__item__color sidebar__item__color--black">
                      <label htmlFor="black">
                        Black
                        <input type="radio" id="black" />
                      </label>
                    </div>
                    <div className="sidebar__item__color sidebar__item__color--blue">
                      <label htmlFor="blue">
                        Blue
                        <input type="radio" id="blue" />
                      </label>
                    </div>
                    <div className="sidebar__item__color sidebar__item__color--green">
                      <label htmlFor="green">
                        Green
                        <input type="radio" id="green" />
                      </label>
                    </div>
                  </div> */}
          <div className="sidebar__item">
            <h4>Popular Size</h4>
            <div className="sidebar__item__size">
              <label htmlFor="large">
                Large
                        <input type="radio" id="large" />
              </label>
            </div>
            <div className="sidebar__item__size">
              <label htmlFor="medium">
                Medium
                        <input type="radio" id="medium" />
              </label>
            </div>
            <div className="sidebar__item__size">
              <label htmlFor="small">
                Small
                        <input type="radio" id="small" />
              </label>
            </div>
            <div className="sidebar__item__size">
              <label htmlFor="tiny">
                Tiny
                        <input type="radio" id="tiny" />
              </label>
            </div>
          </div>
          <div className="sidebar__item">
            <div className="latest-product__text">
              <h4>Latest Products</h4>
              <div className="latest-product__slider owl-carousel">
                <div className="latest-prdouct__slider__item">
                  <a href="#" className="latest-product__item">
                    <div className="latest-product__item__pic">
                      <img src="img/latest-product/lp-1.jpg" alt="latest-product" />
                    </div>
                    <div className="latest-product__item__text">
                      <h6>Crab Pool Security</h6>
                      <span>$30.00</span>
                    </div>
                  </a>
                  <a href="#" className="latest-product__item">
                    <div className="latest-product__item__pic">
                      <img src="img/latest-product/lp-2.jpg" alt="latest-product" />
                    </div>
                    <div className="latest-product__item__text">
                      <h6>Crab Pool Security</h6>
                      <span>$30.00</span>
                    </div>
                  </a>
                  <a href="#" className="latest-product__item">
                    <div className="latest-product__item__pic">
                      <img src="img/latest-product/lp-3.jpg" alt="latest-product" />
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
                      <img src="img/latest-product/lp-1.jpg" alt="latest-product" />
                    </div>
                    <div className="latest-product__item__text">
                      <h6>Crab Pool Security</h6>
                      <span>$30.00</span>
                    </div>
                  </a>
                  <a href="#" className="latest-product__item">
                    <div className="latest-product__item__pic">
                      <img src="img/latest-product/lp-2.jpg" alt="latest-product" />
                    </div>
                    <div className="latest-product__item__text">
                      <h6>Crab Pool Security</h6>
                      <span>$30.00</span>
                    </div>
                  </a>
                  <a href="#" className="latest-product__item">
                    <div className="latest-product__item__pic">
                      <img src="img/latest-product/lp-3.jpg" alt="latest-product" />
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
    </>
  )
}
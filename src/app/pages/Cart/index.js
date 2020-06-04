import React, { Component } from 'react'
import { TopBar, CategoriesBar, CategoriesItem, Loader, Footer } from '../../Components';
import { Switch, Route, Link } from "react-router-dom";


const Cart = (props) => {
    return (
        <>
        <TopBar history = {props.history} />
        <CategoriesItem />
            <section className="shoping-cart spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="shoping__cart__table">
                                <table>
                                    <thead>
                                        <tr>
                                            <th className="shoping__product">Sản phẩm</th>
                                            <th>Đơn giá</th>
                                            <th>Số lượng</th>
                                            <th>Thành tiền</th>
                                            <th />
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="shoping__cart__item">
                                                <img src="img/cart/cart-1.jpg" alt="" />
                                                <h5>Vegetable’s Package</h5>
                                            </td>
                                            <td className="shoping__cart__price">
                                                $55.00
                </td>
                                            <td className="shoping__cart__quantity">
                                                <div className="quantity">
                                                    <div className="pro-qty">
                                                        <input type="text" defaultValue={1} />
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="shoping__cart__total">
                                                $110.00
                </td>
                                            <td className="shoping__cart__item__close">
                                                <span className="icon_close" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="shoping__cart__item">
                                                <img src="img/cart/cart-2.jpg" alt="" />
                                                <h5>Fresh Garden Vegetable</h5>
                                            </td>
                                            <td className="shoping__cart__price">
                                                $39.00
                </td>
                                            <td className="shoping__cart__quantity">
                                                <div className="quantity">
                                                    <div className="pro-qty">
                                                        <input type="text" defaultValue={1} />
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="shoping__cart__total">
                                                $39.99
                </td>
                                            <td className="shoping__cart__item__close">
                                                <span className="icon_close" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="shoping__cart__item">
                                                <img src="img/cart/cart-3.jpg" alt="" />
                                                <h5>Organic Bananas</h5>
                                            </td>
                                            <td className="shoping__cart__price">
                                                $69.00
                </td>
                                            <td className="shoping__cart__quantity">
                                                <div className="quantity">
                                                    <div className="pro-qty">
                                                        <input type="text" defaultValue={1} />
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="shoping__cart__total">
                                                $69.99
                </td>
                                            <td className="shoping__cart__item__close">
                                                <span className="icon_close" />
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="shoping__cart__btns">
                                <a href="#" className="primary-btn cart-btn">TIẾP TỤC MUA SẮM</a>
                                <a href="#" className="primary-btn cart-btn cart-btn-right"><span className="icon_loading" />
            Cập nhật giỏ hàng</a>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="shoping__continue">
                                <div className="shoping__discount">
                                    <h5>Mã giảm giá</h5>
                                    <form action="#">
                                        <input type="text" placeholder="Nhập mã giảm giá" />
                                        <button type="submit" className="site-btn">Xác nhận</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="shoping__checkout">
                                <h5>Giỏ hàng</h5>
                                <ul>
                                    <li>Tổng cộng <span>10000000</span></li>
                                    <li>Khuyến mãi khi dùng code <span>0</span></li>
                                    <li>Thanh toán <span>10000000</span></li>
                                </ul>
                                <div className="primary-btn">
                                    <Link to ='/check-out' >THANH TOÁN</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Shoping Cart Section End */}

            <Footer />

        </>
    )
}

export default Cart;
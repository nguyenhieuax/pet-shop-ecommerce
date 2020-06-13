import React, { useEffect, useState } from 'react'
import { TopBar, CategoriesBar, CategoriesItem, Loader, Footer } from '../../Components';
import { Switch, Route, Link } from "react-router-dom";
import { FormatNumber } from '../../utils/formatNumber'
import { icons } from "../../assets/icons";

const Cart = (props) => {
    const listValue = JSON.parse(localStorage.getItem('myValueInLocalStorage1')) || [];

    const [listItem, setListItem] = useState(listValue);

    const [totalAmount, setTotalAmount] = useState(0);

    const onRemoveCartItem = async (id) => {
        let itemIndex = await listItem.findIndex(item => item.id === id);
        let tempArr = [...listItem];
        tempArr.splice(itemIndex, 1);
        localStorage.setItem('myValueInLocalStorage1', JSON.stringify(tempArr));
        setListItem(tempArr);
    }

    useEffect(() => {
        getTotalAmount();
    }, [listItem])

    const getTotalAmount = () => {
        let total = 0;
        listItem.forEach(item => {
            total += item.price;
        });
        console.log('total amount ========', total);
        setTotalAmount(total);
    }

    console.log('list item storage ======================', listItem);
    const renderCartItem = (item) => {
        return (
            <tr>
                <td className="shoping__cart__item">
                    <img style={{ height: 100, width: 100 }} src={item.url} alt="" />
                    <h5 style={{ width: '70%' }}>{item.name}</h5>
                </td>
                <td className="shoping__cart__price">
                    {FormatNumber(item.price)}
                </td>
                <td className="shoping__cart__quantity">
                    <div className="quantity">
                        <div className="pro-qty">
                            <input type="text" defaultValue={1} />
                        </div>
                    </div>
                </td>
                <td className="shoping__cart__total">
                    {FormatNumber(item.price)}
                </td>
                <td className="shoping__cart__item__close">
                    <span onClick={() => onRemoveCartItem(item.id)} className="icon_close" />
                </td>
            </tr>
        )
    }

    const emptyCart = () => {
        return (
            <>
                <div style={{ marginTop: 50, marginBottom: 50, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>

                    <img style={{}} src={icons.emptyCart}></img>
                    {/* <h5 style = {{textAlign: 'center', marginTop: 20}}>
                        Không có sản phẩm nào trong giỏ hàng của bạn
                    </h5> */}
                </div>
            </>
        )
    }

    const renderCart = () => {
        return (
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
                        {listItem.map(item => renderCartItem(item))}
                    </tbody>
                </table>
            </div>
        )
    }

    return (
        <>
            <TopBar history={props.history} />
            <CategoriesItem />
            <section className="shoping-cart spad">
                <div className="container">
                    <div iv className="row">
                        <div className="col-lg-12">
                            {listItem.length === 0 ? emptyCart() : renderCart()}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="shoping__cart__btns">
                                <Link className="primary-btn cart-btn" to="/">TIẾP TỤC MUA SẮM</Link>
                                <a href="#" className="primary-btn cart-btn cart-btn-right"><span className="icon_loading" />
                                Cập nhật giỏ hàng</a>
                            </div>
                        </div>
                        {
                            listItem.length !== 0 ?
                                <>
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
                                                <li>Tổng cộng <span>{FormatNumber(totalAmount)}</span></li>
                                                <li>Khuyến mãi khi dùng code <span>0</span></li>
                                                <li>Thanh toán <span>{FormatNumber(totalAmount)}</span></li>
                                            </ul>
                                            <div className="primary-btn checkout_btn">
                                                <Link className="" to='/check-out' >
                                                    <span style={{ color: '#ffffff' }}>
                                                        THANH TOÁN
                                        </span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </>
                                : null
                        }

                    </div>
                </div>
            </section>
            {/* Shoping Cart Section End */}

            <Footer />

        </>
    )
}

export default Cart;
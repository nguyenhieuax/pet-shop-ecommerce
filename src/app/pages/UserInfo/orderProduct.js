import React, { useEffect, useState } from 'react'
import { TopBar, CategoriesBar, CategoriesItem, Loader, Footer } from '../../Components';
import { Switch, Route, Link } from "react-router-dom";
import { FormatNumber } from '../../utils/formatNumber'
import { icons } from "../../assets/icons";
import { useDispatch, useSelector } from 'react-redux';
import { selectors, actions } from "../services";

const OrderProduct = (props) => {

    const dispatch = useDispatch();

    const listValue = JSON.parse(localStorage.getItem('ValueInLocalStorage3')) || [];
    const token = localStorage.getItem('loginToken') || '';

    const [listOrder, setListOrder] = useState('');
    // const orderProduct = 

    console.log('token item --------------------------', token)

    console.log('list value in storage =================', listValue);
    const [listItem, setListItem] = useState(listValue);

    const [totalAmount, setTotalAmount] = useState(0);
    const [payAmount, setPayAmount] = useState(0)

    const onRemoveCartItem = async (id) => {
        let itemIndex = await listItem.findIndex(item => item.productEntity.id === id);
        let tempArr = [...listItem];
        console.log('index of item remove-------------------------------', itemIndex)
        tempArr.splice(itemIndex, 1);
        localStorage.setItem('ValueInLocalStorage3', JSON.stringify(tempArr));
        setListItem(tempArr);
    }

    useEffect(() => {
        getTotalAmount();
        dispatch(actions.showProfile(null, (data) => {
            console.log('data show profile in user info', data.userEntity.email)
            data.userEntity.email && dispatch(actions.showOrderList( data.userEntity.email, (data) => {

                setListOrder(data);
            }))
        }))        
    }, [listItem])

   


    const getTotalAmount = () => {
        let total = 0;
        let pay = 0;
        listItem && listItem.forEach(item => {
            total += item.productEntity.price * item.quantity;
        });
        console.log('total amount ========', total, pay);
        setTotalAmount(total);
    }

    const onAdd = (item, quantity) => {
        console.log('onclick button add to cart ---------------')
        let mergeListStorage = listItem.map(product => product.productEntity.id === item.id ? {
            productEntity: product.productEntity,
            quantity: product.quantity += 1
        } : product) || [];

        let _listStorageItem = mergeListStorage;
        console.log('list item after add-------------------', _listStorageItem)
        localStorage.setItem('ValueInLocalStorage3', JSON.stringify(_listStorageItem));
        setListItem(_listStorageItem);
    }


    const onMinus = (item, quantity) => {
        console.log('onclick button add to cart ---------------')
        if (quantity === 1) {
            console.log('id to remove ===========================', item.id)
            onRemoveCartItem(item.id);
            return;
        }
        let mergeListStorage = listItem.map(product => product.productEntity.id === item.id ? {
            productEntity: product.productEntity,
            quantity: product.quantity -= 1
        } : product) || [];

        let _listStorageItem = mergeListStorage;
        console.log('list item after add-------------------', _listStorageItem)
        localStorage.setItem('ValueInLocalStorage3', JSON.stringify(_listStorageItem));
        setListItem(_listStorageItem);
    }
    
    const renderCartItem = (item, quantity) => {
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
                            <button onClick={() => onMinus(item, quantity)}><i className="fa fa-minus" aria-hidden="true"></i></button>
                            <input type="text" value={quantity} />
                            <button onClick={() => onAdd(item, quantity)}><i className="fa fa-plus" aria-hidden="true"></i></button>
                        </div>
                    </div>
                </td>
                <td className="shoping__cart__total">
                    {FormatNumber(item.price * quantity)}
                </td>
                <div onClick={() => onRemoveCartItem(item.id)} className="shoping__cart__item__close">
                    <i className="fa fa-window-close" aria-hidden="true"></i>
                </div>
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
                        {listOrder.length && listOrder.map(item => renderCartItem(item.productEntity, item.quantity))}
                    </tbody>
                </table>
            </div>
        )
    }

    return (
        <>
            <TopBar history={props.history} />
            <CategoriesItem history ={props.history} />
            <section className="shoping-cart spad">
                <div className="container">
                    <div iv className="row">
                        <div className="col-lg-12">
                            {listItem.length === 0 ? emptyCart() : renderCart()}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            {/* <div className="shoping__cart__btns">
                                <Link className="primary-btn cart-btn" to="/">TIẾP TỤC MUA SẮM</Link>
                                <a href="#" className="primary-btn cart-btn cart-btn-right"><span className="icon_loading" />
                                Cập nhật giỏ hàng</a>
                            </div> */}
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
                                                <Link className=""
                                                    to={{
                                                        pathname: "/check-out",
                                                        // search: "?sort=name",
                                                        // hash: "#the-hash",
                                                        state: { totalAmount: totalAmount }
                                                    }} >
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

export default OrderProduct;
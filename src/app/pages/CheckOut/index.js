import React, { useState, useEffect } from 'react'
import { TopBar, CategoriesBar, CategoriesItem, Loader, Footer, Input } from '../../Components';
import { useDispatch } from 'react-redux';
import { actions, selectors } from '../services';
import { FormatNumber } from '../../utils/formatNumber';
import PaypalExpressBtn from 'react-paypal-express-checkout';



const CheckOut = (props) => {
    const dispatch = useDispatch();

    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [phoneNum, setPhoneNum] = useState('')
    const [note, setNote] = useState('')
    const [email, setEmail] = useState('')
    const [paymentMethod, setPaymentMethod] = useState('COD')

    const token = localStorage.getItem('loginToken');

    useEffect(() => {
        token && dispatch(actions.showProfile(null, (data) => {
            setName(data.name);
            setAddress(data.address);
            setPhoneNum(data.phoneNumber);
            setEmail(data.userEntity.email)

        }))
    }, [])

    const checkData = () => {
        return name && address && phoneNum && email;
    }


    const listValue = JSON.parse(localStorage.getItem('ValueInLocalStorage3')) || [];

    const client = {
        sandbox:    'AQHpr33Cwp5MkBAVSQjdexa1QKkAUIECXep0ZsE412krVgIjmLVogWMInlaEDJlnQG-WeqDCuERaknj6',
        production: 'AQHpr33Cwp5MkBAVSQjdexa1QKkAUIECXep0ZsE412krVgIjmLVogWMInlaEDJlnQG-WeqDCuERaknj6',
    }

    

    const confirmCheckOut = () => {



        let params = {
            "address": address,
            "paymentMethod": paymentMethod,
            "receiver": name,
            "note": note,
            "email": email,
            "phoneNumber": phoneNum,
            "totalMoney": String(totalAmount),
            "status": "1",
            "listItems": listValue

        };
        console.log('params confirm checkout ', params)
        dispatch(actions.confirmCheckOut(params, () => {
            console.log('confirm checkout successsssssss---------');
            localStorage.removeItem('ValueInLocalStorage3');

            props.history.push({ pathname: '/checkoutSuccess', state: 'checkoutSuccess' })
        }))

    }

    const [listItem, setListItem] = useState(listValue);
    const [totalAmount, setTotalAmount] = useState(0);

    const convertToUsd = totalAmount/23000;

    const _convertToUsd =Math.round(convertToUsd * 100) / 100;

    console.log('convert to usd ------------------================',_convertToUsd );

    useEffect(() => {
        getTotalAmount();
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

    const onSuccessPaypal = () => {
        console.log('success paypalll------------');

        confirmCheckOut();
    }


    return (
        <>
            <TopBar history={props.history} />
            <CategoriesItem history ={props.history} />
            <section className="checkout spad">
                <div className="container">
                    {/* <div className="row">
                        <div className="col-lg-12">
                            <h6><span className="icon_tag_alt" /> Have a coupon? <a href="#">Click here</a> to enter your code
        </h6>
                        </div>
                    </div> */}
                    <div className="checkout__form">
                        <h4>Thông tin thanh toán</h4>
                        <div>
                            <div className="row">
                                <div className="col-lg-8 col-md-6">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="checkout__input">
                                                <p>Họ tên<span>*</span></p>
                                                <input style ={{color:'black'}} type="text" value={name} onChange={e => setName(e.target.value)} />
                                            </div>
                                        </div>
                                        
                                    </div>
                                    {/* <div className="checkout__input">
                                        <p>Country<span>*</span></p>
                                        <input type="text" />
                                    </div> */}
                                    <div className="checkout__input">
                                        <p>Địa chỉ<span>*</span></p>
                                        <input type="text" style ={{color:'black'}} value={address} onChange={e => setAddress(e.target.value)} placeholder="Số nhà/ đường" className="checkout__input__add" />
                                    </div>
                                   

                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="checkout__input">
                                                <p>Số điện thoại<span>*</span></p>
                                                <input type="text" style ={{color:'black'}} value={phoneNum} onChange={e => setPhoneNum(e.target.value)} />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="checkout__input">
                                                <p>Email<span>*</span></p>
                                                <input type="text" style ={{color:'black'}} value={email} onChange={e => setEmail(e.target.value)} />
                                            </div>
                                        </div>
                                    </div>
                                    {/* <div className="checkout__input__checkbox">
                                        <label htmlFor="acc">
                                            Create an account?
                <input type="checkbox" id="acc" />
                                            <span className="checkmark" />
                                        </label>
                                    </div>
                                    <p>Create an account by entering the information below. If you are a returning customer
              please login at the top of the page</p>
                                    <div className="checkout__input">
                                        <p>Account Password<span>*</span></p>
                                        <input type="text" />
                                    </div>
                                    <div className="checkout__input__checkbox">
                                        <label htmlFor="diff-acc">
                                            Ship to a different address?
                <input type="checkbox" id="diff-acc" />
                                            <span className="checkmark" />
                                        </label>
                                    </div> */}
                                    <div className="checkout__input">
                                        <p>Ghi chú<span>*</span></p>
                                        <input type="text" style ={{color:'black'}} value={note} onChange={e => setNote(e.target.value)} placeholder="Ghi chú " />
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="checkout__order">
                                        <h4>Đơn hàng của bạn</h4>
                                        <div className="checkout__order__products">Sản phẩm <span>Đơn giá</span></div>
                                        <ul>
                                            {listValue.map(item => <> <li>{item.productEntity.name}<span>{FormatNumber(item.productEntity.price)}</span></li> </>)}
                                        </ul>
                                        {/* <div className="checkout__order__subtotal">Subtotal <span>$750.99</span></div> */}
                                        <div className="checkout__order__total">Tổng cộng <span>{FormatNumber(totalAmount)}</span></div>
                                        {/* <div className="checkout__input__checkbox">
                                            <label htmlFor="acc-or">
                                                Tạo tài khoản?
                  <input type="checkbox" id="acc-or" />
                                                <span className="checkmark" />
                                            </label>
                                        </div>
                                        <p style={{ fontFamily: 'Roboto,sanf-serif' }}>Trở thành thành viên của all4pet để nhận được những ưu đãi hấp dẫn nhé!</p> */}
                                        <div style={{ fontSize: 16, fontStyle: 'bold', marginTop: 15, marginBottom: 15 }}>
                                            <label>
                                                Chọn phương thức thanh toán
                                            </label>
                                        </div>
                                        <div className="checkout__input__checkbox">
                                            <label htmlFor="payment">
                                                Ship COD
                  <input type="checkbox" onChange={() => setPaymentMethod('COD')} checked={paymentMethod === 'COD' ? true : false} id="payment" />
                                                <span className="checkmark" />
                                            </label>
                                        </div>
                                        <div className="checkout__input__checkbox">
                                            <label htmlFor="paypal">
                                                Thanh toán bằng PAYPAL
                  <input type="checkbox" onChange={() => setPaymentMethod('PAYPAL')} checked={paymentMethod !== 'COD' ? true : false} id="paypal" />
                                                <span className="checkmark" />
                                            </label>
                                        </div>
                                        {checkData() && paymentMethod === 'COD' ? <button onClick={confirmCheckOut} className="site-btn">ĐẶT HÀNG</button> : null}

                                        { checkData() && paymentMethod === 'PAYPAL' ? <PaypalExpressBtn client={client} currency={'USD'} onSuccess={onSuccessPaypal} total={_convertToUsd} /> : null}

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />

        </>
    )
}

export default CheckOut;
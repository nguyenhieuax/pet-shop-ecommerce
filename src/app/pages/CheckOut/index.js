import React, { useState } from 'react'
import { TopBar, CategoriesBar, CategoriesItem, Loader, Footer, Input } from '../../Components';
import { useDispatch } from 'react-redux';
import { actions, selectors } from '../services';

const CheckOut = (props) => {
    const [lastName, setLastName] = useState('')
    const [firstName, setFirstName] = useState('')
    const [address, setAddress] = useState('')
    const [town, setTown] = useState('')
    const [phoneNum, setPhoneNum] = useState('')
    const [note, setNote] = useState('')
    const [email, setEmail] = useState('')

    const dispatch = useDispatch();

    const confirmCheckOut = () => {

        let totalAmount = props.location.state ? props.location.state.totalAmount : 0 ;
        const listValue = JSON.parse(localStorage.getItem('ValueInLocalStorage3')) || [];

        let params = {
            "address": address,
            "paymentMethod": "PAYPAL",
            "receiver": lastName + ' '+ firstName,
            "note": note,
            "email": email,
            "phoneNumber": phoneNum,
            "totalMoney": String(totalAmount),
            "status": "1",
            "listItems":listValue

        };

        // let params = {
        //     "address": "QUAN 12 TPHCM",        
        //     "paymentMethod": "PAYPAL",
        //     "receiver": "customer",
        //     "note" : "No note",
        //     "email": "anonymous@gmail.com",
        //     "phoneNumber": "123456789",
        //     "totalMoney": "100000",
        //     "status": "1",
        //      "listItems": [{
        //             "productEntity":{
        //                     "id": 22,
        //                      "name": "sanpham3",
        //                      "amount": 10,
        //                      "url": "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12234558/Chinook-On-White-03.jpg",
        //                      "url2": null,
        //                      "url3": null,
        //                      "price": 100000.0,
        //                      "promotion": 10,
        //                      "type": "clothing",
        //                     "description": "It is good for your pet",
        //                     "brand": "Royal Canin",
        //                     "numOfPurchase": 10,
        //                     "color":null,
        //                     "size":null
        //             },
        //             "quantity":2
        //     }]
    
    // } 
       
          console.log('params confirm checkout ', params)
          dispatch(actions.confirmCheckOut(params, () => {
              console.log('confirm checkout successsssssss---------');
              localStorage.removeItem('ValueInLocalStorage3');
              
              props.history.push({pathname: '/checkoutSuccess', state: 'checkoutSuccess'})
          }))

    }

   



    return (
        <>
            <TopBar history={props.history} />
            <CategoriesItem />
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
                                        <div className="col-lg-6">
                                            <div className="checkout__input">
                                                <p>Họ<span>*</span></p>
                                                <input type="text" value = {lastName} onChange = { e => setLastName(e.target.value)} />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="checkout__input">
                                                <p>Tên<span>*</span></p>
                                                <input type="text" value = {firstName} onChange = { e => setFirstName(e.target.value)} />
                                            </div>
                                        </div>
                                    </div>
                                    {/* <div className="checkout__input">
                                        <p>Country<span>*</span></p>
                                        <input type="text" />
                                    </div> */}
                                    <div className="checkout__input">
                                        <p>Địa chỉ<span>*</span></p>
                                        <input type="text" value = {address} onChange = { e => setAddress(e.target.value)} placeholder="Số nhà/ đường" className="checkout__input__add" />
                                    </div>
                                    <div className="checkout__input">
                                        <p>Thành phố<span>*</span></p>
                                        <input type="text" value = {town} onChange = { e => setTown(e.target.value)} placeholder="Thành phố" className="checkout__input__add" />
                                    </div>

                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="checkout__input">
                                                <p>Số điện thoại<span>*</span></p>
                                                <input type="text" value = {phoneNum} onChange = { e => setPhoneNum(e.target.value)} />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="checkout__input">
                                                <p>Email<span>*</span></p>
                                                <input type="text" value = {email} onChange = { e => setEmail(e.target.value)} />
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
                                        <input type="text" value = {note} onChange = { e => setNote(e.target.value)} placeholder="Ghi chú " />
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="checkout__order">
                                        <h4>Đơn hàng của bạn</h4>
                                        <div className="checkout__order__products">Sản phẩm <span>Đơn giá</span></div>
                                        <ul>
                                            <li>Vegetable’s Package <span>$75.99</span></li>
                                            <li>Fresh Vegetable <span>$151.99</span></li>
                                            <li>Organic Bananas <span>$53.99</span></li>
                                        </ul>
                                        {/* <div className="checkout__order__subtotal">Subtotal <span>$750.99</span></div> */}
                                        <div className="checkout__order__total">Tổng cộng <span>$750.99</span></div>
                                        <div className="checkout__input__checkbox">
                                            <label htmlFor="acc-or">
                                                Tạo tài khoản?
                  <input type="checkbox" id="acc-or" />
                                                <span className="checkmark" />
                                            </label>
                                        </div>
                                        <p style={{ fontFamily: 'Roboto,sanf-serif' }}>Trở thành thành viên của all4pet để nhận được những ưu đãi hấp dẫn nhé!</p>
                                        <div style={{ fontSize: 16, fontStyle: 'bold', marginTop: 15, marginBottom: 15 }}>
                                            <label>
                                                Chọn phương thức thanh toán
                                            </label>
                                        </div>
                                        <div className="checkout__input__checkbox">
                                            <label htmlFor="payment">
                                                Ship COD
                  <input type="checkbox" id="payment" />
                                                <span className="checkmark" />
                                            </label>
                                        </div>
                                        <div className="checkout__input__checkbox">
                                            <label htmlFor="paypal">
                                                Thanh toán bằng momo
                  <input type="checkbox" id="paypal" />
                                                <span className="checkmark" />
                                            </label>
                                        </div>
                                        <button onClick={confirmCheckOut}  className="site-btn">ĐẶT HÀNG</button>
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
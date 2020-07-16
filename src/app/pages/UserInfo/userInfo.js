import React, { useState, useEffect } from 'react'
import { TopBar, CategoriesBar, CategoriesItem, Loader, Footer, Input } from '../../Components';
import { useDispatch } from 'react-redux';
import { actions, selectors } from '../services';
import { FormatNumber } from '../../utils/formatNumber';
import PaypalExpressBtn from 'react-paypal-express-checkout';
import moment from 'moment';



const UserInfo = (props) => {
    const dispatch = useDispatch();

    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [phoneNum, setPhoneNum] = useState('')
    const [birthDay, setBirthday] = useState('')
    const [email, setEmail] = useState('');
    const [userId, setUserId] = useState('');
    const [popup, setPopup] = useState(false)

    const token = localStorage.getItem('loginToken');

    useEffect(() => {
        token && dispatch(actions.showProfile(null, (data) => {
            // console.log('data showprofile', data)
            setName(data.name);
            setAddress(data.address);
            setPhoneNum(data.phoneNumber);
            setEmail(data.userEntity.email);
            setUserId(data.userEntity.id);
            setBirthday(data.birthday);

        }))
    }, [])

    const checkData = () => {
        return name && address && phoneNum && email;
    }

    const updateInfo = () => {

        let params = {
            name: name,
            address: address,
            phoneNumber: phoneNum,
            userId: userId,
            birthday: Date.parse(birthDay)
        }

        dispatch(actions.updateInfo(params, () => {
            setPopup(true)
        }))
    }


    console.log('birth day ====================', birthDay.substring(0,10))


    return (
        <>
            <TopBar history={props.history} />
            <CategoriesItem history={props.history} />
            <section className="checkout spad">
                <div className="container">
                    {/* <div className="row">
                        <div className="col-lg-12">
                            <h6><span className="icon_tag_alt" /> Have a coupon? <a href="#">Click here</a> to enter your code
        </h6>
                        </div>
                    </div> */}
                    { popup ? <div style = {{display: 'flex', flexDirection: 'row', borderWidth: 1, borderColor: 'green', borderRadius: 10, borderStyle: 'solid', padding: 10, marginBottom: 10}}> <i style = {{color: 'green', marginTop: 2, marginRight: 10  }} className="fa fa-check-circle" aria-hidden="true"></i>
                        <p style = {{color: 'green'}}> Thông tin tài khoản của bạn đã được cập nhật thành công </p></div> : null}
                    <div className="checkout__form">
                        <h4>Thông tin tài khoản</h4>
                        <div>
                            <div className="row">
                                <div className="col-lg-8 col-md-6">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="checkout__input">
                                                <p>Họ tên<span>*</span></p>
                                                <input style={{ color: 'black' }} type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Họ và tên người nhận" />
                                            </div>
                                        </div>

                                    </div>
                                    {/* <div className="checkout__input">
                                        <p>Country<span>*</span></p>
                                        <input type="text" />
                                    </div> */}
                                    <div className="checkout__input">
                                        <p>Địa chỉ<span>*</span></p>
                                        <input type="text" style={{ color: 'black' }} value={address} onChange={e => setAddress(e.target.value)} placeholder="Số nhà/ đường" className="checkout__input__add" />
                                    </div>


                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="checkout__input">
                                                <p>Số điện thoại<span>*</span></p>
                                                <input type="text" style={{ color: 'black' }} value={phoneNum} onChange={e => setPhoneNum(e.target.value)} />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="checkout__input">
                                                <p>Email<span>*</span></p>
                                                <input type="text" style={{ color: 'black' }} value={email} onChange={e => setEmail(e.target.value)} />
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
                                        <p>Ngày sinh<span>*</span></p>
                                        <input type="date" style={{ color: 'black' }} value={birthDay.substring(0,10)} onChange={e => setBirthday(e.target.value)} placeholder="Ghi chú " />
                                    </div>

                                    <div style={{ marginBottom: 30, marginTop: 30 }}>
                                        <button onClick={updateInfo} className='site-btn'>Cập nhật thông tin</button>
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

export default UserInfo;
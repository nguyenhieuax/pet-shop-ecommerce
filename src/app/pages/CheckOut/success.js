import React, { Component } from 'react'
import { Switch, Route, Link } from "react-router-dom";

import { TopBar, Footer, NotFoundPage } from '../../Components'
import { icons } from '../../assets/icons';
import { useSelector } from 'react-redux';
import { actions, selectors } from '../services';
import { FormatNumber } from '../../utils/formatNumber';

const CheckoutSuccess = (props) => {


    const onBackHome = () => {
        props.history.push({pathname: '/'})
    }
    const billDetails = useSelector(state => selectors.confirmCheckOut(state))
    console.log('billDetails ------------', billDetails);

    return (
        <>
            {billDetails && billDetails.billCode ?
                <div className='col-lg-12 col-md-12'>
                    <TopBar />
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'space-around', marginTop: 30, marginBottom: 30 }}>
                        <div>
                            <img style={{ height: 50, width: 50 }} src={icons.check}></img>
                        </div>
                        <div style={{ fontSize: 20, paddingLeft: 10, }}>
                            Thanh toán đơn hàng thành công!
                        </div>


                    </div>
                    <div className="paymentDetails">
                        <div style={{ marginLeft: '30%', fontSize: 20, paddingLeft: 10, fontWeight: 'bold' }}>Thông tin đơn hàng</div>
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '60%', marginLeft: '30%' }}>
                            <div style={{ flex: 1, fontSize: 15, paddingLeft: 10 }} >
                                Mã đơn hàng:
                            </div>
                            <div style={{ flex: 1, fontSize: 15, paddingLeft: 10, fontWeight: 'bold' }} >
                                {billDetails.billCode}
                            </div>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '60%', marginLeft: '30%' }}>
                            <div style={{ flex: 1, fontSize: 15, paddingLeft: 10 }} >
                                Địa chỉ giao hàng:
                            </div>
                            <div style={{ flex: 1, fontSize: 15, paddingLeft: 10, fontWeight: 'bold' }} >
                                {billDetails.address}
                            </div>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '60%', marginLeft: '30%' }}>
                            <div style={{ flex: 1, fontSize: 15, paddingLeft: 10 }} >
                                Email nhận thông tin:
                            </div>
                            <div style={{ flex: 1, fontSize: 15, paddingLeft: 10, fontWeight: 'bold' }} >
                                {billDetails.email}
                            </div>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '60%', marginLeft: '30%' }}>
                            <div style={{ flex: 1, fontSize: 15, paddingLeft: 10 }} >
                                Phương thức thanh toán:
                            </div>
                            <div style={{ flex: 1, fontSize: 15, paddingLeft: 10, fontWeight: 'bold' }} >
                                {billDetails.paymentMethod}
                            </div>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '60%', marginLeft: '30%' }}>
                            <div style={{ flex: 1, fontSize: 15, paddingLeft: 10 }} >
                                Tên người nhận:
                            </div>
                            <div style={{ flex: 1, fontSize: 15, paddingLeft: 10, fontWeight: 'bold' }} >
                                {billDetails.receiver}
                            </div>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '60%', marginLeft: '30%' }}>
                            <div style={{ flex: 1, fontSize: 15, paddingLeft: 10 }} >
                                Số điện thoại người nhận:
                            </div>
                            <div style={{ flex: 1, fontSize: 15, paddingLeft: 10, fontWeight: 'bold' }} >
                                {billDetails.phonenumber}
                            </div>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '60%', marginLeft: '30%', marginBottom: 50 }}>
                            <div style={{ flex: 1, fontSize: 15, paddingLeft: 10 }} >
                                Số tiền thanh toán:
                            </div>
                            <div style={{ flex: 1, fontSize: 15, paddingLeft: 10, fontWeight: 'bold' }} >
                                {FormatNumber(billDetails.totalMoney)}
                            </div>
                        </div>

                        <div style = {{justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
                        <button style = {{marginTop: 30, marginBottom: 30}} onClick={onBackHome}  className="site-btn">Về trang chủ</button>
                        </div>

                    </div>


                    <Footer />
                </div> : <NotFoundPage  {...props} />}

        </>

    )
}

export default CheckoutSuccess;
import React, { useEffect, useState } from 'react';
import { images } from '../../assets/images/';
import { TopBar, ProductItem, CategoriesItem, Loader, Footer } from "../../Components";
import { useDispatch } from 'react-redux';
import { selectors, actions } from "../services";
import Axios from 'axios';


const Login = (props) => {
  const dispatch = useDispatch();

  const [username, setUsername] = useState('')

  const [password, setPassword] = useState('')

  const login = () => {
    let params = {
      userName: 'customer18',
      password: 'customer'
    }
    // dispatch(actions.login(params))
    Axios.post('http://localhost:5000/login', {}, {
      "Access-Control-Allow-Origin": "*",
      'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS'
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <>
      <TopBar />
      <div className="limiter">
        <div className="container-login100">
          <div className="wrap-login100">
            <div className="login100-pic js-tilt" data-tilt>
              <img src={images.image_login} alt="IMG" />
            </div>
            <div className="login100-form validate-form">
              <span className="login100-form-title">
                Đăng nhập
        </span>
              <div className="wrap-input100 validate-input" data-validate="Vui lòng nhập email dạng: ex@abc.xyz">
                <input value={username} onChange={(e) => setUsername(e.target.value)} className="input100" type="text" name="username" placeholder="Tài khoản" />
                <span className="focus-input100" />
                <span className="symbol-input100">
                  <i className="fa fa-envelope" aria-hidden="true" />
                </span>
              </div>
              <div className="wrap-input100 validate-input" data-validate="Vui lòng nhập mật khẩu">
                <input value={password} onChange={(e) => setPassword(e.target.value)} className="input100" type="password" name="pass" placeholder="Mật khẩu" />
                <span className="focus-input100" />
                <span className="symbol-input100">
                  <i className="fa fa-lock" aria-hidden="true" />
                </span>
              </div>
              <div className="container-login100-form-btn">
                <button className="login100-form-btn" onClick={login}>
                  Đăng nhập
          </button>
              </div>
              <div className="text-center p-t-12">
                <span className="txt1">
                  {'Quên '}
                </span>
                <a className="txt2" href="#">
                  Tên đăng nhập / Mật khẩu?
          </a>
              </div>
              <div className="text-center p-t-136">
                <a className="txt2" href="#">
                  Tạo tài khoản
            <i className="fa fa-long-arrow-right m-l-5" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>

  )
}

export default Login;

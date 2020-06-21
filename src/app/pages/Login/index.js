import React, { useEffect, useState } from 'react';
import { images } from '../../assets/images/';
import { TopBar, ProductItem, CategoriesItem, Loader, Footer } from "../../Components";
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectors, actions } from "../services";
import SignUpSuccess from './signUpSuccess';

const Login = (props) => {
  console.log('props login ==================', props)
  const dispatch = useDispatch();
  const [signUp, setSignUp] = useState(0);

  useEffect(() => {
    console.log('state sign up --------------', signUp)
  }, [signUp])


  const [username, setUsername] = useState('')

  const [password, setPassword] = useState('')

  const [confirmPass, setConfirmPass] = useState('')

  const [email, setEmail] = useState('')

  const [signUpSuccess, setsignUpSuccess] = useState(false)

  const textInput = React.createRef();

  const login = () => {

    if (username === '') {
      setUsername(null);
    }

    if (password === '') {
      setPassword(null);
    }

    let params = {
      userName: username,
      password: password
    }

    let onSuccess = (data) => {
      if (data[0]) {
        localStorage.setItem('loginToken', data);
        localStorage.setItem('username', username);
        dispatch(actions.showCart())
        localStorage.removeItem('ValueInLocalStorage3');
        props.history.goBack();
      }
    }
    username && password && dispatch(actions.login(params, onSuccess))

  }

  const onSignUp = () => {
    // setsignUpSuccess(true);
    if (username === '') {
      setUsername(null);
    }

    if (password === '') {
      setPassword(null);
    }
    if (confirmPass === '') {
      setPassword(null);
    }
    if (email === '') {
      setPassword(null);
    }

    let params =
    {
      userName: username,
      password: password,
      confirmPassword: confirmPass,
      email: email
    }

    let onSuccess = (data) => {
      console.log('sign up successsssssss----')
      data && setsignUpSuccess(true);
    }
    username && password && confirmPass && email && dispatch(actions.signUp(params, onSuccess))

  }

  const renderLogin = () => {
    return (
      <>
        <div className="login100-form validate-form">
          <span className="login100-form-title">
            Đăng nhập
        </span>
          <div className="wrap-input100 validate-input" data-validate="Vui lòng nhập email dạng: ex@abc.xyz">
            <input ref={textInput} value={username} onChange={(e) => setUsername(e.target.value)} className="input100" type="text" name="username" placeholder="Tài khoản" />
            <span className="focus-input100" />
            <span className="symbol-input100">
              <i className="fa fa-envelope" aria-hidden="true" />
            </span>
          </div>
          {username === null && <span style={{ marginLeft: 20, fontSize: 14, color: 'red' }} >Vui lòng nhập tài khoản</span>}

          <div style={{ marginTop: 10 }} className="wrap-input100 validate-input" data-validate="Vui lòng nhập mật khẩu">
            <input value={password} onChange={(e) => setPassword(e.target.value)} className="input100" type="password" name="pass" placeholder="Mật khẩu" />
            <span className="focus-input100" />
            <span className="symbol-input100">
              <i className="fa fa-lock" aria-hidden="true" />
            </span>
          </div>
          {password === null && <span style={{ marginLeft: 20, fontSize: 14, color: 'red' }} >Vui lòng nhập mật khẩu</span>}

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

            <button onClick={() => setSignUp(1)} className="txt2">
              Tạo tài khoản
                    <i className="fa fa-long-arrow-right m-l-5" aria-hidden="true" />
            </button>
          </div>
        </div>

      </>
    )

  }

  const renderSignUp = () => {
    return (
      <>
        <div className="login100-form validate-form">
          <span className="login100-form-title">
            Đăng ký
      </span>
          <div className="wrap-input100 validate-input" data-validate="Vui lòng nhập email dạng: ex@abc.xyz">
            <input ref={textInput} value={username} onChange={(e) => setUsername(e.target.value)} className="input100" type="text" name="username" placeholder="Tài khoản" />
            <span className="focus-input100" />
            <span className="symbol-input100">
              <i className="fa fa-envelope" aria-hidden="true" />
            </span>
          </div>
          {username === null && <span style={{ marginLeft: 20, fontSize: 14, color: 'red' }} >Vui lòng nhập tài khoản</span>}

          <div style={{ marginTop: 10 }} className="wrap-input100 validate-input" data-validate="Vui lòng nhập mật khẩu">
            <input value={password} onChange={(e) => setPassword(e.target.value)} className="input100" type="password" name="pass" placeholder="Mật khẩu" />
            <span className="focus-input100" />
            <span className="symbol-input100">
              <i className="fa fa-lock" aria-hidden="true" />
            </span>
          </div>
          {password === null && <span style={{ marginLeft: 20, fontSize: 14, color: 'red' }} >Vui lòng nhập mật khẩu</span>}
          <div style={{ marginTop: 10 }} className="wrap-input100 validate-input" data-validate="Vui lòng nhập mật khẩu">
            <input value={confirmPass} onChange={(e) => setConfirmPass(e.target.value)} className="input100" type="password" name="pass" placeholder="Xác nhận mật khẩu" />
            <span className="focus-input100" />
            <span className="symbol-input100">
              <i className="fa fa-lock" aria-hidden="true" />
            </span>
          </div>
          {password === null && <span style={{ marginLeft: 20, fontSize: 14, color: 'red' }} >Vui lòng xác nhận mật khẩu</span>}
          <div style={{ marginTop: 10 }} className="wrap-input100 validate-input" data-validate="Vui lòng nhập mật khẩu">
            <input value={email} onChange={(e) => setEmail(e.target.value)} className="input100" type="email" name="email" placeholder="Email" />
            <span className="focus-input100" />
            <span className="symbol-input100">
              <i className="fa fa-envelope" aria-hidden="true" />
            </span>
          </div>
          {password === null && <span style={{ marginLeft: 20, fontSize: 14, color: 'red' }} >Vui lòng nhập Email</span>}

          <div className="container-login100-form-btn">
            <button className="login100-form-btn" onClick={onSignUp}>
              Đăng ký
        </button>
          </div>
          {/* <div className="text-center p-t-12">
            <span className="txt1">
              {'Quên '}
            </span>
            <a className="txt2" href="#">
              Tên đăng nhập / Mật khẩu?
        </a>
          </div> */}
          <div className="text-center p-t-136">

            <button onClick={() => setSignUp(0)} className="txt2">
              Đăng nhập ngay
                  <i className="fa fa-long-arrow-right m-l-5" aria-hidden="true" />
            </button>
          </div>
        </div>

      </>
    )

  }
  return (
    <>
      <TopBar />
      <SignUpSuccess
        showModal={signUpSuccess}
        handleClose={() => {
          console.log('handle close ==========>')
          setsignUpSuccess(false);
          setSignUp(0);
          setUsername('');
          setPassword('');
          setConfirmPass('');
          setEmail('');
        }}
      />
      <div className="limiter">
        <div className="container-login100">
          <div className="wrap-login100">
            <div className="login100-pic js-tilt" data-tilt>
              <img src={images.image_login} alt="IMG" />
            </div>
            {signUp ? renderSignUp() : renderLogin()}
          </div>
        </div>
      </div>
      <Footer />
    </>

  )
}

export default Login;

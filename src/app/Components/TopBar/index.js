import React, { useState, useEffect } from "react";
import "./index.css";
import { Switch, Route, Link } from "react-router-dom";
import { icons } from '../../assets/icons'
import { useDispatch, useSelector } from "react-redux";
import { selectors, actions } from "../../pages/services";

export const TopBar = (props) => {

  const onClickLabelDog = () => {
    props.history.push({ pathname: "/dog-shop", state: { name: 'dog', type: 0 } });

  }
  const onClickLabelCat = () => {
    props.history.push({ pathname: "/cat-shop", state: { name: 'cat', type: 0 } });

  }

  const onClickSubLabelDog = (type) => {
    console.log('type on topbar ==========', type)
    props.history.push({ pathname: "/dog-shop", state: { name: 'dog', type: type } });

  }
  const onClickSubLabelCat = (type) => {
    console.log('type on topbar ==========', type)
    props.history.push({ pathname: "/dog-shop", state: { name: 'cat', type: type } });

  }

  const onClickLabelFish = () => {
    props.history.push({ pathname: "/fish-shop", state: { name: 'fish', type: 0 } });
  }
  const onClickLabelHamster = () => {
    props.history.push({ pathname: "/hamster-shop", state: { name: 'hamster', type: 0 } });
  }
  const onClickLabelBird = () => {
    props.history.push({ pathname: "/bird-shop", state: { name: 'bird', type: 0 } });
  }
  const onClickLabelBlog = () => {
    props.history.push({ pathname: "/blog", state: { name: 'bird', type: 0 } });
  }

  const dispatch = useDispatch();


  const listValue = JSON.parse(localStorage.getItem('ValueInLocalStorage3')) || [];

  const username = localStorage.getItem('username') || '';

  const [usernameInStorage, setUsernameInStorage] = useState(username);

  console.log('username in storage ----------', usernameInStorage);

  const [showLoginBar, setShowLoginBar] = useState(false)

  const ulLoginStyle = {
    display: 'block',
    backgroundColor: '#ffffff',
    // marginLeft: 30,
    zIndex: 1100,
    position: 'absolute'
  }

  const liLoginStyle = {
    textAlign: 'left',
    fontSize: 16,
    width: 150,
    paddingLeft: 10,
    paddingTop: 3,
    paddingBottom: 3
  }

  const logOut = () => {
    console.log('remove item in storage ---------------')
    localStorage.removeItem('username', null);
    localStorage.removeItem('loginToken', null);
    setUsernameInStorage(null);
  }

  const renderUsername = () => {
    return (
      <div>
        <Link onClick = {() => setShowLoginBar(!showLoginBar)} style={{ marginRight: 50, fontWeight: 'bold' }}>
          <i style={{ color: '#57b846' }} className="fa fa-user" /> {usernameInStorage}
        </Link>
        <ul style={ showLoginBar ? ulLoginStyle : {display: 'none'}}>
          <li style={liLoginStyle} >
            <Link>
              Tài khoản của tôi
            </Link>
          </li>
          <li style={liLoginStyle}>
            <Link>
              Thông báo
            </Link>
          </li>
          <li style={liLoginStyle}>
            <Link>
              Đơn hàng của tôi
            </Link>
          </li>
          <li  onClick = {logOut}  style={liLoginStyle}>
            <Link >
              Đăng xuất
            </Link>
          </li>
        </ul>
      </div>
    )
  }
  return (
    <header style={{ zIndex: 997, backgroundColor: '#57b846' }} className="header">
      <div className="header__top">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="header__top__left">
                <ul>
                  <li>
                    <i className="fa fa-envelope" /> all4pet@xyz.com
                    </li>
                  <li>Miễn phí giao hàng cho đơn hàng trên 500,000vnđ</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="header__top__right">
                <div className="header__top__right__social">
                  <a href="#">
                    <i className="fa fa-facebook" />
                  </a>
                  <a href="#">
                    <i className="fa fa-twitter" />
                  </a>
                  <a href="#">
                    <i className="fa fa-linkedin" />
                  </a>
                  <a href="#">
                    <i className="fa fa-pinterest-p" />
                  </a>
                </div>
                {/* <div className="header__top__right__language">
                    <img src="img/language.png" alt='true' />
                    <div>English</div>
                    <span className="arrow_carrot-down" />
                    <ul>
                      <li>
                        <a href="#">English</a>
                      </li>
                      <li>
                        <a href="#">Tiếng Việt</a>
                      </li>
                    </ul>
                  </div> */}
                <div className="header__top__right__auth">
                  {usernameInStorage ? renderUsername() : <Link to="/login">
                    <i className="fa fa-user" /> Đăng nhập
                    </Link>}

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div className="header__logo">
              <Link to="/">
                <img style = {{height: '80%', width: '80%', marginTop: 5}} className="logo_img" src="img/logo1.png" alt='true' />
              </Link>
            </div>
          </div>
          <div className="col-lg-6">
            <nav className="header__menu">
              <ul>
                <li>
                  <Link to="/">Nhãn Hiệu</Link>
                  <ul className="header__menu__dropdown">
                    <li>
                      <Link to="/product-detail">8in1</Link>
                    </li>
                    <li>
                      <a href="./shoping-cart.html">Bayer </a>
                    </li>
                    <li>
                      <a href="./checkout.html">Davis</a>
                    </li>
                    <li>
                      <a href="./blog-details.html">Nutrition</a>
                    </li>
                  </ul>
                </li>
                <li >
                  <div onClick={onClickLabelDog}>
                    <Link to="/dog-shop" >Chó </Link>
                  </div>
                  <ul className="header__menu__dropdown">
                    <li onClick={() => onClickSubLabelDog('food')}>
                      <Link to="/dog-shop">Thức ăn</Link>
                    </li>
                    <li onClick={() => onClickSubLabelDog('accessory')}>
                      <Link to="/dog-shop">Đồ chơi phụ kiện</Link>
                    </li>
                    <li onClick={() => onClickSubLabelDog('clothing')}>
                      <Link to="/dog-shop">Quần áo trang sức</Link>
                    </li>
                    <li onClick={() => onClickSubLabelDog('cage')}>
                      <Link to="/dog-shop">Chuồng, dụng cụ vệ sinh</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <div onClick={onClickLabelCat}>
                    <Link to="/cat-shop">Mèo</Link>

                  </div>
                  <ul className="header__menu__dropdown">
                    <li onClick={() => onClickSubLabelCat('food')}>
                      <Link to="/cat-shop">Thức ăn</Link>
                    </li>
                    <li onClick={() => onClickSubLabelCat('accessory')}>
                      <Link to="cat-shop">Đồ chơi phụ kiện</Link>
                    </li>
                    <li onClick={() => onClickSubLabelCat('clothing')}>
                      <Link to="/cat-shop">Quần áo trang sức</Link>
                    </li>
                    <li onClick={() => onClickSubLabelCat('cage')}>
                      <Link to="/cat-shop">Chuồng, dụng cụ vệ sinh</Link>
                    </li>
                  </ul>
                </li>
                <li onClick={onClickLabelBlog}  >
                  <Link to="/bird-shop">Blog</Link>
                </li>
                <li>
                  <Link to="/product-detail">Vật nuôi khác</Link>
                  <ul className="header__menu__dropdown">
                    <li onClick={onClickLabelBird} >
                      <Link to="/bird-shop">Chim</Link>
                    </li>
                    {/* <li onClick={onClickLabelHamster}>
                        <Link to="/hamster-shop">Hamster</Link>
                      </li> */}
                    <li onClick={onClickLabelFish}>
                      <Link to="/fish-shop">Cá cảnh</Link>
                    </li>

                  </ul>
                </li>
              </ul>
            </nav>
          </div>
          <div className="col-lg-3">
            <div className="header__cart">
              <ul>
                <li style = {{marginRight: 30}}>
                  <a href="#">
                    <img style={{ height: 30, width: 30 }} src={icons.heart}></img> <span>3</span>
                  </a>
                </li>
                <li>
                  <Link to='/cart' >
                    <img style={{ height: 30, width: 30 }} src={icons.cart}></img> <span>{listValue.length}</span>
                  </Link>
                </li>
              </ul>
              {/* <div className="header__cart__price">
                  item: <span>$150.00</span>
                </div> */}
            </div>
          </div>
        </div>
        <div className="humberger__open">
          <i className="fa fa-bars" />
        </div>
      </div>

    </header>
  );
};

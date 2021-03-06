import React, { useEffect, useState } from "react";
import LazyLoad from 'react-lazyload'

import "./index.css";
import {
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation,
} from "react-router-dom";
import { FormatNumber } from '../../utils/formatNumber';
import SignUpSuccess from './signUpSuccess';


export const ProductItem = (props) => {

  useEffect(() => {
  }, [])

  const setBackGround = (imgUrl) => {
    return {
      backgroundImage: "url(" + imgUrl + ")"
    };
  };
  // let history = useHistory()
  const onClickItem = (data) => {
    console.log('onclick background 0000', data)

    props.history.push({ pathname: "/product-detail", state: data.id });

  };

  // const listValue = JSON.parse(localStorage.getItem('ValueInLocalStorage3')) || [];

  // const [listItemStorage, setListItemStorage] = useState(listValue)

  const [signUpSuccess, setsignUpSuccess] = useState(false)


  return (
    <>
      <div
        className={props.size ? props.size : "col-lg-3 col-md-4 col-sm-6 mix oranges fresh-meat"}
      // }
      >
              <SignUpSuccess
                showModal={signUpSuccess}
                handleClose={() => {
                  setsignUpSuccess(false);
                }}
              />

        <div className="featured__item">
          <div
            className="featured__item__pic set-bg "
          // style={setBackGround(props.url)}
          >

            <div onClick={() => onClickItem(props)}
              style={{ position: 'absolute', height: '75%', width: '100%' }}>
              <LazyLoad>
                <img className='lazyload' src={props.url} />
              </LazyLoad>

            </div>
            <ul className="featured__item__pic__hover">
              {/* <li>
                <a href="#">
                  <i className="fa fa-heart" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-retweet" />
                </a>
              </li> */}
              <li onClick = {() => setsignUpSuccess(true)}>
                <button style={{ zIndex: 10 }} onClick={props.addToCart} href="#">
                  <i style={{ fontSize: 25 }} className="fa fa-cart-plus" />
                </button>
              </li>
            </ul>
          </div>
          <div className="featured__item__text">
            <h6 style={{ fontSize: 14, height: 60 }}>
              <a href="#">{props.name}</a>
            </h6>
            <h5 style={{ color: 'red' }}>{`${FormatNumber(props.price)}đ`}
            </h5>
            <h6 style={{ color: '#555555', textDecorationLine: "line-through", textDecorationStyle: "solid", textDecorationColor: "#555555" }}>
              {`${FormatNumber(props.price + (props.price * props.promotion * 0.01))}đ`}
            </h6>
          </div>
        </div>
      </div>
    </>
  );
};

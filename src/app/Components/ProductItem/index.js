import React, { useEffect } from "react";
import "./index.css";
import {
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation,
} from "react-router-dom";
import { FormatNumber } from '../../utils/formatNumber'

export const ProductItem = (props) => {

  useEffect(() => {
  }, [])

  const setBackGround = (imgUrl) => {
    return { backgroundImage: "url(" + imgUrl + ")" };
  };
  // let history = useHistory()
  const onClickItem = (data) => {
    console.log('props in product detail', data)

    props.history.push({ pathname: "/product-detail", state: data.id});

  };

  return (
    <Route >
      <div
        className= { props.size ? props.size : "col-lg-3 col-md-4 col-sm-6 mix oranges fresh-meat"}
        onClick={() => onClickItem(props)}
      // }
      >
        <div className="featured__item">
          <div
            className="featured__item__pic set-bg"
            style={setBackGround(props.url)}
          >
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
              <li>
                <a href="#">
                  <i style = {{fontSize: 25}} className="fa fa-cart-plus" />
                </a>
              </li>
            </ul>
          </div>
          <div className="featured__item__text">
            <h6 style = {{fontSize: 14, height: 45}}>
              <a href="#">{props.name}</a>
            </h6>
            <h5 style = {{color: 'red'}}>{`${FormatNumber(props.price)}đ`}</h5>
          </div>
        </div>
      </div>
    </Route>
  );
};

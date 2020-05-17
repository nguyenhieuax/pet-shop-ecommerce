import React, {useEffect} from "react";
import "./index.css";
import {
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation,
} from "react-router-dom";

export const ProductItem = (props) => {

  useEffect(() => {
  }, [])

  const setBackGround = (imgUrl) => {
    return { backgroundImage: "url(" + imgUrl + ")" };
  };
  // let history = useHistory()
  const onClickItem = () => {
    props.history.push("/product-detail");
  };

  return (
    <Route >
    <div
      className="col-lg-2 col-md-4 col-sm-6 mix oranges fresh-meat"
      onClick={onClickItem}
      // }
    >
      <div className="featured__item">
        <div
          className="featured__item__pic set-bg"
          style={setBackGround(props.url)}
        >
          <ul className="featured__item__pic__hover">
            <li>
              <a href="#">
                <i className="fa fa-heart" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-retweet" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-shopping-cart" />
              </a>
            </li>
          </ul>
        </div>
        <div className="featured__item__text">
          <h6>
            <a href="#">{props.name}</a>
          </h6>
          <h5>{props.price}</h5>
        </div>
      </div>
    </div>
    </Route>
  );
};

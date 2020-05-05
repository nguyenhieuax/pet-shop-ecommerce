import React from "react";
import "./index.css";
import { Switch, Route, Link } from "react-router-dom";

export const ProductItem = (props) => {
  const setBackGround = (imgUrl) => {
    return { backgroundImage: "url(" + imgUrl + ")" };
  };

  // const onClickItem = () => {
  //   <Link to = "/item-456" />

  // }

  return (
    <Route path = {`item-${props.id}`}>
      <div className="col-lg-3 col-md-4 col-sm-6 mix oranges fresh-meat" 
      // onClick = {() =>onClickItem(props.id)
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

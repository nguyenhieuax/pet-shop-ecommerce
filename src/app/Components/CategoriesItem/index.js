import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link, Route } from "react-router-dom";
import { Navbar } from 'react-bootstrap';
import { set } from "immutable";
import './index.css'

export const CategoriesItem = () => {

  const [listItemStyle, setListItemStyle] = useState({
    display: 'none'
  })

  const liStyle = {
    textAlign: 'left', color: 'black', marginTop: 10, marginBottom: 10, fontWeight: 'bold', fontSize: 16, marginLeft: 30
  }
  const ulStyle = {
    display: 'block',
    zIndex: 10,
    position: 'absolute',
    background: '#f5f5f5',
    width: '90%',
  }

  return (
    <Navbar style={{ backgroundColor: '#FFFFFF', paddingTop: 10, paddingBottom: -10, zIndex: 999 }}  sticky="top">

      {/* <div>
      <section className="hero"> */}
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="col-lg-3">
              <div className="show">
                <div onMouseEnter={() => setListItemStyle(ulStyle)}
                  onMouseLeave={() => setListItemStyle({ display: 'none' })}
                  className="hero__categories__all">
                  <i className="fa fa-bars" />
                  <span>Danh mục</span>
                </div>
                <ul
                  onMouseEnter={() => setListItemStyle(ulStyle)}
                  onMouseLeave={() => setListItemStyle({ display: 'none' })}
                  style={listItemStyle} className="listItem">
                  <li style={liStyle}><Link to={{ pathname: "/dog-shop", state: { name: 'dog', type: 0 } }} >Shop cho chó</Link></li>
                  <li style={liStyle}><Link to={{ pathname: "/cat-shop", state: { name: 'cat', type: 0 } }} >Shop cho mèo</Link></li>
                  <li style={liStyle}><Link to={{ pathname: "/fish-shop", state: { name: 'fish', type: 0 } }} >Shop cho cá</Link></li>
                  <li style={liStyle}><Link to={{ pathname: "/bird-shop", state: { name: 'bird', type: 0 } }} >Shop cho chim</Link></li>
                  {/* <li style={liStyle}><Link to={{ pathname: "/hamster-shop", state: { name: 'hamster', type: 0 } }} >Shop cho hamster</Link></li> */}
                </ul>
              </div>
            </div>
            <div className="hero__search col-lg-9">
              <div className="hero__search__form col-lg-8">
                <form style={{ borderColor: 'red' }} action="#">
                  {/* <div className="hero__search__categories">
                      All Categories
                      <span className="arrow_carrot-down" />
                    </div> */}
                  <input type="text" placeholder="Bạn cần mua gì?" />
                  <button type="submit" className="site-btn">
                    TÌM KIẾM
                    </button>
                </form>
              </div>
              <div className="hero__search__phone col-lg-4">
                <div className="hero__search__phone__icon">
                  <i className="fa fa-phone" />
                </div>
                <div className="hero__search__phone__text">
                  <h5>+65 11.188.888</h5>
                  <span>Hỗ trợ 24/7</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
      {/* </section>
    </div> */}
    </Navbar>

  );
};

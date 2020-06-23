import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link, Route } from "react-router-dom";
import { Navbar } from 'react-bootstrap';
import './index.css'
import { useDispatch, useSelector } from 'react-redux';
import Search from '../Search'
import { selectors, actions } from "../../pages/services";

export const CategoriesItem = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    console.log('getting listproduct =====================')
    dispatch(actions.getListProduct());

  }, [])


  const [searchedData, setSearchedData] = useState([]);

  const [inputWidth, setInputWidth] = useState(0);

  const [listItemStyle, setListItemStyle] = useState({
    display: 'none'
  })

  const liStyle = {
    textAlign: 'left', color: 'black', marginTop: 10, marginBottom: 10, fontWeight: 'bold', fontSize: 15, marginLeft: 30
  }
  const ulStyle = {
    display: 'block',
    zIndex: 10,
    position: 'absolute',
    background: '#f5f5f5',
    width: '90%',
  }

  const listProduct = useSelector(state => selectors.getListProduct(state)) || []

  const transformListProduct = () => {
    let data = [];
    listProduct.length && listProduct.map(item => data.push(...item.listProducts));
    return data;
  }

  const searchedStyle =
  {
    display: 'block', zIndex: 100, backgroundColor:
      '#ffffff', position: 'absolute', top: 50, width: '82%', border: '1px solid #E5E5E5'
  }

  const divLiStyle = {marginTop: 5, marginBottom: 5, borderBottomWidth: 1,}


  return (
    <Navbar style={{ backgroundColor: '#FFFFFF', paddingTop: 10, paddingBottom: -10, zIndex: 999 }} sticky="top">

      {/* <section className="hero"> */}
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-12 col-sm-12">
            <div className="showaaa">
              <div onMouseEnter={() => setListItemStyle(ulStyle)}
                onMouseLeave={() => setListItemStyle({ display: 'none' })}
                className="hero__categories__all"
              >
                <i className="fa fa-bars" />
                <span >Danh mục</span>
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
          <div className="hero__search col-lg-9 col-md-12 col-sm-12">

            <div className='search_bar'>
              <div className="hero__search__form col-12">
                <Search
                  data={transformListProduct()}
                  searchedData={data => setSearchedData(data)}
                  inputWidth={width => setInputWidth(width)}
                />
              </div>

              <ul
                style={searchedData.length ? searchedStyle: null}
              >
                {searchedData.length ? searchedData.map((item, index) => index <12 ?
                <div style = {divLiStyle}  key ={item[0]}>
                  <Link to = {{
                    pathname: '/search-result',
                    state: searchedData
                  }} style={liStyle}>{item[1]}</Link>
                </div> : null) : null}

              </ul>

            </div>



            {/* <div className="hero__search__phone col-lg-3">
                <div className="hero__search__phone__icon">
                  <i className="fa fa-phone" />
                </div>
                <div className="hero__search__phone__text">
                  <h5>+65 11.188.888</h5>
                  <span>Hỗ trợ 24/7</span>
                </div>
              </div> */}
          </div>
        </div>
      </div>
      {/* </section> */}
    </Navbar >

  );
};

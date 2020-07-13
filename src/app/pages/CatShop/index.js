import React, { useEffect, useState } from "react";
import { Switch, Route, Link } from "react-router-dom";
import { SaleItem, ProductItem, CategoriesItem, TopBar, LeftBarItem, Footer } from '../../Components';
import { useDispatch, useSelector } from 'react-redux'
import { selectors, actions } from "../services";


const CatShop = (props) => {
  const dispatch = useDispatch()
  const [Name, setName] = useState();
  const [listData, setlistData] = useState([]);

  const  type  = props.location.state? props.location.state.type :  0 ;

  useEffect(() => {

    console.log('type of product -------------------------', type)
    if( type === 0) {
      dispatch(actions.getProductByName('cat', (data) => {
        setlistData(data[0].listProducts)
      }));
      setName('cat');
    } else {
      dispatch(actions.getProductByNameAndType({name: 'cat', type}, (data) =>{
        setlistData(data[0].listProducts)

      }));
      setName('cat');
    }

  }, [type])

  const listPriceData = [
    {
      id: 1,
      title: 'Dưới 50 ngàn'
    },
    {
      id: 2,
      title: '50 ngàn - 100 ngàn'
    },
    {
      id: 3,
      title: '100 ngàn - 200 ngàn'
    },
    {
      id: 4,
      title: '200 ngàn - 500 ngàn'
    },
    {
      id: 5,
      title: 'Trên 500 ngàn'
    },
  ];

  const listBrandData = [
    {
      id: 6,
      title: 'abc'
    },
    {
      id: 7,
      title: '123ngonngon'
    },
    {
      id: 8,
      title: 'nutrition'
    },
    {
      id: 9,
      title: 'leuleu55'
    },
    {
      id: 10,
      title: 'mlem mlem'
    },
  ]

  const StorageItem = JSON.parse(localStorage.getItem('ValueInLocalStorage3')) || [];

  const [listStorageItem, setListStorageItem] = useState(StorageItem)

  const addToCart = (item) => {
    console.log('onclick button add to cart ---------------')
    let buyItem = { productEntity: item, quantity: 1 }

    let mergeListStorage = listStorageItem.map(product => product.productEntity.id === item.id ? {
      productEntity: product.productEntity,
      quantity: product.quantity += 1
    } : product) || [];

    let itemExist = listStorageItem.find(product => product.productEntity.id === item.id) || null;

    let _listStorageItem = itemExist === null ? listStorageItem.concat(buyItem) : mergeListStorage;
    localStorage.setItem('ValueInLocalStorage3', JSON.stringify(_listStorageItem));
    setListStorageItem(_listStorageItem);

    // dispatch(actions.addToCart(item.id))
  }

  const renderItem = (item) => {
    const { history } = props;
    return (
      <ProductItem
        url={`${item.url}`}
        name={item.name}
        price={item.price}
        promotion = {item.promotion}
        id={item.id}
        history={history}
        key={`${item.id}`}
        addToCart={() => addToCart(item)}

        size="col-lg-3 col-md-6 col-sm-6 mix oranges fresh-meat"
      />
    )
  }

  const onClickType = (type) => {
    if( type === 0) {
      let name = 'dog';
      dispatch(actions.getProductByName(name, (data => {
        setlistData(data[0].listProducts)

      })));
    } else {
      dispatch(actions.getProductByNameAndType({name: Name, type}, (data) => {
        setlistData(data[0].listProducts)
      }));
    }
  }

  return (
    <>
      <TopBar history={props.history} />
      <CategoriesItem


      />
      <div>

        {/* Hero Section End */}
        {/* Breadcrumb Section Begin */}
        {/* <section
          className="breadcrumb-section set-bg"
          data-setbg="img/breadcrumb.jpg"
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <div className="breadcrumb__text">
                  <h2>Organi Shop</h2>
                  <div className="breadcrumb__option">
                    <a href="./index.html">Home</a>
                    <span>Shop</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        {/* Breadcrumb Section End */}
        {/* Product Section Begin */}
        <section className="product spad">
          <div className="container">
            <div className="row">
              <LeftBarItem
               onClickType={onClickType}
               listPrice = {listPriceData}
               listBrand = {listBrandData}
               itemData = {listData}
              />
              <div className="col-lg-9 col-md-7">
                {/* <div className="product__discount">
                  <div className="section-title product__discount__title">
                    <h2>Sale Off</h2>
                  </div>
                  <div className="row">
                    <SaleItem />
                    <SaleItem />
                    <SaleItem />
                  </div>

                </div> */}
                <div className="filter__item">
                  <div className="row">
                    <div className="col-lg-4 col-md-5">
                      <div className="filter__sort">
                        <span>Sort By</span>
                        <select>
                          <option value={0}>Default</option>
                          <option value={0}>Default</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4">
                      <div className="filter__found">
                        <h6>
                        Tìm thấy <span> {listData.length } </span> sản phẩm
                        </h6>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-3">
                      <div className="filter__option">
                        <span className="icon_grid-2x2" />
                        <span className="icon_ul" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  {/* filter__item */}

                  {listData.map(item => renderItem(item))}

                </div>
                {/* <div className="product__pagination">
                  <a href="#">1</a>
                  <a href="#">2</a>
                  <a href="#">3</a>
                  <a href="#">
                    <i className="fa fa-long-arrow-right" />
                  </a>
                </div> */}
              </div>
            </div>
          </div>
        </section>
        <Footer />

      </div>

    </>
  );
};

export default CatShop;
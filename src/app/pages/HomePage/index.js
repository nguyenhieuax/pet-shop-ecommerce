import React, { useEffect, useState } from "react";
import LazyLoad from 'react-lazyload'
import { icons } from '../../assets/icons/index';

import "./index.css";
import { connect } from "react-redux";
import { Switch, Route, Link } from "react-router-dom";
import { selectors, actions } from "../services";
import { TopBar, ProductItem, CategoriesItem, Loader, Footer } from "../../Components";
import { useDispatch, useSelector } from 'react-redux'
import Modal from 'react-modal';
import useWindowDimensions from '../../utils/useWindowDimensions';


const HomePage = (props) => {


  const { height, width } = useWindowDimensions();

  const token = localStorage.getItem('loginToken');

  const StorageItem = JSON.parse(localStorage.getItem('ValueInLocalStorage3')) || [];

  const [listStorageItem, setListStorageItem] = useState(StorageItem)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.getTopProduct());

  }, [])


  const addToCart = (item) => {
    let buyItem = { productEntity: item, quantity: 1 }

    let mergeListStorage = listStorageItem.map(product => product.productEntity.id === item.id ? {
      productEntity: product.productEntity,
      quantity: product.quantity += 1
    } : product) || [];

    let itemExist = listStorageItem.find(product => product.productEntity.id === item.id) || null;

    let _listStorageItem = itemExist === null ? listStorageItem.concat(buyItem) : mergeListStorage;
    localStorage.setItem('ValueInLocalStorage3', JSON.stringify(_listStorageItem));
    setListStorageItem(_listStorageItem);

    token && dispatch(actions.addToCart(item.id))
  }


  const renderProductItem = (item) => {
    const { history } = props;
    return (
      <ProductItem
        url={`${item.url}`}
        name={item.name}
        price={item.price}
        promotion={item.promotion}
        id={item.id}
        history={history}
        key={`${item.id}`}
        addToCart={() => addToCart(item)}
      />
    )
  }

  const listProduct = useSelector(state => selectors.getListProduct(state)) || [] ;
  const topProduct = useSelector(state => selectors.getTopProduct(state)) || [];


 
  const { history } = props;
  const dogProduct = listProduct.filter(item => item.categoryName ==='dog');
  const catProduct = listProduct.filter(item => item.categoryName ==='cat');
  const topProductDog = topProduct && topProduct.length ? topProduct[0].listProducts : [];
  // const topProductCat = topProduct && topProduct.length ? topProduct[1].listProducts : [];

  const _dogProduct = dogProduct[0] ? dogProduct[0].listProducts : [];
  const _catProduct = catProduct[0] ? catProduct[0].listProducts : [];

  return (
    <>
      <TopBar history={history} />
      <CategoriesItem history ={props.history} history={history} />

      {/* Hero Section End */}
      {/* Categories Section Begin */}

      {/* Categories Section End */}
      {/* Featured Section Begin */}
      {/* {listProduct && listProduct.length ? */}
      <>
        <div className="container">

          <div className="col-lg-12">

            <div
              className="hero__item set-bg col-lg-12"
              style={

                width > 550 ? { backgroundImage: `url(${'/img/banner-min.webp'})` } : { backgroundImage: `url(${'/img/small_banner2.jpg'})` }
              }
            >
              {/* <img src=''></img> */}
              <div className="hero__text">
                <span >ĐỊA ĐIỂM ƯA THÍCH CỦA NGƯỜI YÊU THÚ CƯNG</span>
                {/* <h2>
                  Chào mừng bạn đến với cửa hàng thú cưng All4pet <br />
                  </h2> */}
                {/* <p>Miễn phí giao hàng toàn quốc</p> */}

              </div>
            </div>
          </div>
        </div>
        <section className="featured spad">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title">
                  <h2>Sản phẩm nổi bật</h2>
                </div>
              
              </div>
            </div>
            <div className="row featured__filter">
              {topProductDog.map((item, index) => index < 4 ? renderProductItem(item) : null)}

            </div>
          </div>
        </section>

        <section className="featured spad">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title">
                  <h2>Sản phẩm cho chó</h2>
                </div>
          
              </div>
            </div>
            <div className="row featured__filter">
              {dogProduct.length ? _dogProduct.map((item, index) => index < 8 ? renderProductItem(item) : null) : null}

            </div>
          </div>
        </section>

        <section className="featured spad">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title">
                  <h2>Sản phẩm cho mèo</h2>
                </div>
                
              </div>
            </div>
            <div className="row featured__filter">
              {catProduct.length ? _catProduct.map((item, index) => index < 8 ? renderProductItem(item) : null) : null}


            </div>
          </div>
        </section>

        {/* Latest Product Section End */}
        {/* Blog Section Begin */}
        <section className="from-blog spad">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title from-blog__title">
                  <h2>Blog thú cưng</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-6">
                <div className="blog__item">
                  <div className="blog__item__pic">
                    <LazyLoad>
                      <img alt="crop-product" style={{ height: 240 }} src="https://www.puppytip.com/wp-content/uploads/2017/10/how-to-get-your-dog-to-eat-dog-food-again.jpg" />
                    </LazyLoad>
                  </div>
                  <div className="blog__item__text">
                    <ul>
                      <li>
                        <i className="fa fa-calendar-o" /> 28/06/2020
                      </li>
                      <li>
                        <i className="fa fa-comment-o" /> 0
                      </li>
                    </ul>
                    <h5>
                      <Link to="/blog-one">
                        Cẩm nang chọn thức ăn cho chó nhỏ khoa học nhất
                      </Link>
                    </h5>
                    <p>
                      Thức ăn cho chó nhỏ cần phải chọn mua thế nào cho hợp lý? Những giống chó nhỏ cần được chăm sóc và ăn theo chế độ dinh dưỡng đặc biệt để chúng có được sức khỏe tốt nhất
                      </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6">
                <div className="blog__item">
                  <div className="blog__item__pic">
                    <LazyLoad>
                      <img alt="crop-item" style={{ height: 240 }} src="https://hoiyeumeo.vn/public/upload/images/figopetinsurance.jpg" />

                    </LazyLoad>
                  </div>
                  <div className="blog__item__text">
                    <ul>
                      <li>
                        <i className="fa fa-calendar-o" /> 29/06/2019
                      </li>
                      <li>
                        <i className="fa fa-comment-o" /> 0
                      </li>
                    </ul>
                    <h5>
                      <Link to='blog-two'>Vì sao mèo sợ nước?</Link>
                    </h5>
                    <p>
                      Tại sao mèo sợ nước? Nghe qua đây có vẻ là một câu hỏi mà hiển nhiên tất cả chúng ta ai cũng đều có câu trả lời. Bản năng
                      </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6">
                <div className="blog__item">
                  <div className="blog__item__pic">
                    <LazyLoad>
                      <img alt="crop-item" style={{ height: 240 }} src="https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/articles/health_tools/people_foods_cats_can_eat_slideshow/thinkstock_rf_photo_of_cat_with_fish_plate.jpg" />
                    </LazyLoad>
                  </div>
                  <div className="blog__item__text">
                    <ul>
                      <li>
                        <i className="fa fa-calendar-o" /> 27/06/2020
                      </li>
                      <li>
                        <i className="fa fa-comment-o" /> 0
                      </li>
                    </ul>
                    <h5>
                      <Link to='blog-three'>Cách làm pate cho mèo thật ngon tại nhà</Link>
                    </h5>
                    <p>
                      Cách làm pate cho mèo sao cho ngon, hợp khẩu vị cho mèo như thế nào? Chắc hẳn khi bạn mới nuôi mèo, bạn luôn muốn dành thời gian nhiều để chăm sóc mèo cưng của mình
                      </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Blog Section End */}
        {/* Footer Section Begin */}

        <Footer />
      </>
     
    </>
  );

}


export default HomePage;

import React, { Component, lazy, Suspense } from "react";
import { Switch, Route } from 'react-router-dom'
import { Loader } from './app/Components';
// import "./App.css";
// import HomePage from "../src/app/pages/HomePage";
// import ProductDetail from '../src/app/pages/ProductDetail'
// import DogShop from './app/pages/DogShop'
import ScrollToTop from '../src/app/utils/scrollToTop';
// import Cart from './app/pages/Cart';
// import CatShop from "./app/pages/CatShop";
// import FishShop from "./app/pages/FishShop";
// import BirdShop from "./app/pages/BirdShop";
// import HamsterShop from "./app/pages/HamsterShop";
// import CheckOut from './app/pages/CheckOut';
// import Blog from './app/pages/Blog'
// import CheckoutSuccess from './app/pages/CheckOut/success'
// import Login from "./app/pages/Login";
// import SearchResult from './app/pages/SearchResult';
import { Blog1, Blog2, Blog3 } from './app/Components/BlogData';

const HomePage = lazy(() => import('./app/pages/HomePage'));
const ProductDetail = lazy(() => import('../src/app/pages/ProductDetail'));
const DogShop = lazy(() => import('./app/pages/DogShop'));
const CatShop = lazy(() => import('./app/pages/CatShop'));
const Cart = lazy(() => import('./app/pages/Cart'));
const FishShop = lazy(() => import('./app/pages/FishShop'));
const BirdShop = lazy(() => import('./app/pages/BirdShop'));
const HamsterShop = lazy(() => import('./app/pages/HamsterShop'));
const CheckOut = lazy(() => import('./app/pages/CheckOut'));
const Blog = lazy(() => import('./app/pages/Blog'));
const CheckoutSuccess = lazy(() => import('./app/pages/CheckOut/success'));
const Login = lazy(() => import('./app/pages/Login'));
const SearchResult = lazy(() => import('./app/pages/SearchResult'));
const UserInfo = lazy(() => import('./app/pages/UserInfo/userInfo'));


class App extends Component {

  render() {
    return (
      <Route>
        <Suspense fallback={<Loader />}>

          <Switch>
            <ScrollToTop>
              <Route exact path="/" component={HomePage} />
              <Route path="/product-detail" component={ProductDetail} />
              <Route path="/dog-shop" component={DogShop} />
              <Route path="/cat-shop" component={CatShop} />
              <Route path="/fish-shop" component={FishShop} />
              <Route path="/bird-shop" component={BirdShop} />
              <Route path="/hamster-shop" component={HamsterShop} />
              <Route path="/check-out" component={CheckOut} />
              <Route path="/blog" component={Blog} />
              <Route path='/checkoutSuccess' component={CheckoutSuccess} />
              <Route path="/cart" component={Cart} />
              <Route path="/login" component={Login} />
              <Route path="/search-result" component={SearchResult} />
              <Route path="/user-info" component={UserInfo} />
              <Route path="/blog-one" component={Blog1} />
              <Route path="/blog-two" component={Blog2} />
              <Route path="/blog-three" component={Blog3} />
            </ScrollToTop>
          </Switch>
        </Suspense>
      </Route>

    );
  }
}

export default App;

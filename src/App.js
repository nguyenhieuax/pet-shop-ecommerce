import React, { Component } from "react";

// import "./App.css";
import HomePage from "../src/app/pages/HomePage";
import ProductDetail from '../src/app/pages/ProductDetail'
import DogShop from './app/pages/DogShop'
import { Switch, Route } from 'react-router-dom'
import ScrollToTop from '../src/app/utils/scrollToTop';
import Cart from './app/pages/Cart';
import CatShop from "./app/pages/CatShop";
import FishShop from "./app/pages/FishShop";
import BirdShop from "./app/pages/BirdShop";
import HamsterShop from "./app/pages/HamsterShop";
import CheckOut from './app/pages/CheckOut';
import Blog from './app/pages/Blog'
import CheckoutSuccess from './app/pages/CheckOut/success'
import Login from "./app/pages/Login";
import SearchResult from './app/pages/SearchResult';
import { Blog1, Blog2, Blog3 } from './app/Components/BlogData'

class App extends Component {

  render() {
    return (
      <Switch>
        <ScrollToTop>

          <Route exact path="/" component={HomePage} />
          <Route path="/product-detail" render={(props) => <ProductDetail {...props} />} />
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
          <Route path="/blog-one" component={Blog1} />
          <Route path="/blog-two" component={Blog2} />
          <Route path="/blog-three" component={Blog3} />
        </ScrollToTop>
      </Switch>

    );
  }
}

export default App;

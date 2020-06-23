import React, { Component } from "react";

import "./App.css";
import HomePage from "../src/app/pages/HomePage";
import ProductDetail from '../src/app/pages/ProductDetail'
import DogShop from './app/pages/DogShop'
import { Switch, Route } from 'react-router-dom'
import  ScrollToTop  from '../src/app/utils/scrollToTop';
import Cart from './app/pages/Cart';
import CatShop from "./app/pages/CatShop";
import FishShop from "./app/pages/FishShop";
import BirdShop from "./app/pages/BirdShop";
import HamsterShop from "./app/pages/HamsterShop";
import CheckOut from './app/pages/CheckOut';
import Blog from './app/pages/Blog'
import CheckoutSuccess from './app/pages/CheckOut/success'
import  Login from "./app/pages/Login";
import SearchResult from './app/pages/SearchResult';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: "",
    };
  }
  handleText = (event) => {
    console.log(event.target.value);
    this.setState({
      keyword: event.target.value,
    });
  };

  render() {
    return (
      <>
      <ScrollToTop>
        <Route exact path="/" component={HomePage} />        
        <Route path="/product-detail" render = {(props) => <ProductDetail {...props} />} />
        <Route path="/dog-shop" component={DogShop} />
        <Route path="/cat-shop" component={CatShop} />
        <Route path="/fish-shop" component={FishShop} />
        <Route path="/bird-shop" component={BirdShop} />
        <Route path="/hamster-shop" component={HamsterShop} />
        <Route path="/check-out" component={CheckOut} />
        <Route path="/blog" component={Blog} />
        <Route path = '/checkoutSuccess' component = {CheckoutSuccess} />
        <Route path="/cart" component={Cart} />
        <Route path="/login" component={Login} />
        <Route path="/search-result" component={SearchResult} />
        
        
        </ScrollToTop>
      </>

      // <HomePage />
    );
  }
}

export default App;

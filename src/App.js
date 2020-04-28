import React, { Component } from "react";

import "./App.css";
import HomePage from "../src/app/pages/HomePage";
import ProductDetail from '../src/app/pages/ProductDetail'
import { Switch, Route } from 'react-router-dom'

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
        <Route exact path="/" component={HomePage} />        
        {/* <Route path="/product-detail" component={ProductDetail} />         */}
      </>

      // <HomePage />
    );
  }
}

export default App;

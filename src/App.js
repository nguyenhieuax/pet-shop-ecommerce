import React, { Component } from 'react';

import './App.css';
import HomePage from '../src/app/pages/HomePage'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      keyword: ''
    }
  }
  handleText = (event) => {
    console.log(event.target.value)
    this.setState({
      keyword: event.target.value
    })
  }



  render() {
    return (

      <HomePage />

    );
  }
}


export default App;

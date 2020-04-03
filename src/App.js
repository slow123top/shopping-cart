import React, { Component } from 'react';
import './App.css';
import CartMenu from './menu/Menu.js';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  render() {
    return (
      <div className="App" >
        <CartMenu />
        {/* <h3>asdasdas</h3> */}
      </div>
    );
  }
}

export default App;

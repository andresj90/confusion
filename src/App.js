import React, { Component } from 'react';
import logo from './logo.svg';
import {Navbar, NavbarBrand} from 'reactstrap';
import './App.css';

//component
class App extends Component{
  render() {
    return (
    //react element, smallest fragment
    <div className="App">
      <Navbar className="navbar" dark color="primary">
         <div className="container">
          <NavbarBrand className="navbarbrand" href="/">Ristorante Con Fusion</NavbarBrand>
         </div>
      </Navbar>
    </div>
  
  );
  }
}

const element = (
  <h1>Hello world</h1>
)

export default App;

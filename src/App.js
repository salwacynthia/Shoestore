import React, {Component} from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom'; 

import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './Component/Navbar';
import ProductList from './Component/ProductList';
import Modal from './Component/Modal';
import Cart from './Component/Cart';
import Details from './Component/Details';
import Default from './Component/Default';
import About from './Component/About';
import Services from './Component/Services';



class App extends Component {
  render() {    
    return (
      <React.Fragment>
          <Navbar/>
        <BrowserRouter>
        {/* wrao the switch with browser router */}
          <Switch>
          {/* exact path because jate / thaklei home e na jay */}
           
            <Route exact path = "/" component = {ProductList}/>
            <Route path = "/about" component = {About} /> 
            <Route path = "/details" component = {Details}/>
            <Route path = "/cart" component = {Cart}/>
            <Route path = "/services" component = {Services}/>
            <Route component = {Default}/>
          </Switch>
         <Modal/>
        </BrowserRouter>
     
       </React.Fragment>
      );
    }
}

export default App;

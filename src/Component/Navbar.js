import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import cart from '../cart.png';
import { ButtonContainer } from "./Button";
import Cart from './Cart';
// import styled from "styled-components";


class Navbar extends Component {
    render() {
      return (
       
        <div className="container" id ="navbar"> 
        <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">
            <img src= "image/logo3.png"alt= "logo"></img>
        </a>
        <button class="navbar-toggler"
         type="button" data-toggle="collapse" 
         data-target="#navbarText" aria-controls="navbarText"
         aria-expanded="false" aria-label="Toggle navigation">
         <span class="navbar-toggler-icon"> 
         </span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/about">About us</a>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link" href="/">Products</a>
            </li> */}
            <li className="nav-item">
              <a className="nav-link" href="/services"> Our Services</a>
            </li>
          </ul>
          
          {/* <ButtonContainer> */}
          <span className="navbar-text"> My Cart 
          <i href='/cart' class="fas fa-cart-arrow-down">
           </i>
       
          </span>

          {/* </ButtonContainer> */}
         
        </div>
      </nav>
        </div>
      );
      
    }
  }


  export default Navbar;
  

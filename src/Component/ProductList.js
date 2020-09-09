import React, {Component} from 'react';
import Product from './Product';
import Title from './Title';
// import {storeProducts} from "../data";
import {ProductConsumer} from "../context";
import Carousal from './Carousal';
import Footer from './Footer';

export default class ProductList extends Component{
    // state ={
    //     products:storeProducts
    // };
    render(){
     return(
        <React.Fragment>
            <div className="py-5">
                <div className="container">
                        <Carousal/>
                    <Title name="" title="Our collection for you"/>
                    <div className="row">
                       <ProductConsumer>
                           {(value)=>{
                             return value.products.map(product =>{
                                 return <Product key={product.id}
                                  product = {product}
                                  />;
                             });
                           }}
                       </ProductConsumer>
                    
                    </div>

                    <Footer/>
                </div>

            </div>
        </React.Fragment> 
       
            );
    }
}

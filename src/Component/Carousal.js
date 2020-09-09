import React, { Component } from "react";

export default class Carousal extends Component {
    render () {
        return (
                <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
            
                    <div className="carousel-item active">
                    <img className="d-block w-100" 
                    src= "image/cover1.png" 
                    alt="First slide" 
                    style={{height:400+'px'}}
                    />
                     <div class="carousel-caption d-none d-md-block">
                         <h4><b>Genuine Leather</b></h4>        
                     </div>
                    </div>
            
                    <div className="carousel-item">
                    <img className="d-block w-100" 
                    src= "image/cover2.png" 
                    alt="Second slide" 
                    style={{height:400+'px'}}
                    />
                     <div class="carousel-caption d-none d-md-block">
                         <h4><b>Fashion meets Comfort</b></h4>        
                     </div>
                    </div>
                    <div className="carousel-item">
                    <img className="d-block w-100" 
                    src= "image/cover4.png" 
                    alt="First slide" 
                    style={{height:400+'px'}}
                    />
                     <div class="carousel-caption d-none d-md-block">
                         <h4><b>Be in style</b></h4>        
                     </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
                </div>
            );
        }
    }








    

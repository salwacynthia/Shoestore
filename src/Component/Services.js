import React, { Component } from "react";



export default class Services extends Component {
render () {
    return (

        <div className="container" style={{display:'flex', flexDirection:'row', justifyContent:'center', justifyItems:'center' }}>

            <div className="card" style={{width: 18 + 'rem', fontStyle: "bold", marginTop:"100px", marginRight:"20px"}}>
            <div className="card-body">
                <h5 className="card-title"> <b>Customer Satisfaction</b></h5>
                <p className="card-text">Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park
                actually green juice sriracha paleo. Brooklyn sriracha semiotics, 
                DIY coloring book mixtape craft beer</p>
            </div>
            </div>

            <div className="card" style={{width: 18 + 'rem', fontStyle: "bold", marginTop:"100px", marginRight:"20px"}}>
            <div className="card-body">
                <h5 className="card-title"> <b>Easy Return</b></h5>
                <p className="card-text">Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park
                actually green juice sriracha paleo. Brooklyn sriracha semiotics, 
                DIY coloring book mixtape craft beer</p>
            </div>
            </div>

            <div className="card" style={{width: 18 + 'rem', fontStyle: "bold", marginTop:"100px", marginRight:"20px"}}>
            <div className="card-body">
                <h5 className="card-title"> <b>Membership Discount</b></h5>
                <p className="card-text">Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park
                actually green juice sriracha paleo. Brooklyn sriracha semiotics, 
                DIY coloring book mixtape craft beer</p>
            </div>
            </div>
        </div>
  );
}
}

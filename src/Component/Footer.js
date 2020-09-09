import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div className="class navbar-fixed-bottom" style={{display:"flex",  backgroundColor:"#aebacf", color:"black", height:"200px"}}>
                <div className="box1" style={{marginRight:20 +"px"}}>

                    <ul style={{marginTop:50 + "px"}}> 
                        <li>Follow us:</li>
                        <li href="url">Twitter</li>
                        <li href="#">Instagram</li>
                        <li href="#">Facebook</li>
                    </ul>
                </div>

                <div className="box2" style={{marginLeft: 100+"px", marginRight:20 +"px"}}>
                <ul style={{marginTop:50 + "px"}}>
                        <li href="#">Shoe Size Calculator</li>
                        <li href="#">Newsletter</li>
                        <li href="#">Career</li>
                        <li href="#">Blog</li>
                </ul>
                </div>
            </div>
        )
    }
}

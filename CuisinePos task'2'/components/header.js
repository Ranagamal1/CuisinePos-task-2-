import React, { Component } from "react";
import './StyleSheet1.css';
import logo from './cuisine.png';


class header extends Component {
    render() {
    return (
       <div className="App">
            <header className="header">
     
              <img src={logo} className="im" alt="logo" />
              <div className="dropdown">
            <button className="dropbtn">Mode:Takeaway</button>
       <div className="dropdown-content">
        <a  className="link">Mode:Takeaway</a>
         <a lassName="link">Mode:order</a>
         <a className="link">Mode:Delivery</a>
         </div>
           </div>
           <button class="btn2  ">Admin</button>
            <button class="btn2  ">Order Queue</button>
</header>
</div>
 );
            }
            }
export default header;
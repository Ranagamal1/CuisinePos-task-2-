import React, { Component } from "react";
import './StyleSheet1.css';

class left extends Component {
     render() {
    return (
<div className="container1">
     <div className="left1">
       <label className="lb"> Date: 16/07/2018</label>
       <label className="lb">   Hour: 12:53:31 PM</label>
       <label className="lb">  Minimum Charge: 0.00</label>
         <b className="bold"> Takeaway #100</b>
         <b className="bb">Cashier: Ahmed salom</b>
         <button className="btn3 white bigrounded"> <b>Customer name</b> </button>
     <div></div>
         <div className="bar">
             <label className="lab40">Qty</label>
           <label className="lab90">Item</label>
             <label className="lab90">Size</label>
             <label className="lab40">Each</label>
           <label className="lab40">Total</label>
         </div>
         <label className="labcenter">No Items currently in Order </label>
         <div className="content">
              <button className="whitebtn"><b>+</b></button>
             <div className="container-fluid">
                 <div className="row">
                      
             <button className="flash"><span><b>&#9889;</b></span><p className="fastcash">Fast Cash</p>
           </button>
                         </div>
                      
             <label className="lb2">Discounts:0.00</label><br />
              <label className="lb2">Subcharges:0.00</label><br />
              <label className="lb2">Tax:0.00</label>
                         </div>
                      
                         <label className="red"> Total:  50.00</label><br />
                        <label className="black"> Balance Due:  50.00</label>
                          
             <hr />
              <button id="button1"className="white4-bigrounded4 "><span id="span1"><b>&#935;</b></span><p id="p1">Cancel Order</p>
           </button>
              <button id="button2"className="white4-bigrounded4 "><span id="span2"><b>&#37;</b></span><p id="p2">Discount Order</p>
           </button>
              <button id="button3"className="white4-bigrounded4 "><span id="span3"><b>&#9200;</b></span><p id="p3">Hold Order</p>
           </button>
              <button id="button4"className="white4-bigrounded4 "><span id="span4"><b>&#36;</b></span><p id="p4">Pay</p>
           </button>
         </div>
         </div>
         </div>
);
}
}
export default left;
import React, { Component } from "react";
import './StyleSheet1.css';

class right extends Component {
    constructor(props) {
       super(props);
        this.show = this.show.bind(this);
    }
    show() {
        document.getElementById('btns2').style.display='block';
    }
     render() {
    return (
     <div class="right">
          <div className="container">

             <div className="form-group">
               <div className="icon"id="md">
                   <input type="text" placeholder="&#128269; Search Item" className="form-control" id="search" />
                  
               </div>
           </div>
      
      
     
  <div className="table1">
         <div className="navbar"id="navbar1">
 <div className="dropdown2">
  <a className="dropbtn2">Food</a>
   <div className="dropdown-content2">
        <div className="navbar"id="navbar2">
          <a className="aa-a1" onclick={this.show}><label className="aa">Bread</label></a>
         <a className="aa-a2"id="two"onclick={this.show}"><label className="aa">Pasts</label></a>
         <a className="aa-a3"id="three"onclick={this.show}"><label className="aa">Pizza</label></a>
          <a className="aa-a4"id="four"onclick={this.show}"><label className="aa">Soups</label></a>
       <a className="aa-a5">
              <span>&#8801;</span>                       
                   
     </a>
       <hr className="hr1"/>
      </div>
        <div id="btns1"ref="btns1">
        <button className="white55" >Bread</button>
        <button className="white55" >Bread</button>
        <button className="white55" >Bread</button>
        <button className="white55" >Bread</button>
        <button className="white55" >Bread</button><br />
        <button className="white55" >Bread</button>
        <button className="white55" >Bread</button>
        <button className="white55" >Bread</button>
        <button className="white55" >Bread</button>
        <button className="white55" >Bread</button><br />
        <button className="white55" >Bread</button>
        <button className="white55" >Bread</button>
        <button className="white55" >Bread</button>
        <button className="white55" >Bread</button>
        <button className="white55" >Bread</button><br />
        <button className="white55" >Bread</button>
        <button className="white55" >Bread</button>
        <button className="white55" >Bread</button>
        <button className="white55" >Bread</button>
        <button className="white55" >Bread</button>
           </div>
           
        <div id="btns2"ref="btns2">
        <button className="white55" >Pasta</button>
        <button className="white55" >Pasta</button>
        <button className="white55" >Pasta</button>
        <button className="white55" >Pasta</button>
        <button className="white55" >Pasta</button><br />
        <button className="white55" >Pasta</button>
        <button className="white55" >Pasta</button>
        <button className="white55" >Pasta</button>
        <button className="white55" >Pasta</button>
        <button className="white55" >Pasta</button><br />
        <button className="white55" >Pasta</button>
        <button className="white55" >Pasta</button>
        <button className="white55" >Pasta</button>
        <button className="white55" >Pasta</button>
        <button className="white55" >Pasta</button><br />
        <button className="white55" >Pasta</button>
        <button className="white55" >Pasta</button>
        <button className="white55" >Pasta</button>
        <button className="white55" >Pasta</button>
        <button className="white55" >Pasta</button>
           </div>
           
        <div id="btns3"ref="btns3">
        <button className="white55" >Pizza</button>
        <button className="white55" >Pizza</button>
        <button className="white55" >Pizza</button>
        <button className="white55" >Pizza</button>
        <button className="white55" >Pizza</button><br />
        <button className="white55" >Pizza</button>
        <button className="white55" >Pizza</button>
        <button className="white55" >Pizza</button>
        <button className="white55" >Pizza</button>
        <button className="white55" >Pizza</button><br />
        <button className="white55" >Pizza</button>
        <button className="white55" >Pizza</button>
        <button className="white55" >Pizza</button>
        <button className="white55" >Pizza</button>
        <button className="white55" >Pizza</button><br />
        <button className="white55" >Pizza</button>
        <button className="white55" >Pizza</button>
        <button className="white55" >Pizza</button>
        <button className="white55" >Pizza</button>
        <button className="white55" >Pizza</button>
           </div>
       <div id="btns4"ref="btns4">
        <button className="white55" >Soups</button>
        <button className="white55" >Soups</button>
        <button className="white55" >Soups</button>
        <button className="white55" >Soups</button>
        <button className="white55" >Soups</button><br />
        <button className="white55" >Soups</button>
        <button className="white55" >Soups</button>
        <button className="white55" >Soups</button>
        <button className="white55" >Soups</button>
        <button className="white55" >Soups</button><br />
        <button className="white55" >Soups</button>
        <button className="white55" >Soups</button>
        <button className="white55" >Soups</button>
        <button className="white55" >Soups</button>
        <button className="white55" >Soups</button><br />
        <button className="white55" >Soups</button>
        <button className="white55" >Soups</button>
        <button className="white55" >Soups</button>
        <button className="white55" >Soups</button>
        <button className="white55" >Soups</button>
           </div>
   </div>
     </div>
 <a className="white5-1">Beverage</a>
               <a className="white5-2">Marchandes</a>
                 <a className="white5-3">Meal</a>
                <a  className="white5-4">
       <span>&#8801;</span>   

     </a>
</div>
         </div>
  
              </div>
 </div>
);
}
}
export default right;
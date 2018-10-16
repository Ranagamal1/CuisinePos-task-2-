import React, { Component } from 'react';
import styles from './StyleSheet1.css';
import ReactDOM from 'react-dom';
import header from './components/header';
import left from './components/left';
import right from './components/right';

class Page extends Component {
    //constructor(props) {
    //  super(props);
    //    this.state = {
           
    
    render() {
        return (
            //header
            <header />
          ///left
             <left />
           //right
             <right />
       
    );
    }
}
React.render(<Page/>, document.getElementById('app'));

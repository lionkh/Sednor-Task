import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import NavBar from './NavBar.js';
const menu = require( './img/menu.png');

export default class Head extends Component{
    render(){
        return (
            
                <div className="description">
                <a href = {document.location.href}> <h2 className = "name">Your personal blog</h2>
                <h6>Share moments of your life</h6></a>   
               </div>
               
        )
    }
}

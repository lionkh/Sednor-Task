import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import NavBar from './../NavBar/NavBar.js';
const menu = require( './img/menu.png');
import Head from './../Head/Head.js';
import './styles.scss';

export default class Header extends Component{
    render(){
        return (
            <div className = "container">
                <Head /> 
                <a href="#" className="touchmenu"><img src = {menu}/></a>
                    <NavBar />
            </div>
        )
    }
}


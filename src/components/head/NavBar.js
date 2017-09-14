import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import NavElement from './NavElement.js';

export default class NavBar extends Component {
    render(){
        return(
            <nav className = "top-menu">
                    <ul >
                        <NavElement text = "Getting started"/>
                        <NavElement text = "About"/>
                        <NavElement text = "Contact"/>
                    </ul>
                </nav>
        )
    }
    

}
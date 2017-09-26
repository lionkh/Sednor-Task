import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './styles.scss';

export default class NavBar extends Component {
    constructor(props){
        super(props);
        this.middleScroll = this.middleScroll.bind(this); 
        this.bottomScroll = this.bottomScroll.bind(this); 
    }

    middleScroll(){
        window.scroll(0,600);
    }

    bottomScroll(){
        window.scroll(0,900);
    }



    render(){
        return(
            <nav className = "top-menu">
                    <ul>
                    <li><a className = 'active' href="#start">Getting started</a> </li>
                    <li onClick = {this.middleScroll}><a href="#about">About</a></li>
                    <li onClick = {this.bottomScroll}><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
        )
    }



}
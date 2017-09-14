import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class NavElement extends Component {
    render(){
        return(
            <li>
            <a href = '#'>{this.props.text}</a>
            </li>
        )
    }

}
import React, { Component } from 'react';
import './styles.scss';
import Header from '../Header/Header.js';


export default class Start extends Component{
    render() {
    return (

      <div>
        <Header/> 
      <h1 className = "welcome">Welcome to Invoice App!</h1>
      
      </div>

    );
  }

} 
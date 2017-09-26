import React, { Component } from 'react';
import '../../styles.scss';
import Header from '../head/Header/Header.js';
import Greeting from '../body/Greeting/Greeting.js';
import MainPage from '../body/MainPage/MainPage.js';
import Start from '../Start/start.js';

import { Router, Route, browserHistory } from 'react-router'; 



export default class App extends Component{
    render() {
    return (
      <div>
      <Router history = {browserHistory}>
        <div>
          <Route exact path="/" component= {Start} /> 
          <Route path = '/feed' component= {MainPage} />
        {/*   <Route path = '/post/:id' component= {fullPost} /> */}
        </div>
      </Router>
      </div>

    );
  }

}
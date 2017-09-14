import React, { Component } from 'react';
import '../../styles.scss';
import Header from '../head/Header.js';
import Greeting from '../body/Greeting.js';
import MainPage from '../body/MainPage.js';
import Start from '../Start/start.js';
import routes from './routes.js';
import fullPost from '../Post/fullPost.js';

import { BrowserRouter as Router, Route, browserHistory } from 'react-router-dom'; 



export default class App extends Component{
    render() {
    return (
      <div>
      <Router>
        <div>
          <Route exact path="/" component= {Start} /> 
          <Route path = '/feed' component= {MainPage} />
          <Route path = '/post/:id' component= {fullPost} />
        </div>
      </Router>
      </div>

    );
  }

}
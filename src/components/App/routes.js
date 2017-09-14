import React from 'react';
import { BrowserRouter as Router, Route, browserHistory } from 'react-router-dom'; 


import Header from '../head/Header.js';
import Greeting from '../body/Greeting.js';
import MainPage from '../body/MainPage.js';

const routes = (
    <Router>
        <Route path='/' component={Header} />
        <Route path='/greet' component={Greeting} />
        <Route path='/feed' component={MainPage} />
    </Router>
);

export default routes;  
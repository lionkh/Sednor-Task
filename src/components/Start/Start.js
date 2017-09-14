import React, { Component } from 'react';
import '../../styles.scss';
import Header from '../head/Header.js';
import Greeting from '../body/Greeting.js';

class Start extends Component{
    render(){
        return(
            <div className = "test">
                <Header />
                <Greeting />
            </div>
        )
    }
};

export default Start;
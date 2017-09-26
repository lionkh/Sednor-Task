import React, { Component } from 'react';
import '../../styles.scss';
import Header from '../head/Header/Header.js';
import Greeting from '../body/Greeting/Greeting.js';
import './styles.scss';

class Start extends Component{
    render(){
        return(
            <div className = "cover">
                <Header />
                <Greeting />
            </div>
        )
    }
};

export default Start;
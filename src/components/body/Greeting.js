import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Registration from './Registration.js';
import Signup from './Signup.js';
import About from './About.js';
const bodyimage = require('./img/bike.png');
const logo = require('./img/logo.png');
import { connect } from 'react-redux';

 class Greeting extends Component{
    constructor(props){
        super(props);
        this.state = {
            regmode: false
        };
        this.registrate = this.registrate.bind(this);
    }

    registrate(){
        document.querySelector('.greet-page').style.opacity = 0.2;
        document.querySelector('.registration').style.visibility = 'visible';
    }

    login(){
        document.querySelector('.greet-page').style.opacity = 0.2;
        document.querySelector('.signup').style.visibility = 'visible';
     
    }

    render(){
        return(
    <div>
        <div className="greet-page">
            <div className="greeting">
         
           {/*  <img src={logo} alt="logo" className = "logo"/> */}
            <h1>Start sharing the best moments of your life with new Blog</h1>
         </div>
            <div className= "main-logo2">
     
                <div className="have-account">
                        
                        <h3>If you already have an account, just <br/>sign up:</h3>
                        <div className = "reg-button" onClick = {this.login} >Sign up now</div>
                    
                 </div>

                 <div className="no-account">
                    <h3>If you don't have an acccount, create it for 3 clicks:</h3>
                        <div className = "reg-button" onClick = {this.registrate}>Create account</div>
                 </div>
         
            </div>
            {/* <ul>
                {
                    this.props.users.map((user,index)=>{
                        <li key = {index}>user</li>
                    })
                }
            </ul> */}
            
            </div>
            <Signup />
            <Registration />
            <About /> 
        </div>
        )
    }
}

function mapStateToProps(state, ownProps) {
    return {
        users: state.users
    };
}


export default connect(mapStateToProps)(Greeting);
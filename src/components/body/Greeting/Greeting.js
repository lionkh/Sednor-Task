import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Registration from './../Registraion/Registration.js';
import Signup from './../Signup/Signup.js';
const bodyimage = require('./../img/bike.png');
const logo = require('./../img/logo.png');
import { connect } from 'react-redux';
import './styles.scss';

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
    
            
            </div>
            <Signup />
            <Registration />
            <div className = 'about'>
                <span>
                This service is designed to help people sharing their life with all over the world.
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard 
                dummy text ever since the 1500s, when an unknown printer took a galley 
                of type and scrambled it to make a type specimen book. It has survived 
                not only five centuries, but also the leap into electronic typesetting, 
                remaining essentially unchanged. It was popularised in the 1960s with the 
                release of Letraset sheets containing Lorem Ipsum passages, and more recently 
                with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </span>


            </div>
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
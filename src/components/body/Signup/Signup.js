import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import  loginSubmit  from '../../../actions/userLogin';
const cancel = require('./../img/cancel.png');

class Signup extends Component{

    constructor(props){
        super(props);
        this.state = {
            login: '',
            password: '',
            freeUser: false

        };
        this.handleLoginChange = this.handleLoginChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.close = this.close.bind(this);
        this.keyLogin = this.keyLogin.bind(this);
    }

      close(){
        document.querySelector('.greet-page').style.opacity = 1;
        document.querySelector('.signup').style.visibility = 'hidden';
        document.querySelector('.login').style.background = '#FFF';
        document.querySelector('.password').style.background = '#FFF';
        this.setState({
            login: '',
            password: '',
            name: ''
        });
        
    }

    handleLoginChange(event){
        event.target.style.background = 'white';
        this.setState({
            login: event.target.value
        });
       
    }

     handlePasswordChange(event){
         event.target.style.background = 'white';
        this.setState({
            password: event.target.value
        });
    }

    handleNameChange(event){
        this.setState({
            name: event.target.value
        });
    }

    keyLogin(e){
        if(e.keyCode == 13)
            this.handleLogin();
    }

    handleLogin(){
        var user = {
            login: this.state.login.trim(),
            password: this.state.password.trim()
        };
     
         if(this.state.login.trim() == ''){
            document.querySelector('.login').style.background = 'rgba(255,51,56,0.2)';
        }

        if(this.state.password.trim() == ''){
             document.querySelector('.password').style.background = 'rgba(255,51,56,0.2)';
        }

        if(this.state.login.trim() != '' && this.state.password.trim() != ''){
         this.props.fetchLogin(user);
       }

    }
       

    render(){
        return(
            <div onKeyDown = {this.keyLogin} className="signup">
                <form action="" className = "log">
                    <h1>Enter your data:</h1>
                        <h2>Login:</h2> 
                        <input className = "login" autoFocus={true} value = {this.state.login} type="text" className="login" onChange = {this.handleLoginChange }/>
                        <br/>
                        <h2>Password:</h2> 
                        <input className = "password" value = {this.state.password} type="password" className="password" onChange = {this.handlePasswordChange}/>
                        <div className = 'submit' onClick = {this.handleLogin}>Sign up</div>
                        <img src={cancel} onClick = {this.close} alt="close" className = 'close'/>
                        </form>
                </div>
        )
    }

}



export default connect(
    (state)=>({
        users: state.users
   }), 
     dispatch=>({
       fetchLogin: (user)=>{
           dispatch(loginSubmit(user));
       },
   }) 
   
  ) (Signup);




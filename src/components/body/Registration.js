import React, { Component } from 'react';
import ReactDOM from 'react-dom';
const cancel = require('./img/cancel.png');
import { connect } from 'react-redux';
import regSubmit from '../../actions/userReg';

class Registration extends Component{

    constructor(props){
        super(props);
        this.state = {
            login: '',
            password: '',
            name: '', 
            freeUser: false

        };
        this.handleLoginChange = this.handleLoginChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleRegistrate = this.handleRegistrate.bind(this);
        this.close = this.close.bind(this);

    }

    close(){
        document.querySelector('.greet-page').style.opacity = 1;
        document.querySelector('.registration').style.visibility = 'hidden';
        document.querySelector('.reglogin').style.background = '#FFF';
        document.querySelector('.regpassword').style.background = '#FFF';
        document.querySelector('.regusername').style.background = '#FFF';
        this.setState({
            login: '',
            password: '',
            name: ''
        });
        
    }
    componentDidMount(){
       
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
        event.target.style.background = 'white';
        this.setState({
            name: event.target.value
        });
    }



    handleRegistrate(){
        
        const newUser = {
            login: this.state.login.trim(),
            password: this.state.password.trim(),
            name: this.state.name.trim()
        };

        if(this.state.login.trim() == ''){
            document.querySelector('.reglogin').style.background = 'rgba(255,51,56,0.2)';
        }

        if(this.state.password.trim() == ''){
             document.querySelector('.regpassword').style.background = 'rgba(255,51,56,0.2)';
        }
        if(this.state.name.trim() == ''){
            document.querySelector('.regusername').style.background = 'rgba(255,51,56,0.2)';
       }

        if(this.state.login.trim() != '' && this.state.password.trim() != '' && this.state.name.trim() != '' ){

            this.props.fetchRegistrate(newUser);
      
        }
 
    }

   
 
    render(){
        return(
                <div className="registration">
                <form action="" className = "reg">
                    <h1>Enter your data:</h1>
                        <h2>Login:</h2> 
                        <input className = 'reglogin'  autoFocus={true}  value = {this.state.login} type="text" onChange = {this.handleLoginChange }/>
                        <br/>
                        <h2>Password:</h2> 
                        <input className = 'regpassword' value = {this.state.password} type="password" onChange = {this.handlePasswordChange}/>
                        <h2>Your name:</h2>
                        <input className = 'regusername' value = {this.state.name} type="text" onChange = {this.handleNameChange}/>
                        <div className = 'submit' onClick = {this.handleRegistrate}>Join</div>
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
       fetchRegistrate: (user)=>{
           dispatch(regSubmit(user));
       },
   }) 
   
  ) (Registration);
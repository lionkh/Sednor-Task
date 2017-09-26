import React, { Component } from 'react';
import ReactDOM from 'react-dom';
const cancel = require('../body/img/cancel.png');
import { Link } from 'react-router-dom';
import './styles.scss';

class Post extends Component{
    render(){
        return(
            <li className = 'post'>
              
              <span className = 'title'>{this.props.title}</span> 
                <span className = 'text'>{this.props.text}</span>
                <span className = 'author'>{this.props.author}</span>
                <div className = 'edit'>Edit</div>
                <div className = 'delete'>Delete</div>
          
            </li>
        )
    }
};

export default Post;
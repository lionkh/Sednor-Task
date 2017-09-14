import React, { Component } from 'react';
import ReactDOM from 'react-dom';
const cancel = require('../body/img/cancel.png');
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class fullPost extends Component{
    render(){
        return(
            <li className = 'post'>
              <h1>Hey</h1>
               <Link to = ''> <span className = 'title'>{this.props.post.title}</span> </Link>
                <span className = 'text'>{this.props.post.text}</span>
                <span className = 'author'>{this.props.post.author}</span>
                <div className = 'edit'>Edit</div>
                <div className = 'delete'>Delete</div>
          
            </li>
        )
    }
};
const mapStateToProps = (state, ownProps) => {
    console.log(ownProps);
    alert(typeof state.posts[0].id);
    return {
        post: state.posts.find(post => post.id === ownProps.match.params.id)
    }
}

export default connect(mapStateToProps)(fullPost);
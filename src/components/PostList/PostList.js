import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Post from '../Post/Post.js';
import { connect } from 'react-redux';

class PostList extends Component{
    constructor(props){
        super(props);
        this.eachPost = this.eachPost.bind(this);
    }

    eachPost(elem,i){
        return(
            <Post author = {elem.author} key = {i} title = {elem.title} text = {elem.text}/>
        )
    }
    render(){
        return(
            <ul className = 'post-list'>{
                this.props.items.map(this.eachPost)
            }
        
        </ul>
        )
    }
};

export default connect(
    (state)=>({
        items: state.posts
    }),
    (dispatch)=>({

    })

)(PostList);
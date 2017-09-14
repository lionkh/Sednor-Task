import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Greeting from './Greeting.js';
import Head from '../head/Head.js';
import { connect } from 'react-redux';
const cancel = require('./img/cancel.png');
import addCurrentUser from '../../actions/addCurrentUser';
import delCurrentUser from '../../actions/delCurrentUser';
import addNewPost from '../../actions/addNewPost';
import PostList from '../PostList/PostList.js';
import Post from '../Post/Post.js';
const search = require('./img/search.png');
import fetchPosts from '../../actions/getPosts';


class MainPage extends Component{

    constructor(props){
        super(props);
        this.state = {
            title: '',
            text: '',
        };
        this.sendPost = this.sendPost.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);
      
    }


    componentWillMount(){
        //вызываем функцию которая вызывает экшен который 
        //диспатчит из локального хранилища в стор данные о польователе
        //а после данные берутся из стора и рендерятся на странице

        //при логауте локальное хранилище и стор очищаются

       /*  let newUser =  JSON.parse(localStorage.getItem('curUser'));
        this.props.setCurUser(newUser);
        console.log(this.returnCurUser());
        this.setState({
            author: this.returnCurUser()
        }) */

        let newUser =  JSON.parse(localStorage.getItem('curUser'));
        this.props.setCurUser(newUser);
        setTimeout(()=>{
            console.log(this.props.curUser.login);
            this.setState({
                author: this.props.curUser.login
            })
        }, 1);

        this.props.getPosts();
    }

    componentDidMount(){
       // alert(this.props.posts[0].id)
    }
    



    newPost(){
        document.querySelector('.new-post').style.visibility = 'visible';
        //document.querySelector('.post-list').style.opacity = 0.2
     
      //  document.querySelector('.main-page').style.opacity = '0.6';

    }

    close(){
        document.querySelector('.new-post').style.visibility = 'hidden';
        document.querySelector('.post-title').value = '';
        document.querySelector('.post-body').value = '';
        this.setState({
            title: '',
            text: ''
        });
    }

    sendPost(){
      
  
        //action + fetch etc
        let post = {
            author: this.state.author.trim(),
            title: this.state.title.trim(),
            text: this.state.text.trim()
        }
        this.props.addPost(post);

        document.querySelector('.new-post').style.visibility = 'hidden';
        document.querySelector('.post-title').value = '';
        document.querySelector('.post-body').value = '';
        this.setState({
            title: '',
            text: ''
        });

    }

    handleTitleChange(event){
        this.setState({
            title: event.target.value
        });
    }
    
    handleTextChange(event){
        this.setState({
            text: event.target.value
        });
    }

    logOut(){
        localStorage.removeItem('curUser');
        document.location.href = 'http://localhost:3000/';

    }



    render(){
        return(
            <div className="main-page">
            <div className="search-bar">
                <Head />
                <span className = "welcome">Welcome, {this.state.author}</span>
                <input className = "search"  type="text" placeholder = 'Search'/>
                <img className = 'search-submit' src={search} alt=""/>
                <div className="logout" onClick = {this.logOut}>Logout</div>
                
            </div>
               <div className = "add-new-post" onClick = {this.newPost} >Add new post</div>
                <div className="new-post">
                    <input onChange = {this.handleTitleChange} value = {this.state.title} className = "post-title" type="text" placeholder = 'Title'/>
                    <br/>
                    <textarea onChange = {this.handleTextChange} value = {this.state.text} className = "post-body" type="text" placeholder = 'Text'/>
                    <img src={cancel} onClick = {this.close} alt="close" className = 'close'/>
                    <div className="send-post" onClick = {this.sendPost}>Add</div>
                </div>
                <PostList />   
            </div>
        )
    }

}

export default connect(
    (state, ownProps)=>({
        curUser: state.curUsers,
        posts: state.posts,
        myProps: ownProps
   }), 
     dispatch=>({
      setCurUser: (user)=>{
          dispatch(addCurrentUser(user));
      },
      addPost: (post)=>{
        dispatch(addNewPost(post)); 
     },
     delCurUser: (user)=>{
         dispatch(delCurrentUser(user));
     },
     getPosts: ()=>{
         dispatch(fetchPosts());
     }
   })) (MainPage);
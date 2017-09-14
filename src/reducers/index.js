import { combineReducers } from 'redux';
import users from './users';
import posts from './posts';
import curUsers from './curUsers';
import { routerReducer } from 'react-router-redux';
 
var Blog = combineReducers({
    routing: routerReducer,
    users,
    curUsers,
    posts
});

export default Blog;
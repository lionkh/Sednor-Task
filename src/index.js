import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/Root';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import Blog from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import App from './components/App/App';
import { Provider } from 'react-redux';



const store = createStore(Blog, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
 <Provider store={store}>
    <App />
  </Provider>
, document.getElementById('root'));

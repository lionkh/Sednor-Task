import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import Project from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router'; 
import './styles.scss';
import Product from './components/Products/Product.js';
import ProductPage from './components/Products/ProductPage.js';
import CustomerList from './components/Customers/CustomerList.js';
import InvoicePage from './components/Invoices/InvoicePage.js';
import InvoiceEdit from './components/Invoices/InvoiceEdit.js';
import Start from './components/Start/Start.js';


const store = createStore(Project, composeWithDevTools(applyMiddleware(thunk)));


ReactDOM.render(
 <Provider store={store}>
 <Router history = {browserHistory}>
        <div>
          <Route exact path="/" component= {Start} /> 
          <Route path = '/products' component= {ProductPage} />
          <Route path = '/customers' component= {CustomerList} />
          <Route path = '/invoices' component= {InvoicePage} />
          <Route path = '/invoices/:id' component = {InvoiceEdit} />
        </div>
      </Router>
 </Provider>
, document.getElementById('root'));




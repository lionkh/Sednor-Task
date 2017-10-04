import React, { Component } from 'react';
import './styles.scss';
import { Modal, Button, Label, ListGroup, ListGroupItem } from 'react-bootstrap';
import { Router, Route, browserHistory } from 'react-router'; 
import Customer from './Customer.js';
import Header from '../Header/Header.js';
import fetchCustomers from '../../actions/getCustomers.js';
import { connect } from 'react-redux';

var testArr = [{
    name: 'Ivan',
    phone: '33'
},
{
    name: 'Iryna',
    phone: '34'
}];

class CustomerList extends Component{

    eachCustomer(cust, index){
        return (
        <ListGroupItem  key = {index} className = 'item'> 
         <Customer id = {cust.id} name = {cust.name} phone = {cust.phone}address = {cust.address}/>
        </ListGroupItem>
        )
    }

    componentWillMount(){
        this.props.getCustomers();

    }

    render() {
    return (
     <div>
    <Header />
   
    <ListGroup>
        {this.props.customers.map(this.eachCustomer)}    
    </ListGroup>
    </div>

    );
  }
}


export default connect(
    (state)=>({
       /*  display: state.displayForms.products, */
        customers: state.customers
    }),
    dispatch=>({
        /* displayForm: (display)=>{
            dispatch({type: 'SET_DISPLAY', products: display});
        }, */
        getCustomers: ()=>{
            dispatch(fetchCustomers());
        }
    })
)(CustomerList);

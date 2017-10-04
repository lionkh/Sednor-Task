import React, { Component } from 'react';
import './styles.scss';
import { Modal, Button, Label, ListGroup, ListGroupItem } from 'react-bootstrap';
import { Router, Route, browserHistory } from 'react-router'; 
import Header from '../Header/Header.js';
import { connect } from 'react-redux';
import fetchProducts from '../../actions/getProducts.js';
import Invoice from './Invoice.js';
import NewInvoice from './NewInvoice.js';
import fetchCustomers from '../../actions/getCustomers.js';
import getInvoices from '../../actions/getInvoices.js';


 class InvoicePage extends Component{
    constructor(props){
        super(props);
     
        this.addInvoice = this.addInvoice.bind(this);
        this.getCustomer = this.getCustomer.bind(this);
        this.eachInvoice = this.eachInvoice.bind(this);
    }

    componentWillMount(){
        this.props.getProducts(); 
        this.props.getCustomers();
        this.props.getInvoices();
    }

    componentDidMount(){
       
    }

    getCustomer(invoice){
            let customer = this.props.customers.find(customer=>customer.id ==invoice.customer_id);
         
            return customer;
    }
    

    eachInvoice(invoice, index){
        return (
             <ListGroupItem  key = {index} className = 'item'>
                 <Invoice id = {invoice.id} customer = {this.getCustomer(invoice)}
                  discount = {invoice.discount} total = {invoice.total}/>
             </ListGroupItem>
        )
    }


    addInvoice(){
        let display = true;
        this.props.displayForm(display);
    }

    render() {

     if(this.props.invoices.length==0){
         return(
             <div></div>
         )
     }   
     else{

    
    return (
     <div>
    <Header />
  
     {this.props.display ? 
        <NewInvoice/>
        :
        <Button onClick = {this.addInvoice} className = 'add-button' bsStyle="primary">New Invoice</Button>
    } 
  
    
    <ListGroup>
         {this.props.invoices.map(this.eachInvoice)}     
    </ListGroup>
    </div>
    );
}
  }
}

export default connect(
    (state)=>({
        display: state.displayForms.invoices,
        products: state.products,
        customers: state.customers,
        invoices: state.finalInvoices.reverse()
    }),            
    dispatch=>({
        displayForm: (display)=>{
            dispatch({type: 'SET_DISPLAY', invoices: display});
        },
        getProducts: ()=>{
            dispatch(fetchProducts());
        },
        getCustomers: ()=>{
            dispatch(fetchCustomers());
        },
        getInvoices:()=>{
            dispatch(getInvoices());
         }
    })
)(InvoicePage);

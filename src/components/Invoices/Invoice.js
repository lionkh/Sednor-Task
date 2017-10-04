import React, { Component } from 'react';
import './styles.scss';
import { Modal, Button, Label, ListGroup, ListGroupItem } from 'react-bootstrap';
import { Router, Route, browserHistory, Link } from 'react-router'; 
import { connect } from 'react-redux';
import deleteInvoice from '../../actions/deleteInvoice.js';

class Invoice extends Component{

 
    
    delete = ()=>{
        let invoice = {
            id: this.props.id
        }
        this.props.InvoiceDelete(invoice);
    }

    edit = ()=>{

    }
    

    render() {
    return (
      <div>
        <Label className = 'id'>{this.props.id}</Label>
        <h3>Customer: {this.props.customer.name}</h3>
        <h4>Discount: {this.props.discount}</h4>
        <h4>Total: {this.props.total}</h4>
      
        <Button><Link to = {`/invoices/${this.props.id}`}>Edit</Link></Button>
        <Button onClick = {this.delete}>Delete</Button>
      </div>

    );
  }
}

export default connect(
    state=>({
        invoices:state.finalInvoices
    }),
    dispatch=>({
        InvoiceDelete: (item)=>{
            dispatch(deleteInvoice(item));
        }
    })
)(Invoice);
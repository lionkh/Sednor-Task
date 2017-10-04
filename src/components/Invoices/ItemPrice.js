import React, { Component } from 'react';
import './styles.scss';
import { ControlLabel } from 'react-bootstrap';
import { Router, Route, browserHistory } from 'react-router'; 
import { connect } from 'react-redux';


 class ItemPrice extends Component{
    render() {
    return (
         <div>
         <ControlLabel>{this.props.items[0].product.price} $
         </ControlLabel>
            </div>

    );
  }
}

export default connect(
    state=>({
        items: state.invoiceItems
    })
)
(ItemPrice);
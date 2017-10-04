import React, { Component } from 'react';
import './styles.scss';
import { Modal, Button, Label, ListGroup, ListGroupItem } from 'react-bootstrap';
import { Router, Route, browserHistory } from 'react-router'; 



export default class Product extends Component{
    render() {
    return (
      <div>
     
    
    <Label className = 'id'>{this.props.id}</Label>
    <h3>Name: {this.props.name}</h3>
    <h4>Price: {this.props.price}</h4>
      



  {/*     id: {
type: Sequelize.INTEGER,
primaryKey: true,
autoIncrement: true
},
name: {
type: Sequelize.STRING
},
price: {
type: Sequelize.DECIMAL
}
}); */}
      </div>

    );
  }

}
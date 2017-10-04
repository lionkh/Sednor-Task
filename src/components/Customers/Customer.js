import React, { Component } from 'react';
import './styles.scss';
import { Modal, Button, Label, ListGroup, ListGroupItem } from 'react-bootstrap';
import { Router, Route, browserHistory } from 'react-router'; 



export default class Customer extends Component{
    render() {
    return (
      <div>
    <Label className = 'id'>{this.props.id}</Label>
    <h3>Name: {this.props.name}</h3>
    <h3>Address: {this.props.address}</h3>
    <h4>Phone: {this.props.phone}</h4>
      


  {/*   id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
        },
        name: {
        type: Sequelize.STRING
        },
        address: {
        type: Sequelize.STRING
        },
        phone: {
        type: Sequelize.STRING
        }  */}
      </div>

    );
  }

}
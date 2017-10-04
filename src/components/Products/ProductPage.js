import React, { Component } from 'react';
import './styles.scss';
import { Modal, Button, Label, ListGroup, ListGroupItem } from 'react-bootstrap';
import { Router, Route, browserHistory } from 'react-router'; 
import Product from './Product.js';
import NewProduct from './NewProduct.js';
import Header from '../Header/Header.js';
import { connect } from 'react-redux';
import fetchProducts from '../../actions/getProducts.js';

class ProductPage extends Component{
    constructor(props){
        super(props);
        this.state = {
            display: false
        }
        this.addProduct = this.addProduct.bind(this);
    }

    addProduct(){
        let display = true;
        this.props.displayForm(display);

    }
    componentWillMount(){
        this.props.getProducts();
    }
    

    eachProduct(prod, index){
        return (
             <ListGroupItem  key = {index} className = 'item'>
                 <Product id = {prod.id} name = {prod.name} price = {prod.price}/>
             </ListGroupItem>
        )
    }

    render() {
    return (
     <div>
    <Header />
  

    
    <ListGroup>
        {this.props.products.map(this.eachProduct)}    
    </ListGroup>
    </div>
    );
  }
}

export default connect(
    (state)=>({
        display: state.displayForms.products,
        products: state.products
    }),
    dispatch=>({
        displayForm: (display)=>{
            dispatch({type: 'SET_DISPLAY', products: display});
        },
        getProducts: ()=>{
            dispatch(fetchProducts());
        }
    })
)(ProductPage);

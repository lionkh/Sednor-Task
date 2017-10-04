import React, { Component } from 'react';
import './styles.scss';
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import { Router, Route, browserHistory } from 'react-router'; 
import { connect } from 'react-redux';
import ItemPrice from './ItemPrice.js';

class EditForm extends Component{

    constructor(props){
        super(props);
        this.productChange = this.productChange.bind(this);
        this.quantityChange = this.quantityChange.bind(this);
        this.getPrice = this.getPrice.bind(this);
        this.getQuantity = this.getQuantity.bind(this);
        this.state = {
            display:false,
        }
    }

    productChange(event){
     
        let itemInfo = {
            item_id: this.props.itemID,
            product: this.props.products[event.target.value-1]
        };
    
        this.props.changeItemProduct(itemInfo);
     
         let price = {
            id: +event.target.id,
            value: this.getPrice()
        }; 
     
       
       this.props.addPrice(price);  

    }

 
    componentWillMount(){
      
      /* this.props.addPrice(price);  */

    }

    componentDidMount(){
        setTimeout(()=> {
            this.setState({
            display: true
           })
        }, 10);
       
    }

   

    quantityChange(event){
            
        let newValue = {
            item_id: this.props.itemID,
            quantity: +event.target.value
        };
        console.log(newValue)
        let product = (this.props.products.find(product=>product.id==((this.props.loadedInvoiceItems.find(item=>item.id==this.props.itemID)).product_id)))

        let price = {
            id: +event.target.id,
            value: parseFloat((product.price * newValue.quantity).toFixed(3))
        };  

        console.log(price);
        this.props.changeQuantity(newValue);
        this.props.addPrice(price);
      
    }

    getPrice(){
        let product_id = (this.props.loadedInvoiceItems.find(item=>item.id==this.props.itemID)).product_id;
        let quantity = (this.props.loadedInvoiceItems.find(item=>item.id==this.props.itemID)).quantity;
        let price = (this.props.products.find(product=>product.id==product_id)).price*quantity;
      /*   let price = this.props.loadedInvoiceItems[+this.props.controlId-1].price * this.props.loadedInvoiceItems[+this.props.controlId-1].quantity ; */
        let floatPrice = parseFloat(price.toFixed(3));
        return floatPrice;
    }

    priceChange(event){
        /* this.props.addPrice() */
        console.log(event.target);
    }

    getQuantity(){
        setTimeout(()=> {
            return this.props.items[+this.props.controlId].quantity;
            
        }, 1500);
        
    }

   
    render(){
        return(
            <FormGroup className = "product-form" controlId={this.props.controlId}>
                 <ControlLabel className = "title">Select product:</ControlLabel> 
               
                  <FormControl value = {this.props.loadedInvoiceItems.find(item=>item.id==this.props.itemID).product_id} className = "select" componentClass="select" placeholder="select" onChange = {this.productChange}>
                       {
                                this.props.products.map((product, index)=>{
                                    return <option key = {index} value = {product.id}>{product.name}</option>
                                 })
                            }
                            </FormControl>
                            <ControlLabel className = "title">How much:</ControlLabel>
                            <FormControl value = {this.props.loadedInvoiceItems.find(item=>item.id==this.props.itemID).quantity} className = "select" onChange = {this.quantityChange} componentClass="select" placeholder="select">
                                    <option value = {1}>1</option>
                                    <option value = {2}>2</option>
                                    <option value = {3}>3</option>
                                    <option value = {4}>4</option>
                                    <option value = {5}>5</option>
                                    <option value = {6}>6</option>
                                    <option value = {7}>7</option>
                                    <option value = {8}>8</option>
                                    <option value = {9}>9</option>
                                    <option value = {10}>10</option>

                                    </FormControl>
                       
                            
                        {this.state.display && // + тут еще с дисконтом цена
                        <ControlLabel className = "item-price">
                            {this.getPrice()} $ 
                        </ControlLabel>
                        }     
                            
             </FormGroup>    
        )
    }
};


export default connect(
    (state)=>({
        products: state.products,
        items: state.invoiceItems,
        inputs: state.inputs,
        loadedInvoiceItems: state.loadedInvoiceItems,
        prices: state.prices
    }),
    dispatch=>({
        addItem: (item)=>{
            dispatch({type:'ADD_ITEM', payload: item});
        },
        changeItemProduct: (item)=>{
            dispatch({type:'CHANGE_LOADED_ITEM_PRODUCT', payload: item});
        },
        changeQuantity: (quantity)=>{
            dispatch({type:'CHANGE_LOADED_ITEM_QUANTITY', payload: quantity});
        },
        addPrice: (price)=>{
            dispatch({type:'ADD_PRICE', payload: price});
        }

    })

)(EditForm);




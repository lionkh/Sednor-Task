import React, { Component } from 'react';
import './styles.scss';
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import { Router, Route, browserHistory } from 'react-router'; 
import { connect } from 'react-redux';
import ItemPrice from './ItemPrice.js';

class InvoiceForm extends Component{

    constructor(props){
        super(props);
        this.productChange = this.productChange.bind(this);
        this.quantityChange = this.quantityChange.bind(this);
        this.getPrice = this.getPrice.bind(this);
        this.priceCount = this.priceCount.bind(this);
        this.getQuantity = this.getQuantity.bind(this);
        this.state = {
            display:false,
        }
    }

    productChange(event){

        let itemInfo = {
            item_id: event.target.id,
            product: this.props.products[event.target.value-1]
        };
    
        console.log(itemInfo);
        this.props.changeItemProduct(itemInfo);
       
        let price = {
            id: event.target.id,
            value: parseFloat((this.props.items[+this.props.controlId-1].price
                 * this.props.items[+this.props.controlId-1].quantity).toFixed(3))
        };
  

      this.props.addPrice(price);

    }

 
    componentWillMount(){
        let Item = {
            invoice_id: this.props.parentID,
            item_id: +this.props.controlId,
            product: this.props.products[0],
            quantity: 1
        };
       
    
        this.props.addItem(Item);
    }

    componentDidMount(){
        setTimeout(()=> {
            this.setState({
            display: true
           })
        }, 10);
  
   
    }

    priceCount(event){
        this.setState({
            display: true
        });
    
        let price = {
            id: +event.target.id,
            value: this.getPrice()
        };
        this.props.addPrice(price);
       

    }

    quantityChange(event){
     
            
        let newValue = {
            item_id: event.target.id,
            quantity: +event.target.value
        };
        let price = {
            id: event.target.id,
            value: parseFloat((this.props.items[+this.props.controlId-1].price * newValue.quantity).toFixed(3))
        }
        this.props.changeQuantity(newValue);
         this.props.addPrice(price);
      
    }

    getPrice(){
        let price = this.props.items[+this.props.controlId-1].price * this.props.items[+this.props.controlId-1].quantity ;
        let floatPrice = parseFloat(price.toFixed(3));
        return floatPrice;
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
               
                  <FormControl className = "select" componentClass="select" placeholder="select" onChange = {this.productChange}>
                       {
                                this.props.products.map((product, index)=>{
                                    return <option key = {index} value = {product.id}>{product.name}</option>
                                 })
                            }
                            </FormControl>
                            <ControlLabel className = "title">How much:</ControlLabel>
                            <FormControl className = "select" onChange = {this.quantityChange} componentClass="select" placeholder="select">
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
                       
                            
                        {this.state.display && 
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
        inputs: state.inputs
    }),
    dispatch=>({
        addItem: (item)=>{
            dispatch({type:'ADD_ITEM', payload: item});
        },
        changeItemProduct: (item)=>{
            dispatch({type:'CHANGE_ITEM_PRODUCT', payload: item});
        },
        changeQuantity: (quantity)=>{
            dispatch({type:'CHANGE_ITEM_QUANTITY', payload: quantity});
        },
        addPrice: (price)=>{
            dispatch({type:'ADD_PRICE', payload: price});
        }

    })

)(InvoiceForm);




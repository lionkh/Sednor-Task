import React, { Component } from 'react';
import './styles.scss';
import { browserHistory } from 'react-router';
import { Modal, Button, Form,  Label, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import { connect } from 'react-redux';
import EditForm from './EditForm.js';
import putInvoice from '../../actions/putInvoice.js';
import fetchInvoiceItem from '../../actions/postInvoiceItem.js';
import getInvoices from '../../actions/getInvoices.js';
import getInvoiceByID from '../../actions/getInvoiceByID.js';
import fetchProducts from '../../actions/getProducts.js';
import fetchCustomers from '../../actions/getCustomers.js';
import getInvoiceItems from '../../actions/getInvoiceItems.js';
import Header from '../Header/Header.js';
import putInvoiceItem from '../../actions/putInvoiceItem.js';
import deleteItem from '../../actions/deleteInvoiceItem.js';

class InvoiceEdit extends Component{
    constructor(props){
        super(props);
        this.state = {
            inputCounter: 0,
            displayPrice: false,
            invoice_id: Date.now(),
            loading: ''
        }
        this.appendInput = this.appendInput.bind(this);
        this.customerChange = this.customerChange.bind(this);
        this.setFinalPrice = this.setFinalPrice.bind(this);
        this.countFinalPrice = this.countFinalPrice.bind(this);
        this.discountChange = this.discountChange.bind(this);
        this.countFinalDiscountPrice = this.countFinalDiscountPrice.bind(this);
        this.delete = this.delete.bind(this);
        this.submit = this.submit.bind(this); 
    }

  
      componentWillMount(ownProps){

        this.props.getProducts(); 
        this.props.getProducts()
        this.props.getCustomers();
        this.props.getInvoice(+this.props.params.id); 
        let getter = {
            id:+this.props.params.id
        }
        this.props.getInvoiceItems(getter); 
  
    }

    getInvoice = ()=>{
          return this.props.curInvoice.id;
    }

    componentDidMount(){

         this.setState({
            invoice_id: Date.now()
        }); 

         let invoice = {
            id: this.state.invoice_id,
            customer_id: 1,
            discount: 0,
            total: 0
        };
        this.props.addNewInvoice(invoice);

        setTimeout(()=> {
            this.setState({
                displayPrice: true
            })
        }, 10); 
       
    setTimeout(()=> { 
        console.log(this.props.products);

        let prices = [];
        this.props.loadedInvoiceItems.forEach((item, i)=>{
            let product = this.props.products.find(product=>product.id==item.product_id);
            let quantity = item.quantity;
            let price = {
                id:i,
                value: parseFloat((product.price * quantity).toFixed(3))
            };
            prices.push(price);
            console.log(price);
           
          });
        console.log(prices);
          prices.forEach((price)=>{
              this.props.newPrice(price);
          })

    }, 500);
   
      
   
    }
 
    close = ()=> {
        let display = false;
        this.props.displayForm(display);
    }
 

    appendInput(){
        if(this.props.loadedInvoiceItems.length!=0){

        let newItem = {
            id: this.props.loadedInvoiceItems[this.props.loadedInvoiceItems.length-1].id+1,
            invoice_id: this.props.loadedInvoiceItems[this.props.loadedInvoiceItems.length-1].invoice_id,
            product_id: 1,
            quantity: 1
        };
        this.props.addItem(newItem);
        this.props.postInvoiceItem(newItem);

        let price = {
            id: this.props.prices[this.props.prices.length-1].id+1,
            value: this.props.products.find(product=>product.id==1).price
        }; 
     
        this.props.newPrice(price);
    }
        if(this.props.loadedInvoiceItems.length==0){
            let newItem = {
                id: 1,
                invoice_id: this.props.curInvoice.id,
                product_id: 1,
                quantity: 1
            };
            this.props.addItem(newItem);
            this.props.postInvoiceItem(newItem);
            
            let price = {
                id: 1,
                value: this.props.products.find(product=>product.id==1).price
            }; 
         
            this.props.newPrice(price);
            
        }

       

      
        
    } 

    customerChange(event){
    console.log((this.props.customers[event.target.value-1]));
        let newCustomer = {
            invoice_id: this.state.invoice_id,
            customer_id: +event.target.value
        };
        this.props.setCustomer(newCustomer);
        this.props.curInvoice.customer_id = newCustomer.customer_id;
    }  


   setFinalPrice(){
      
       let price = {
           price: this.countFinalPrice()
       };
       this.props.curInvoice.total = this.countFinalPrice();
    
   }

  countFinalPrice(){

    let sum = 0;
    this.props.prices.forEach((elem)=>{
        sum+=elem.price;
    })
    
    return parseFloat(sum.toFixed(3));
  }

  countFinalDiscountPrice(){
    
    let thisInvoice = this.props.invoices.find((element)=> {
        if(element.id = this.state.invoice_id){
            return element;
        }
    });

    if(thisInvoice.discount==0){
        return this.countFinalPrice();
    }
    else{
        return parseFloat((this.countFinalPrice()*(1-thisInvoice.discount)).toFixed(3)) ;
    }  
  }

  discountChange(event){
        let newDiscount = {
        invoice_id: this.state.invoice_id,
        discount: +event.target.value
        };
        this.props.setDiscount(newDiscount);
        this.props.curInvoice.discount = newDiscount.discount;
  }

  delete(event){
      if(this.props.loadedInvoiceItems.length-1>=0){
    let item = this.props.loadedInvoiceItems[this.props.loadedInvoiceItems.length-1];
    this.props.deleteItem(item);
    let price = {id: this.props.prices[this.props.prices.length-1].id};
    console.log(price);
    this.props.deletePrice(price);
    console.log('deleted',item);}
}

    submit(){
        if(this.props.loadedInvoiceItems.length-1>=0){
        this.setFinalPrice();
        this.props.putInvoice(this.props.curInvoice); 
        let invoiceItems = this.props.loadedInvoiceItems;
        let getter = {
            id:+this.props.params.id
        }
        this.props.getInvoiceItems(getter); 
      
        invoiceItems.forEach((elem)=>{
            elem.invoice_id = this.props.curInvoice.id;
            this.props.putItem(elem); 
        }) 
        browserHistory.push('/');
       
    }

        else{
            alert('No products, please add at least one product!');
        }

    }

    eachInvoice = (elem, index)=>{
        return(
       <div key = {index}>
             <h1>{elem.id}</h1>
             <h1>{elem.customer_id}</h1>
             <h1>{elem.discount}</h1>
             <h1>{elem.total}</h1>
         </div>
        )

    }   


    render() {


    if(this.props.loadedInvoiceItems == undefined  || this.props.products.length==0){
        return(
            <div></div>
        )
    }

    else{
       
    return (
        <div>
         <Header />
      
     <div className = "new-invoice-form"> 
      <h3 className = "main-title">Editing</h3>
      <Form onSubmit={this.submit}>

        <FormGroup controlId="formControlsSelect">
            <ControlLabel className = "title">Select customer</ControlLabel>
            <FormControl className = "select" value = {this.props.curInvoice.customer_id} componentClass="select" placeholder="select" onChange = {this.customerChange}>

            {
                this.props.customers.map((customer, i)=>{
                   return <option key = {i} value = {customer.id}>{customer.name}</option>
                })
              }
                
            </FormControl>
        </FormGroup>


           {
                this.props.loadedInvoiceItems.map((item, i)=>{
                    return <EditForm itemID = {item.id} parentID = {this.state.invoice_id} key = {i} controlId={(++i).toString()} />
                    
                })
            } 
    
        

       <Button className = "add-product-button" type = "button" bsStyle="primary" onClick = {this.appendInput}>Add product</Button>
       <Button className = "add-product-button" type = "button" bsStyle="danger" onClick = {this.delete}>Delete product</Button>
       <FormGroup controlId="formControlsSelect">
           <br/>
      <ControlLabel className = "title">Select discount: </ControlLabel>
      <FormControl className = "select" value = {this.props.curInvoice.discount} componentClass="select" placeholder="select" onChange = {this.discountChange}>
         <option value="0">No discount</option>
         <option value="0.05">5%</option>
         <option value="0.1">10%</option>
         <option value="0.2">20%</option>
         <option value="0.5">50%</option>
      </FormControl>
      </FormGroup>

        
       { this.state.displayPrice &&
        <div>
        <Label className = 'final-price'>Final price:   
        <span className = "money">{this.countFinalPrice()} $</span> </Label>
         
        <Label className = 'final-discount-price'>Final discount price:   
        <span className = "money">{this.countFinalDiscountPrice()} $</span></Label> 
            </div>
       }

       <div className = "final-buttons">
        <Button onClick = {this.close} type="button" className="close-button">Close</Button>
        <Button onClick = {this.submit} bsStyle="success" className = 'submit-button'>Submit</Button>
       </div>
      </Form>

      </div> 
      </div>
      );
    }
}
}


InvoiceEdit = connect(
    (state, ownProps)=>({
        customers: state.customers,
        products: state.products,
        inputs: state.inputs,
        prices: state.prices, 
        invoices: state.invoices,
        invoiceItems: state.invoiceItems,
        curInvoice: state.createdInvoices,
        loading: state.loading,
        loadedInvoiceItems: state.loadedInvoiceItems
    }),
    dispatch=>({
        displayForm:(display)=>{
            dispatch({type: 'SET_DISPLAY', invoices: display});
        },
        getCustomers: ()=>{
            dispatch(fetchCustomers());
        },
        getProducts: ()=>{
            dispatch(fetchProducts());
        },
        getInvoice: (id)=>{
            dispatch(getInvoiceByID(id));
        },
        getInvoices: ()=>{
            dispatch(getInvoices());
        },
        getInvoiceItems: (getter)=>{
            dispatch(getInvoiceItems(getter));
        },
        switchLoading: ()=>{
            dispatch({type: 'SET_LOADING', payload: true});
        },
        createInput: (input)=>{
            dispatch({type: 'ADD_INPUT', payload: input});
        },
        setCustomer: (customer)=>{
            dispatch({type: 'CHANGE_INVOICE_CUSTOMER', payload: customer});
        },
        setDiscount: (discount)=>{
            dispatch({type: 'CHANGE_INVOICE_DISCOUNT', payload: discount});
        },
        addItem: (item)=>{
            dispatch({type:'ADD_LOADED_ITEM', payload: item});
        },
        changeItem: (item)=>{
            dispatch({type:'CHANGE_ITEM', payload: item});
        },
        addNewInvoice: (invoice)=>{
            dispatch({type:'ADD_INVOICE', payload: invoice});
        },
        setPrice: (price)=>{
            dispatch({type: 'CHANGE_INVOICE_TOTAL', payload: price});
        },
        deleteItem: (item)=>{
            dispatch({type: 'DELETE_LOADED_ITEM', payload: item});
            dispatch(deleteItem(item));
        },
        deletePrice: (price)=>{
            dispatch({type: 'DELETE_PRICE', payload: price});
        },
        newPrice: (price)=>{
            dispatch({type:'ADD_PRICE', payload: price});
        },
        putInvoice: (invoice)=>{
            dispatch(putInvoice(invoice));
        },
        postInvoiceItem: (invoiceItem)=>{
            dispatch(fetchInvoiceItem(invoiceItem));
        },
        putItem: (item)=>{
            dispatch(putInvoiceItem(item));
        }
    })
)(InvoiceEdit);


export default InvoiceEdit;







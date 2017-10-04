import React, { Component } from 'react';
import './styles.scss';
import { Modal, Button, Form,  Label, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form'
import ItemForm from './ItemForm.js';
import fetchInvoice from '../../actions/postInvoice.js';
import fetchInvoiceItem from '../../actions/postInvoiceItem.js';


class NewInvoice extends Component{
    constructor(props){
        super(props);
        this.state = {
            inputCounter: 0,
            displayPrice: false,
            invoice_id: Date.now()
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

   
 

    appendInput(){
        this.setState({
            inputCounter: ++this.state.inputCounter
        })
        let input = {
            id: this.state.inputCounter,
            quantityName: `quantity ${this.state.inputCounter}`,
            component: 'select',
        };
        this.props.createInput(input);
        console.log(this.props.inputs.length);        
        let price = {
            id: ++this.props.inputs.length,
            value: this.props.products[0].price
         };


        this.props.newPrice(price);
        
    }

    componentWillMount(){
      /*   let input = {
            name: 'Customer',
            component: 'select'
        };
        this.props.createInput(input); */
        this.appendInput();
    }

    componentDidMount(){
       /*  this.setState({
            invoice_id: Date.now()
        }); */

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
    }


    customerChange(event){
        console.log((this.props.customers[event.target.value-1]));
        let newCustomer = {
            invoice_id: this.state.invoice_id,
            customer_id: +event.target.value
        };
        this.props.setCustomer(newCustomer);
    }


   setFinalPrice(){
       //при сабмите нужно задиспатчить окончательную цену в отправить объект на сервер
       let price = {
           invoice_id: this.state.invoice_id,
           price: this.countFinalPrice()
       };
       this.props.setPrice(price);
   }

  countFinalPrice(){

    let sum = 0;
    this.props.prices.forEach((elem)=>{
        sum+=elem.price;
    })
   
    return sum;
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
  }

  delete(event){
    let item = {
        id: this.state.inputCounter
    };
    this.props.deleteItem(item);
    this.setState({
        inputCounter:--this.state.inputCounter
    });
}

    submit(){
        if(this.props.inputs.length>0){
        this.setFinalPrice();
        let test = this.props.invoices.find(elem => elem.id == this.state.invoice_id)
        this.props.postInvoice(test); //sending invoice
        //then sending invoice items
        setTimeout(()=> {
            let parentID = this.props.createdInvoices.id;
            console.log(parentID);
            this.props.invoiceItems.forEach(elem=>{
                elem.invoice_id = parentID; 
                this.props.postInvoiceItem(elem);
            }); 
        }, 1000);
       
        this.close(); 
    }

    else{
        alert('No products, please add at least one product!');
    }
    }

    close = ()=> {
        let display = false;
        this.props.displayForm(display);
        this.props.clearAll();
    
    }

    render() {

    return (
      <div className = "new-invoice-form"> 
         <h3 className = "main-title">New Invoice</h3>


      <Form onSubmit={this.submit}>

        <FormGroup controlId="formControlsSelect">
            <ControlLabel className = "title">Select customer</ControlLabel>
            <FormControl className = "select" componentClass="select" placeholder="select" onChange = {this.customerChange}>
            {
                this.props.customers.map((customer, i)=>{
                   return <option key = {i} value = {customer.id}>{customer.name}</option>
                })
              }
                
            </FormControl>
        </FormGroup>
    

        {
                this.props.inputs.map((input, i)=>{
                    return  <ItemForm parentID = {this.state.invoice_id} key = {i} controlId={(++i).toString()} />
                    
                })
            } 
        

       <Button className = "add-product-button" type = "button" bsStyle="primary" onClick = {this.appendInput}>Add product</Button>
       <Button className = "delete-product-button" type = "button" bsStyle="danger" onClick = {this.delete}>Delete product</Button>
       <FormGroup controlId="formControlsSelect">
      <ControlLabel className = "title">Select discount:</ControlLabel>
      <FormControl className = "select" componentClass="select" placeholder="select" onChange = {this.discountChange}>
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
        <Button onClick = {this.submit} bsStyle="success" className = "submit-button">Submit</Button>

        </div>
      </Form>

      </div>

    );
  }
}

NewInvoice = connect(
    state=>({
        customers: state.customers,
        products: state.products,
        inputs: state.inputs,
        prices: state.prices,
        invoices: state.invoices,
        invoiceItems: state.invoiceItems,
        finalInvoices: state.finalInvoices,
        createdInvoices: state.createdInvoices
    }),
    dispatch=>({
        displayForm:(display)=>{
            dispatch({type: 'SET_DISPLAY', invoices: display});
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
            dispatch({type:'ADD_ITEM', payload: item});
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
            dispatch({type: 'DELETE_INPUT', payload: item});
            dispatch({type: 'DELETE_ITEM', payload: item});
            dispatch({type: 'DELETE_PRICE', payload: item})
            //dispatch for deleting item
        },
        newPrice: (price)=>{
            dispatch({type:'ADD_PRICE', payload: price})
        },
        postInvoice: (invoice)=>{
            dispatch(fetchInvoice(invoice));
        },
        postInvoiceItem: (invoiceItem)=>{
            dispatch(fetchInvoiceItem(invoiceItem));
        },
        clearAll: ()=>{
            dispatch({type:'INVOICES_CLEAR'});
            dispatch({type:'DELETE_INPUTS'});
            dispatch({type:'DELETE_ITEMS'});
            dispatch({type:'DELETE_PRICES'}); 

        }
    })
)(NewInvoice);


export default NewInvoice;







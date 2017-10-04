import React, { Component } from 'react';
import './styles.scss';
import { Modal, Button, Label, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form'


class NewProduct extends Component{
    close = ()=> {
        let display = false;
        this.props.displayForm(display);
    }

    submit(){

    }
    nameField(){
        return( 
        <FormGroup bsSize="large">
            <FormControl placeholder = "Enter product name"/> 
        </FormGroup>)
    }
    priceField(){
        return <FormControl placeholder = "Enter product price" />;
    }


    render() {
        const { handleSubmit } = this.props;
    return (
      <div className = "new-product-form"> 
      <h3>New product</h3>
        <form onSubmit={ handleSubmit }>
           
        <div>
          <label htmlFor="Name">Name:</label>
          <Field name="Name" component="input" type="text" />
        </div>
        <div>
          <label htmlFor="price">Price:</label>
          <Field name="price" component="input" type="text" />
        </div>
        <button onClick = {this.close} type="button" className="close-btn">Close</button>
        <button className = "submit" type="submit">Submit</button>
      </form>

      </div>

    );
  }
}

NewProduct = connect(
    state=>({
     
    }),
    dispatch=>({
        displayForm:(display)=>{
            dispatch({type: 'SET_DISPLAY', products: display})
        }
    })
)(NewProduct);
/* 
NewProduct = reduxForm({
    // a unique name for the form
    form: 'product'
  })(NewProduct)

export default NewProduct; */







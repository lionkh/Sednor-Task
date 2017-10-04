import { combineReducers } from 'redux';
import customers from './customers';
import products from './products';
import displayForms from './displayForms';
import { reducer as formReducer } from 'redux-form'
import inputs from './inputs.js';
import invoiceItems from './invoiceItems.js';
import prices from './prices.js';
import invoices from './invoices.js';
import finalInvoices from './finalInvoices.js';
import loading from './loading.js';
import createdInvoices from './createdInvoices.js';
import loadedInvoiceItems from './loadedInvoiceItems.js';

var Project = combineReducers({
    form: formReducer,
    displayForms,
    customers,
    products,
    inputs,
    invoiceItems,
    prices,
    invoices,
    finalInvoices,
    loading,
    createdInvoices,
    loadedInvoiceItems
});

export default Project;
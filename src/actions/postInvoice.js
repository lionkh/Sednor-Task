import  newInvoice from './newInvoice';

export default function fetchInvoice(invoice){
    return dispatch => {
        fetch('http://localhost:3000/api/invoices', {
            method: 'post', 
            headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
             },
             body: JSON.stringify(invoice)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            dispatch({type:'ADD_FINAL_INVOICE', payload: data});
            dispatch({type: 'ADD_CURRENT_INVOICE', payload: data});
            }
        )
        .catch(error =>{
            console.log(error, 'Nothing in');
        });
    }
}
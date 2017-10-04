
export default function deleteInvoiceItem(item){
    return dispatch => {
        console.log('testing',item);
        fetch(`http://localhost:3000/api/invoices/${item.invoice_id}/items/${item.id}`, {
            method: 'delete', 
            headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
             }
        })
        .then(res => res.json())
        .then(data => {
            console.log('deleted', data);
            dispatch({type:'DELETE_FINAL_INVOICE', payload: data});
            }
        )
        .catch(error =>{
            console.log(error, 'Nothing in');
        });
    }
}
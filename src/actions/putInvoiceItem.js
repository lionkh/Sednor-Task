
export default function putInvoiceItems(item){
    return dispatch => {
        fetch(`http://localhost:3000/api/invoices/${item.invoice_id}/items/${item.id}`,{
            method: 'put', 
            headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
             },
             body: JSON.stringify(item)
        })
        .then(res => res.json())
        .then(data => {
                console.log(data);
            }
        )
        .catch(error =>{
            console.log(error, 'Nothing in');
            
        });
    }
}

export default function putInvoice(invoice){
    return dispatch => {
        fetch(`http://localhost:3000/api/invoices/${invoice.id}`, {
            method: 'put', 
            headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
             },
             body: JSON.stringify(invoice)
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
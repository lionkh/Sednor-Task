
export default function getInvoice(id){
    return dispatch => {
        fetch(`http://localhost:3000/api/invoices/${id}`)
        .then(res => res.json())
        .then(data => {
                dispatch({type: 'ADD_CURRENT_INVOICE', payload: data})
            }
        )
        .catch(error =>{
            console.log(error, 'Nothing in');
            
        });
    }
}
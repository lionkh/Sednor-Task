
export default function getInvoices(){
    return dispatch => {
        fetch('http://localhost:3000/api/invoices')
        .then(res => res.json())
        .then(data => {
            data.forEach(item=> {
                dispatch({type: 'ADD_FINAL_INVOICE', payload: item})
            });
            }
        )
        .catch(error =>{
            console.log(error, 'Nothing in');
            
        });
    }
}
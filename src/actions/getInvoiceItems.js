/* import  newInvoiceItem from './newInvoiceItem';
 */
export default function getInvoiceItems(getter){
    return dispatch => {
        fetch(`http://localhost:3000/api/invoices/${getter.id}/items`)
        .then(res => res.json())
        .then(data => {
            data.forEach(item=> {
              /*   console.log(item); */
                dispatch({type:'ADD_LOADED_ITEM', payload: item});
            });
           
            }
        )
        .catch(error =>{
            console.log(error, 'Some error');
        });
    }
}


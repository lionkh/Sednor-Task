import newCustomer from './newCustomer';

export default function fetchCustomers(){
    return dispatch => {
        fetch('http://localhost:3000/api/customers')
        .then(res => res.json())
        .then(data => {
            data.forEach(item=> {
                dispatch(newCustomer(item));
            });
            }
        )
        .catch(error =>{
            console.log(error, 'Nothing in');
            
        });
    }
}
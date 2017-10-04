import  newProduct from './newProduct';

export default function fetchProducts(){
    return dispatch => {
        fetch('http://localhost:3000/api/products')
        .then(res => res.json())
        .then(data => {
            data.forEach(item=> {
                dispatch(newProduct(item));
            });
            }
        )
        .catch(error =>{
            console.log(error, 'Nothing in');
            
        });
    }
}
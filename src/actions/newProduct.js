export default function newProduct(product){
    return{
        type: 'ADD_PRODUCT',
        id: product.id,
        name: product.name,
        price: product.price
    }
}
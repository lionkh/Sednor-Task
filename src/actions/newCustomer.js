export default function newCustomer(customer){
    return{
        type: 'ADD_CUSTOMER',
        id: customer.id,
        name: customer.name,
        address:customer.address,
        phone: customer.phone
    }
}


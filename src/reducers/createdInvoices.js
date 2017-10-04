export default function invoices(state = [], action){
    switch(action.type){
        case 'ADD_CURRENT_INVOICE':
        return{
            id:action.payload.id,
            customer_id:action.payload.customer_id,
            discount:action.payload.discount,
            total:action.payload.total
        };

        default:
            return state;
            }
    }

export default function displayForms(state = [], action){
    switch(action.type){
        case 'SET_DISPLAY':
        return {
                products: action.products,
                customers: action.customers,
                invoices: action.invoices
            };
        default:
            return state;
            }
    }

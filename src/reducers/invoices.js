export default function invoices(state = [], action){
    switch(action.type){
        case 'ADD_INVOICE':
        return [
            ...state, {
                id: action.payload.id,
                customer_id: action.payload.customer_id,
                discount: action.payload.discount,
                total: action.payload.total
            }];

        case 'CHANGE_INVOICE_CUSTOMER':
            //payload: itemID, product
           return state.map((elem)=>{
                if(elem.id == action.payload.invoice_id){
                    elem.customer_id = action.payload.customer_id;
                    return elem;
                }
                else{
                    return elem;
                }
            });
    

        case 'CHANGE_INVOICE_DISCOUNT':
         return state.map((elem)=>{
            if(elem.id == action.payload.invoice_id){
                elem.discount = action.payload.discount;
                return elem;
            }
            else{
                return elem;
            }
        });

        case 'CHANGE_INVOICE_TOTAL':
        return state.map((elem)=>{
            if(elem.id == action.payload.invoice_id){
                elem.total = action.payload.price;
                return elem;
            }
            else{
                return elem;
            }
        });
 
        case 'INVOICES_CLEAR':
        return [];


        default:
            return state;
            }
    }

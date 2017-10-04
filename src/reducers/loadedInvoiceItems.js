export default function loadedInvoiceItems(state = [], action){
    switch(action.type){
        case 'ADD_LOADED_ITEM':
        return [
            ...state, {
                id:action.payload.id,
                invoice_id: action.payload.invoice_id,
                product_id: action.payload.product_id,
                quantity: action.payload.quantity
            }];

        case 'CHANGE_LOADED_ITEM_PRODUCT':
            console.log(state, action.payload);
            return state.map((elem)=>{
                if(elem.id == action.payload.item_id){
                    elem.product_id = action.payload.product.id;
                    elem.productName = action.payload.product.name;
                    elem.price = action.payload.product.price;
                    return elem;
                    console.log('new elem', elem);
                }
                else{
                    return elem;
                }
            });
      //  return state;

        case 'CHANGE_LOADED_ITEM_QUANTITY':
        return state.map((elem)=>{
            if(elem.id == action.payload.item_id){
                elem.quantity = action.payload.quantity;
                return elem;
            }
            else{
                return elem;
            }
        });

        case 'DELETE_LOADED_ITEM':
        let newState = [];
             state.forEach(elem=>{
                if(elem.id != action.payload.id){
                        newState.push(elem);
                    }
                });

        return newState;   
        
        case 'DELETE_LOADED_ITEMS':
        return [];

        default:
            return state;
            }
    }

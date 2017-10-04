export default function invoiceItems(state = [], action){
    switch(action.type){
        case 'ADD_ITEM':
        return [
            ...state, {
                invoice_id: action.payload.invoice_id,
                item_id: action.payload.item_id,
                product_id: action.payload.product.id,
                productName:action.payload.product.name,
                price:action.payload.product.price,
               /*  product: action.payload.product, */
                quantity: action.payload.quantity
            }];

        case 'CHANGE_ITEM_PRODUCT':
            //payload: itemID, product
            return state.map((elem)=>{
                if(elem.item_id == action.payload.item_id){
                    elem.product_id = action.payload.product.id;
                    elem.productName = action.payload.product.name;
                    elem.price = action.payload.product.price;
                    return elem;
                }
                else{
                    return elem;
                }
            });
      //  return state;

        case 'CHANGE_ITEM_QUANTITY':
        return state.map((elem)=>{
            if(elem.item_id == action.payload.item_id){
                elem.quantity = action.payload.quantity;
                return elem;
            }
            else{
                return elem;
            }
        });

        case 'DELETE_ITEM':
        let newState = [];
             state.forEach(elem=>{
                if(elem.item_id != action.payload.id){
                        newState.push(elem);
                    }
                });

        return newState;   
        
        case 'DELETE_ITEMS':
        return [];

        default:
            return state;
            }
    }

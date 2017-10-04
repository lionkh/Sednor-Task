export default function products(state = [], action){
    switch(action.type){
        case 'ADD_PRODUCT':
        return [
            ...state, {
                id: action.id, 
                name: action.name,
                price: action.price
            }];
        default:
            return state;
            }
    }

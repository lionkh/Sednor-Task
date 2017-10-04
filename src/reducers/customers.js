export default function customers(state = [], action){
    switch(action.type){
        case 'ADD_CUSTOMER':
        return [
            ...state, {
                id: action.id,
                name: action.name,
                address: action.address,
                phone: action.phone
            }];
        default:
            return state;
            }
    }

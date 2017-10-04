export default function loading(state = [], action){
    switch(action.type){
        case 'SET_LOADING':
        return {
               loading: action.payload
            };
        default:
            return state;
            }
    }

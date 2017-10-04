export default function inputs(state = [], action){
    switch(action.type){
        case 'ADD_INPUT':
        return [
            ...state, {
                id: action.payload.id,
                quantityName: action.payload.quantityName,
                component: action.payload.component
            }];
        case 'DELETE_INPUT':
       
        let newState = [];

        state.forEach(elem=>{
            if(elem.id != action.payload.id){
                newState.push(elem);
            }
        })
        return newState;

        case 'DELETE_INPUTS':
        return [];

        default:
            return state;
            }
    }

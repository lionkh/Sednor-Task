const InitialState = '';

export default function posts(state = InitialState, action){
    if(action.type === 'FIND_POST'){
        return action.payload;
    }
    return state;
}

export default function users(state = [], action){
    switch(action.type){
        case 'ADD_USER':
        return [
            ...state, {
                id: action.id,
                login: action.login,
                password: action.password,
                name: action.name
            }];
        default:
            return state;
            }
    }

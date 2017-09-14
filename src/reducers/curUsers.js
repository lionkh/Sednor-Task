export default function curUsers(state = [], action){
    switch(action.type){
        case 'ADD_CURRENT_USER':
        return  {
                login: action.login,
                name: action.name
            };
        case 'DEL_CURRENT_USER':
        return {

        };
    
        default:
            return state;
            }
    }

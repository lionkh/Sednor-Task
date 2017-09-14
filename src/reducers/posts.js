export default function posts(state = [], action){
    switch(action.type){
        case 'NEW_POST':
        return [
            ...state, {
                id: action.id,
                author: action.author,
                title: action.title,
                text: action.text
            }];
        default:
            return state;
            }
    }

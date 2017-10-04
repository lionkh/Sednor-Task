export default function prices(state = [], action){
    switch(action.type){
        case 'ADD_PRICE':
        if(
            state.find(elem=>elem.id ==action.payload.id)
        ){
         return state.map((elem)=>{
                if(elem.id == action.payload.id){
                    elem.price = action.payload.value;
                    return elem;
                }
                else{
                    return elem;
                }
            });
        }

        else{
            return [
                ...state, {
                    id: action.payload.id, 
                    price: action.payload.value
                }];
        }

        case 'DELETE_PRICE':
            let newState = [];
            console.log(action.payload.id);
                 state.forEach(elem=>{
                    if(elem.id != action.payload.id){
                            newState.push(elem);
                            
                        }
                    });
    
            return newState;          
        
       
        case 'DELETE_PRICES':
        return [];

        default:
            return state;
            }
    }

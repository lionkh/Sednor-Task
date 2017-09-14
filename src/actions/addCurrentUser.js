export default function addCurrentUser(user){
    return{
        type: 'ADD_CURRENT_USER',
        login: user.login,
        name: user.name
    }
}


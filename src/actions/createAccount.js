export default function createAccount (user){
    return{
        type: 'ADD_USER',
        id: user._id,
        login: user.login,
        password: user.password,
        name: user.name

    }
}
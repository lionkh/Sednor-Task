import  addCurrentUser  from './addCurrentUser';
import { browserHistory } from 'react-router';

export default function loginSubmit(user) {
   return dispatch => {
    
     fetch(`http://localhost:3000/users/${user.login}`)
        .then(res => res.json())
        .then(data => {
          if(data.login == user.login && data.password == user.password){
                console.log('Выполняется вход');
                //вход в систему

                localStorage.setItem('curUser', JSON.stringify(user));
                dispatch(addCurrentUser(user));
                browserHistory.push('/feed');
                /* document.querySelector('.greet-page').style.visibility = 'hidden'; */
                /* document.querySelector('.signup').style.visibility = 'hidden'; */
                /* document.querySelector('.main-page').style.visibility = 'visible'; */
            }
        
            else{
                console.log('Неправильный пароль');
                document.querySelector('.password').style.background = 'rgba(255,51,56,0.2)';
                
            }
        })
        .catch(error =>{
            console.log(error, 'Нет такого пользователя');
             document.querySelector('.login').style.background = 'rgba(255,51,56,0.2)';
        });
     }
    }


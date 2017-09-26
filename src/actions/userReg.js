import createAccount from './createAccount';
import  addCurrentUser  from './addCurrentUser';
import { browserHistory } from 'react-router';

export default function regSubmit(newUser){
    return dispatch => {   

                fetch('http://localhost:3000/users', {
                    method: 'post', 
                    headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                     },
                     body: JSON.stringify(newUser)
                })
                .then( (response)=>{
                    if(response.status == 500){
                        document.querySelector('.reglogin').style.background = 'rgba(255,51,56,0.2)';
                        console.log('Такой пользователь уже существует!');
                    }
                    if(response.status == 200){
                    response.json()
                    .then(data=> {
                        dispatch(createAccount(data));
                        console.log('Registrated', data);
                        localStorage.setItem('curUser', JSON.stringify(data));
                        dispatch(addCurrentUser(data));
                        browserHistory.push('/feed');
                         });
                    }
                })

     
    }

 }

 function postUser(newUser){
    return dispatch => {   
        console.log('and got here');
    
     fetch('http://localhost:3000/users', {
         method: 'post', 
         headers: {
         'Accept': 'application/json, text/plain, */*',
         'Content-Type': 'application/json'
          },
          body: JSON.stringify(newUser)
     }).then( res=> res.json())
         .then(data=> {
             
             dispatch(createAccount(data));
             console.log('Registrated', data);
    
              });
            }
         
  };    
 


  

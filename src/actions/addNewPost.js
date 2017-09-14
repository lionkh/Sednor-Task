import  newPost  from './newPost';


export default function addNewPost(post) {
   return dispatch => {
    
    fetch('http://localhost:3000/posts', {
        method: 'post', 
        headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
         },
         body: JSON.stringify(post)
    })
    .then( (response)=>{
        response.json()
        .then(data=> {
            dispatch(newPost(data));
            console.log('Added', data);
             });
        
    });
   }
}

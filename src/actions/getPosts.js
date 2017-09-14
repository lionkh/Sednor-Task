import  newPost  from './newPost';

export default function fetchPosts(){
    return dispatch => {
        fetch('http://localhost:3000/posts')
        .then(res => res.json())
        .then(data => {
            data.forEach(item=> {
                dispatch(newPost(item));
            });
            }
        )
        .catch(error =>{
            console.log(error, 'Нет ни одного поста');
            
        });
    }
}
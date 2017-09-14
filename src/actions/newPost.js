export default function newPost(post){
    return{
        type: 'NEW_POST',
        id: post._id,
        title: post.title,
        text: post.text,
        author: post.author
    }
}
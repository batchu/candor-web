import {database} from '../database/config'
export function startAddingPost(post){
    return (dispatch)=>{
        return database.ref('posts').update({[post.id]:post}).then(()=>{
            dispatch(addPost(post))
        }).catch((error)=>{
            console.log(error)
        })
    }
}

export function startLoadingPost(){
    return (dispatch) =>{
        return database.ref('posts').once('value').then((snapshot)=>{
            const posts = []
            snapshot.forEach((childSnapshot)=>{
                posts.push(childSnapshot.toJSON())
            })
            dispatch(loadPosts(posts))
        })

    }
}

export function loadPosts(posts){
        return {
            type: 'LOAD_POSTS',
            posts: posts
        }
}
export function removePost(id){
    return {
        type: 'REMOVE_POST',
        payload: id
    }
}

export function addPost(post){
    return {
        type: 'ADD_POST',
        payload: post
    }
}

export function updatePost(post){
    return {
        type: 'UPDATE_POST',
        payload: post
    }
}

export function addComment(comment){
    return {
        type: 'ADD_COMMENT',
        payload: comment
    }
}
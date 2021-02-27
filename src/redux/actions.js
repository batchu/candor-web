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

export function startLoadingPosts(){
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

export function startLoadingComments(){
    return (dispatch) => {
        return database.ref('comments').once('value').then((snapshot)=>{
            const comments = []
            snapshot.forEach((childSnapshot)=>{
                comments.push(childSnapshot.toJSON())
            })
            dispatch(loadComments(comments))
        })
    }
}

export function startRemovingPost( id){
    return(dispatch)=>{
        return database.ref(`posts/${id}`).remove().then(()=>{
            dispatch(removePost(id))
        })
    }
}

export function startAddingComment(comment){
    return (dispatch)=>{
        return database.ref('comments').update({[comment.id]:comment}).then(()=>{
            dispatch(addComment(comment))
        })
    }
}
export function loadPosts(posts){
        return {
            type: 'LOAD_POSTS',
            posts: posts
        }
}

export function loadComments(comments){
    return {
        type: 'LOAD_COMMENTS',
        comments: comments
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
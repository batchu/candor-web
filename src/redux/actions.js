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
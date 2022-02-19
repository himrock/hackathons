export const add_challenge = (challenge) => {
    return{
        type: 'ADD_CHALLENGE',
        payload: challenge
    }
}

export const upVote = (id) => {
    return {
        type: 'UP_VOTE',
        payload: {id}
    }
}

export const downVote = (id) => {
    return {
        type: 'DOWN_VOTE',
        payload: {id}
    }
}

// export const searchByValue = (value) => {
//     return {
//         type: 'SEARCH_BY_VALUE',
//         payload: {value}
//     }
// }

export const searchInput = (searchValue) => {
    return {
        type: 'SEARCH_INPUT',
        payload: {searchValue}
    }
}

export const sortBy = (value) => {
    return {
        type: 'SORT_BY',
        payload: {value}
    }
}

export const deleteChallange = (id) => {
    return {
        type: 'DELETE',
        payload: {id}
    }
}


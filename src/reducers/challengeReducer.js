const initialState = {
    searchValue: null,
    challenges: [{
        id: '1',
        title: 'Find Frequency in Array',
        description: 'a = [5, 5, 5, 2, 2, 2, 2, 2, 9, 4]',
        tags: ['array', 'javascript'],
        voteCount: 2,
        createdAt: new Date(),
        userId: null
    },
    {
        id: '2',
        title: 'Find out the currying result',
        description: 'add(1)(2)(3)(4)()',
        tags: ['array', 'javascript'],
        voteCount: 5,
        createdAt: new Date(),
        userId: null
    }]
}

const ChallengeReducer = (state = initialState, action) => {
    // let newState = {...state};
    switch (action.type) {
        case 'ADD_CHALLENGE':
            return {
                ...state,
                challenges: [...state.challenges, action.payload]
            }
        case 'UP_VOTE':
            let elementIndex = state.challenges.findIndex(challenge => challenge.id === action.payload.id);
            let newArray = [...state.challenges];
            newArray[elementIndex] = { ...newArray[elementIndex], voteCount: newArray[elementIndex].voteCount + 1 }
            return { ...state, challenges: newArray };

        case 'DOWN_VOTE':
            let elementDownVoteIndex = state.challenges.findIndex(challenge => challenge.id === action.payload.id);
            let newArrayDownVote = [...state.challenges];
            newArrayDownVote[elementDownVoteIndex] = { ...newArrayDownVote[elementDownVoteIndex], voteCount: newArrayDownVote[elementDownVoteIndex].voteCount - 1 }
            return { ...state, challenges: newArrayDownVote };

        case 'SEARCH_INPUT':
            return {...state, searchValue : action.payload.searchValue}

        // case 'SEARCH_BY_VALUE':
        //     let newState = Object.assign({}, state);
        //     let value = action.payload.value;
        //     // return all the object which matched recieved string in the title field
        //     let searchedResults = state.challenges.filter(challenge => {
        //         return challenge.title.toLowerCase().includes(value.toLowerCase())
        //     });
        //     if(value){
        //         newState.filterChallanges = searchedResults;
        //     }
        //     else{
        //         // if their is nothing in the search bar , then put the original array value
        //         newState.filterChallanges = newState.challenges;
        //     }
        //     return newState;
        case 'SORT_BY':
            // let newState = Object.assign({}, state);
            let value = action.payload.value;
            let sortedArray;
            if(value === 'voteCount'){
                sortedArray = sortDesc([...state.challenges], 'voteCount');
            }
            else{
                sortedArray = sortDesc([...state.challenges], 'createdAt');
            }
            return {...state, challenges: sortedArray};

        case 'DELETE':
            console.log(action.payload.id);
            return {
                ...state, challenges: [...state.challenges.filter(challenge=>{
                    return challenge.id!==action.payload.id;
                })]
            };
        default:
            return state;
    }
}

export default ChallengeReducer;

// sort the string in ascending order
// function sortAsc(arr, field) {
//     return arr.sort(function (a, b) {
//         if (a[field] > b[field]) return 1;

//         if (b[field]> a[field]) return -1;

//         return 0;
//     })
// }

// sort the string in descending order
function sortDesc(arr, field) {
    return arr.sort(function (a, b) {
        if (a[field] > b[field]) return -1;

        if (b[field]> a[field]) return 1;

        return 0;
    })
}

// function sortByDate(arr, field) {
//     return arr.sort(function (a, b) {
//         return (
//             new Date(a.createdAt).toUTCString() -
//             new Date(b.createdAt).toUTCString()
//           );
//     })
// }
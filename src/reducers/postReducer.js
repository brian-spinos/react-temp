//
// The initial state of state.posts
//
// Start off state.posts.users = ['POST_A', 'POST_B']
//
const myState = {
    users: ['POST_A', 'POST_B'],
    foobar: []
}

//
// Reducers are where the logic of the ACTION should go
// you should always return a new copy of `state`,
// never mutate the `state` directly
//
const postReducer = (state=myState, action) => {
    switch(action.type) {
        case 'ACTION_A': {
            state = {...state, foobar: action.payload}
            break
        }

        case 'ACTION_B': {
            state = {...state, foobar: action.payload}
            break
        }

        default: {
            // state = {...state, name: action.payload}
            break
        }
    }

    return state
}

export default postReducer

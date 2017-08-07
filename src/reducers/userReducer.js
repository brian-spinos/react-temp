//
// The initial state of state.users
// example: state.users.start_wars_characters // ['R2D2', 'C3PO']
//
const myState = {
    start_wars_characters: ['R2D2', 'C3PO']
}

//
// Reducers are where the logic of the ACTION should go
// you should always return a new copy of `state`,
// never mutate the `state` directly
//
const userReducer = (state=myState, action) => {
    switch(action.type) {
        case 'CHANGE_FAV_USERS': {
            state = {
                ...state,
                start_wars_characters: action.payload
            }
            break
        }

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

export default userReducer

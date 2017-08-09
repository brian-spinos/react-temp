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

        //
        // Testing promise middleware (START)
        //

        case 'GET_USERS': {
            console.log('GET_USERS called!')
            // state = {...state, userGroup: action.payload}
            break
        } 

        case 'GET_USERS_PENDING': {
            state = {...state, userGroup: action.payload}
            break
        } 

        case 'GET_USERS_REJECTED': {
            state = {...state, userGroup: action.payload}
            break
        } 

        case 'GET_USERS_FULFILLED': {
            let data = action.payload.data
            state = {...state, userGroup: data}
            break
        } 

        //
        // Testing promise middleware (END)
        //

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

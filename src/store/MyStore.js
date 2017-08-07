import { applyMiddleware, combineReducers, createStore } from 'redux'

//
// Reducers
//
import userReducer from '../reducers/userReducer'
import postReducer from '../reducers/postReducer'


//
// Middleware
//
// Pass the middleware variable to the `createStore`
// function call
//
const logger = (store) => (next) => (action) => {
    console.log("ACTION FIRED:", action)
    // action.type = "ANOTHER_ACTION" // we could change the action...
    next(action) // call next middleware
}
const middleware = applyMiddleware(logger)


//
// How to combine all reducers:
//
// (Consider moving this to another file, since we could have many reducers)
//
const reducers = combineReducers({
    users: userReducer, // Will make available `state.users`
    posts: postReducer, // Will make available `state.posts`
    // foo: 'bar' // This does NOT work, it needs to be an actual reducer!
})

//
// Create the store!
//
const MyStore = createStore(reducers, middleware)

//
// Listen to changes in the `MyStore`
//
MyStore.subscribe(() => {
    console.log("STATE CHANGED:", MyStore.getState())
})


export default MyStore

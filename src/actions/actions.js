import axios from 'axios'

//
// This file is just the beginning for ACTIONS, ACTIONS should be split into multiple files as the app grows
//

//
// Workflow:
// Component -(calls)-> Action -(returns)-> objects -(are used in)->
// MyStore.dispatch() function -(calls)-> reducers -(changes)-> state
//

//
// Component -> Action -> objects ->  MyStore.dispatch() -> reducers -> state
//

export function getUser(){
    return {
        type: 'GET_USERS',
        payload: axios.get(`https://jsonplaceholder.typicode.com/users/10`)
    }
}

export function getUserWithId(id){
    return {
        type: 'GET_USERS',
        payload: axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
    }
}

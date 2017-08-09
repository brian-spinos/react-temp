# React app


$ create-react-app blog

- folders: store, reducers, pages, constants, actions, initialState?, components, stylesheets, routes, utils



# Routing setup

$ npm i -S react-router-dom

// App.js
// use react-router-dom version 4
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom'




# Redux setup

$ npm i -S redux
$ npm i -S react-redux

// app.js
import { Provider } from 'react-redux'

in the return function: wrap your app with the `Provider` component

import MyStore from './store/MyStore' // create your store

<Provider store={MyStore}>
    <MyAppComponent />
</Provider>

- create your reducers

- reducers: reducers manage a piece of your GLOBAL STATE,
            you can pass in the initial state there, instead of in the constructor of the component.

- mapStateToProps, don't forget to use `connect` to attach this function to your component! (A must!)

- Redux will now map the state to your props! so use props now!



# Pure functions
- there are no side effects, an input always returns the same output

# Middleware
- In the context of React, middleware is a function that sits between an ACTION and a REDUCER.

# HTTP requests

- npm i -S axios redux-thunk redux-logger redux-promise-middleware
- https://jsonplaceholder.typicode.com/
    - https://jsonplaceholder.typicode.com/users/10




# Authentication

- use jwt  (www.jwt.io)

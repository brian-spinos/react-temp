import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//
// Router components
//
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom'

//
// Redux
//
import { Provider } from 'react-redux'
import MyStore from './store/MyStore'

//
// My components
//
import UserList from './pages/UserList.js'
import PostList from './pages/PostList.js'
import User from './pages/User.js'
import Post from './pages/Post.js'


class App extends Component {
  render() {
    return (
        <Provider store={MyStore}>
            <BrowserRouter>
                <div className="App">
                    <div className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                    </div>

                    {/* Links */}
                    <p><Link to='/users'>Users</Link></p>
                    <p><Link to='/posts'>Posts</Link></p>
                    <p><Link to='/posts'>Misc</Link></p>

                    {/* Mapping of routes and components */}
                    <Switch>
                        <Route exact path='/users' component={UserList}/>
                        <Route exact path='/users/:id' component={User}/>
                        <Route exact path='/posts' component={PostList}/>
                        <Route exact path='/posts/:id' component={Post}/>
                        <Route exact path='/user' component={User}/>
                        <Route exact path='/post' component={Post}/>
                        <Route render={() => {
                            return <p>Link Not Found</p>
                        }} />
                    </Switch>


                </div>
            </BrowserRouter>
        </Provider>
    );
  }
}

export default App;

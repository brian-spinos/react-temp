import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//
// Router components
//
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom'

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
        <BrowserRouter>
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                </div>

                {/* Links */}
                <p><Link to='/users'>Users</Link></p>
                <p><Link to='/posts'>Posts</Link></p>
                <p><Link to='/user'>User</Link></p>
                <p><Link to='/post'>Post</Link></p>


                {/* Mapping of routes and components */}
                <Switch>
                    <Route exact path='/users' component={UserList}/>
                    <Route exact path='/posts' component={PostList}/>
                    <Route exact path='/user' component={User}/>
                    <Route exact path='/post' component={Post}/>
                </Switch>


            </div>
        </BrowserRouter>
    );
  }
}

export default App;

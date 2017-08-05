import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class UserList extends Component {
    constructor(){
        super()

        this.state = {
            users: [
                {id: 1, name: 'Brian', age: 28},
                {id: 2, name: 'Erich', age: 26},
                {id: 3, name: 'Rick', age: 55},
            ]
        }
    }
  render() {
    return (
      <div className="UserList">
        <h1>User List</h1>

        {
            this.state.users.map(user => (
                <p key={user.id}>
                    <Link to={`/users/${user.id}`}>
                        {user.name} ({user.age})
                    </Link>
                </p>
            ))
        }


      </div>
    )
  }
}

export default UserList;

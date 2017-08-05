import React, { Component } from 'react';


class User extends Component {
    constructor(props){
        super()

        this.state = {}

        console.log(props.match.params); // params from link
    }

    render() {
        return (
            <div className="User">
                <h1>User Component #{this.props.match.params.id}</h1>
            </div>
        )
    }
}

export default User;

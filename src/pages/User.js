import React, { Component } from 'react'
import { connect } from 'react-redux'
import MyStore from '../store/MyStore'


class User extends Component {
    constructor(props){
        super()

        console.log(props.match.params); // params from link

        this.changeFavCharacters = this.changeFavCharacters.bind(this)

    }

    changeFavCharacters(){
        // MyStore.dispatch is a function to send data to the  STORE
        MyStore.dispatch({type: "CHANGE_FAV_USERS", payload: ['Anakin', 'Darth Vader']})
    }

    render() {
        return (
            <div className="User">
                <h1>User Component #{this.props.match.params.id}</h1>

                <button onClick={this.changeFavCharacters}>Click Me!</button>

                <h3>Fav Characters</h3>
                {
                    this.props.start_wars_characters.map((character, index )=>(
                        <p key={index}>{character}</p>
                    ))
                }

                <p>foobar: {this.props.foobar}</p>
            </div>
        )
    }
}

//
// Remember to attach this function to this component by using:
//     export default connect(mapStateToProps)(User)
//
function mapStateToProps(state){
    console.log("CURRENT STATE:", state)

    return {
        ...state.users, // will make available `state.users` to `this.props` in this component
        foobar: 123, // will make available `this.props.foobar` in this component
        // users: state.users, // will make available `this.props.users` in this component
    }
}

//
// Attach the `mapStateToProps` function to this component. (A must!)
//
export default connect(mapStateToProps)(User)

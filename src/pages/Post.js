import React, { Component } from 'react';


class Post extends Component {
    constructor(props){
        super()

        this.state = {}

        console.log(props.match.params); // params from link
    }

    render(){
        return (
            <div className="Post">
                <h1>Post Component (id: {this.props.match.params.id})</h1>

                {/*
                <h3>{this.props.post.title}</h3>
                <p>{this.props.post.content}</p>
                <hr />
                */}
                
            </div>
        )
    }
}

export default Post;

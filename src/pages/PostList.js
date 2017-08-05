import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class PostList extends Component {
    constructor(){
        super()
        this.state = {
            posts: [
                {id: 1, title: 'My vacation Part I', content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede "},
                {id: 2, title: 'My vacation Part II', content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede "},
                {id: 3, title: 'My vacation Part III', content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede "},
            ]
        }
    }
  render() {
    return (
      <div className="PostList">
        <h1>Post List</h1>

        {
            this.state.posts.map(post => (
                <p key={post.id}>
                    <Link to={`/posts/${post.id}`}>
                        {post.title}
                    </Link>
                </p>
            ))
        }
      </div>
    )
  }
}

export default PostList;

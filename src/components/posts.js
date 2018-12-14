import React, { Component } from 'react';
import axios from 'axios';

class Posts extends Component {

    state = {
        singalPost: null
    }

    componentDidMount() {
        // console.log(this.props)
        let id = this.props.match.params.posts_id;
        axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
            .then((res) => {
                console.log(res)
                this.setState({
                    singalPost: res.data
                })
            })
    }

    render() {
        const post = this.state.singalPost ? (

            <div>
                <h2>{this.state.singalPost.title}</h2>
                <p>{this.state.singalPost.body}</p>
            </div>

        ) : (

                <div>no post with this id</div>

            )
        return (
            <div>
                <h4>Routing</h4>
                {post}
            </div>
        )

    }
}
export default Posts
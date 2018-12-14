import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Home extends Component {

    state = {
        posts: []
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((res) => {
                console.log(res)
                this.setState({
                    posts: res.data.slice(0, 10)
                })
            })
    }

    render() {
        const { posts } = this.state;
        const postList = posts.length ? (
            posts.map((value, index) => {
                return (
                    <div key={index}>
                        <Link to={'/' + value.id}><span>{value.title}</span></Link>
                        <p>{value.body}</p>
                    </div>
                )
            }
            )) : (<div>no posts yet</div>)

        return (
            <div className="main-div">
                {postList}
                <h1>Home</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, ipsam quis. Mollitia possimus odit nostrum exercitationem qui voluptas error fugit, maiores repellendus beatae quasi. Labore at nihil iste eveniet vitae.</p>

            </div>
        )
    }

}

export default Home;
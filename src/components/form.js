import React, { Component } from 'react';

class Form extends Component {

    state = {
        name: null,
        age: null,
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addNewNinja(this.state);
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    render() {
        return (
            <div className="form-cont">
                <form onSubmit={this.onSubmit}>
                    <label htmlFor="name"></label>
                    <input type="text" id="name" placeholder="name" onChange={this.handleChange} />
                    <label htmlFor="age"></label>
                    <input type="number" id="age" placeholder="age" onChange={this.handleChange} />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default Form;
import React, { Component } from 'react';
import './App.css';
import Navbar from './components/navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';
import Form from './components/form';
import Posts from './components/posts';

class App extends Component {
  state = {
    name: 'mohds',
    ninjas: [
      { name: 'mohd', age: 24, id: 1 }, { name: 'jitu', age: 22, id: 2 }, { name: 'tushar', age: 24, id: 3 }
    ]
  }

  handleClick = (e) => {
    console.log(e)
    this.setState({
      name: 'mohd'
    })
  }

  addNewNinja = (newNin) => {
    // const { ninjas } = this.state;
    newNin.id = Math.random()
    let ninjas = [...this.state.ninjas, newNin] //'...' spread operator
    console.log(newNin, '~~~~~~in app')
    // ninjas.push(newNin) // this will alter directly to the state thats y we use spread operator method
    this.setState({
      ninjas: ninjas
    })
  }

  deleteNinja = (id) => {
    let filteredNinjas = this.state.ninjas.filter(ninja => {
      return ninja.id !== id
    })
    this.setState({
      ninjas: filteredNinjas
    })
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <h1>{this.state.name}</h1>
            <button onClick={this.handleClick}>Click to change</button>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/:posts_id" component={Posts} />
            </Switch>
            <Form addNewNinja={this.addNewNinja} />
          </header>
          <Navbar ninjas={this.state.ninjas} deleteNinja={this.deleteNinja} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

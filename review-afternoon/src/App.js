import React, { Component } from 'react';
import './App.css';
import Navigation from './Components/Navigation';
// import State from './Components/State'
import Layout from './Components/Layout'
import data from './data'

class App extends Component {
  constructor() {
    super()

    this.state = {
      users: [],
      page: 1
    }
    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this)
  }

  componentDidMount(){
    this.setState({
      users: data
    })
  }

  nextPage(){
    this.setState({
      page: this.state.page + 1
    })
  }

  previousPage(){
    this.setState({
      page: this.state.page - 1
    })
  }


  render() {
    const user = this.state.users.filter((user) => {
        return user.id === this.state.page
    }) 
    console.log(user)
    return (
      <div className="App">

        <Layout user={user}/>
        <Navigation nextPage={this.nextPage} previousPage={this.previousPage}/>
      </div>
    );
  }
}


export default App;

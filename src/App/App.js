import React, { Component } from 'react';
import './App.css';
import { getReservations } from '../apiCalls'
import Body from '../Body/Body.js'
import Form from '../Form/Form.js'

class App extends Component {
  constructor() {
    super()
      this.state = {
        reservations: [],
        isLoading: false,
        error: null,
        finishedLoading: false
      }
  }

  componentDidMount() {
    this.setState({ isLoading: true, finishedLoading: false })
      getReservations()
        .then(data => {
            this.setState({
              reservations: data,
              isLoading: false,
              finishedLoading: true
            })
      }).catch(error => this.setState({error, isLoading: false}))
  }

  renderSubmit = (newReservations) => {
    this.setState({reservations: newReservations})
  }

  render() {
    const { reservations, isLoading, error } = this.state
    if(isLoading) {
      return <p className='loading-message'>Loading...</p>
    }
    if(error) {
      return <p>{ error.message }</p>
    }
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <Form reservations={reservations} renderSubmit={this.renderSubmit}/>
        </div>
        <div className='resy-container'>
          <Body reservations={reservations} /> 
        </div>
      </div>
    )
  }
}

export default App;

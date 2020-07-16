import React, { Component } from 'react';
import './App.css';
import { getReservations } from '../apiCalls'
import Body from '../Body/Body.js'

class App extends Component {
  constructor() {
    super()
      this.state = {
        reservations: null,
        isLoading: false,
        error: null
      }
  }

  componentDidMount() {
    this.setState({ isLoading: true })
      getReservations()
        .then(data => this.setState({
          reservations: data,
          isLoading: false
        })).catch(error => this.setState({error, isLoading: false}))
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

        </div>
        <div className='resy-container'>
          < Body
            reservations={reservations}
           /> 
        </div>
      </div>
    )
  }
}

export default App;

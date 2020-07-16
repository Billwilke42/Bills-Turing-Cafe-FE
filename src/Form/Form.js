import React, { Component } from 'react';

class Form extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      date: '',
      time: '',
      numberOfGuests: ''
    }
  }
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value})
  }

  render() { 
    return (
      <section className='form'>
        <input
          type='text'
          className='name-input'
          placeholder='Name'
          aria-label="name"
          name='name'
          value={this.state.name}
          onChange={event => this.handleChange(event)}
        />
        <input
          type='text'
          className='date-input'
          placeholder='Date'
          aria-label="name"
          name='date'
          value={this.state.date}
          onChange={event => this.handleChange(event)}
        />
        <input
          type='text'
          className='time-input'
          placeholder='Time'
          aria-label="time"
          name='time'
          value={this.state.time}
          onChange={event => this.handleChange(event)}
        />
        <input
          type='number'
          className='guests-input'
          placeholder='Number of Guests'
          aria-label="Number of Guests"
          name='numberOfGuests'
          value={this.state.numberOfGuests}
          onChange={event => this.handleChange(event)}
        />
        <button type='submit'>
          Submit
        </button>
      </section>
    )
  }
}


export default Form
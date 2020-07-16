import React from 'react' 
import './ReservationCard.css'

const ReservationCard = props => {
  return (
    <section className='reservation-card'>
      <section className='name'>
        {props.name}
      </section>
      <section className='date'>
        {props.date}
      </section>
      <section className='time'>
        {props.time}
      </section>
      <section className='number-guests'>
        Number of Guests: {props.number}
      </section>
      
    </section>
  )
}

export default ReservationCard
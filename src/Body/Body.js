import React from 'react';
import './Body.css'
import ReservationCard from '../ReservationCard/ReservationCard.js'

const Body = props => {
  if (props.reservations) {
    const reservationCards = props.reservations.map(reservation => (
      <ReservationCard {...reservation}
        key={reservation.id}
      />
    ))
    return (
      <section className="reservation-container">
        { reservationCards } 
      </section>
    )
  } else {
    return <p>Loading...</p>
  }
}

export default Body
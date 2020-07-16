const url = 'http://localhost:3001/api/v1'

const getReservations = () => {
  return fetch(`${url}/reservations`)
    .then(response => response.json())
}

export { getReservations }
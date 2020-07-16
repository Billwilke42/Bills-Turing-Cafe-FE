const url = 'git clone https://github.com/turingschool-examples/turing-cafe-api.git'

const getReservations = () => {
  return fetch(`${url}/reservations`)
    .then(response => response.json())
}

export { getReservations }
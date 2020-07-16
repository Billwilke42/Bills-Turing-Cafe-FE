import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render, waitFor, fireEvent, getByText } from '@testing-library/react';
import '@testing-library/jest-dom';
// import { getReservations } from '../apiCalls';
// jest.mock('../apiCalls')

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('should render a form', async () =>  {
  const { getByText, getByPlaceholderText } = render(<App></App>)

  const nameInput = await waitFor(() => getByPlaceholderText('Name'))
  const dateInput = await waitFor(() => getByPlaceholderText('Month/Day'))
  const timeInput = await waitFor(() => getByPlaceholderText('Time'))

  const reservationCard = await waitFor(() => getByText('Number of Guests: 3'))

  expect(nameInput).toBeInTheDocument()
  expect(dateInput).toBeInTheDocument()
  expect(timeInput).toBeInTheDocument()

  expect(reservationCard).toBeInTheDocument
})

it('should change when things are added to the inputs', async () =>  {
  const { getByPlaceholderText, getByDisplayValue } = render(<App></App>)

  const nameInput = await waitFor(() => getByPlaceholderText('Name'))
  const dateInput = await waitFor(() => getByPlaceholderText('Month/Day'))
  const timeInput = await waitFor(() => getByPlaceholderText('Time'))

  fireEvent.change(nameInput, {target: {value: 'Bill'}})
  fireEvent.change(dateInput, {target: {value: '10/19'}} )
  fireEvent.change(timeInput, {target: {value: '7:00'}} )

  const name = getByDisplayValue('Bill')
  const date = getByDisplayValue('10/19')
  const time = getByDisplayValue('7:00')

  expect(name).toBeInTheDocument()
  expect(date).toBeInTheDocument()
  expect(time).toBeInTheDocument()
})
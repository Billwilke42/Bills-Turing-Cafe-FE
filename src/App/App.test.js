import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render, waitFor, fireEvent } from '@testing-library/react';
import { getReservations } from '../apiCalls';
// jest.mock('../apiCalls')

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('should render a form', async () =>  {
  const { getByRole, getByPlaceholderText } = render(<App></App>)

  const nameInput = await waitFor(() => getByPlaceholderText('Name')
 
})
import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import UpcomingMovies from '../components/UpcomingMovies';
import store from '../redux/store';

describe('UpcomingMovies', () => {
  test('renders the component without errors', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          {' '}
          <UpcomingMovies />
        </BrowserRouter>
      </Provider>,
    );
  });
});

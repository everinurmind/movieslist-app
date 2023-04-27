import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import PopularMovies from '../components/PopularMovies';
import store from '../redux/store';

describe('PopularMovies', () => {
  test('renders the component without errors', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          {' '}
          <PopularMovies />
        </BrowserRouter>
      </Provider>,
    );
  });
});

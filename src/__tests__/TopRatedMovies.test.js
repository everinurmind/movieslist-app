import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import TopRatedMovies from '../components/TopRatedMovies';
import store from '../redux/store';

describe('TopRatedMovies', () => {
  test('renders the component without errors', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          {' '}
          <TopRatedMovies />
        </BrowserRouter>
      </Provider>,
    );
  });
});

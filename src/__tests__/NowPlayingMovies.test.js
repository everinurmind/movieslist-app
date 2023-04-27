import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import NowPlayingMovies from '../components/NowPlayingMovies';
import store from '../redux/store';

describe('NowPlayingMovies', () => {
  test('renders the component without errors', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          {' '}
          <NowPlayingMovies />
        </BrowserRouter>
      </Provider>,
    );
  });
});

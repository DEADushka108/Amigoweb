import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import RegistrationScreen from './registration-screen.jsx';
import {noop, store} from '../../mocks/mocks.js';

it(`Should render RegistrationScreen component correctly`, () => {
  const tree = renderer
    .create((
      <Provider store={store}>
        <RegistrationScreen
          onFormSubmit={noop}
          onSuccessFormSubmit={noop}
        />
      </Provider>
    ), {
      createNodeMock() {
        return {};
      }
    })
    .toJSON();

  expect(tree).toMatchSnapshot();
});

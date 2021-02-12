import React from 'react';
import {Provider} from 'react-redux';
import renderer from 'react-test-renderer';
import {store, userInfo} from '../../mocks/mocks';
import InfoScreen from './info-screen';

it(`Should render InfoScreen component correctly`, () => {
  const tree = renderer
    .create((
      <Provider store={store}>
        <InfoScreen
          userInfo={userInfo}
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

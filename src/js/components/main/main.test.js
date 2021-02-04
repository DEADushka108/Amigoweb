import React from 'react';
import renderer from 'react-test-renderer';
import {MemoryRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {Main} from './main';

it(`Should Main component render correctly`, () => {
  const tree = renderer
    .create((
      <Provider>
        <MemoryRouter>
          <Main />
        </MemoryRouter>
      </Provider>
    ), {
      createNodeMock() {
        return {};
      }
    })
    .toJSON();

  expect(tree).toMatchSnapshot();
});

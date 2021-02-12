import configureStore from 'redux-mock-store';
import {userInfo} from '../user/user';

const NameSpace = {
  USER: `USER`,
};

const noop = () => {};

const mockStore = configureStore();

const store = mockStore({
  [NameSpace.USER]: {
    userInfo
  },
});

export {store, noop};

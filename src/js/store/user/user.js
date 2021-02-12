import {extend} from '../../utils/utils';

const initialState = {
  userInfo: {
    name: ``,
    email: ``,
    phone: ``,
    language: ``,
  },
};

const ActionType = {
  SET_USER_INFO: `SET_USER_INFO`,
};

const ActionCreator = {
  setUserInfo: (userInfo) => ({
    type: ActionType.SET_USER_INFO,
    payload: userInfo,
  }),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_USER_INFO:
      return extend(state, {
        userInfo: action.payload,
      });
  }

  return state;
};

export {reducer, ActionCreator, ActionType};

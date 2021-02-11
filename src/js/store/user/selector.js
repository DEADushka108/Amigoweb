import NameSpace from '../name-space.js';

const USER = NameSpace.USER;

const getUserInfo = (state) => {
  return state[USER].userInfo;
};

export {getUserInfo};

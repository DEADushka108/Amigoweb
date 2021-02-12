import {combineReducers} from 'redux';
import {reducer as user} from './user/user';
import NameSpace from './name-space';

export default combineReducers({
  [NameSpace.USER]: user,
});

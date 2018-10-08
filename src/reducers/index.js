import { combineReducers } from 'redux';
import todos from '@reducers/todos';
import blockList from '@reducers/blockList';

export default combineReducers({
  todos,
  blockList,
});
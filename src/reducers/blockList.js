import ActionType from '@types';

const defaultState = {
  status: false, // 默认关闭
  menus: [],
};

const todos = (state = defaultState, action) => {
  switch (action.type) {
    case ActionType.LIST_STATUS:
      return {
        ...state,
        status: action.value,
      }
    default:
      return state
  }
}
export default todos;
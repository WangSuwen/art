import ActionType from '@types';

export function listStatusToogle(value) {
  return {
    type: ActionType.LIST_STATUS,
    value
  }
}

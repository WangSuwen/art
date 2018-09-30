import { get, post } from './base';

export default {
  getMonitor (params) {
    return get('monitor', params);
  }
};
import reqBase from './base';

export default {
  getMonitor: function (params) {
    return reqBase.get('monitor', params);
  }
};
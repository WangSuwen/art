const isType = type => {
  return function (val) {
      return ({}).toString.call(val) === '[object ' + type + ']';
  };
};
const Utils = {
  /**
   * demo:yyyy-MM-dd hh:mm:ss.S
   * @param  {[type]} fmt  [description]
   * @param  {[type]} date [description]
   * @return {[type]}      [description]
   */
  dateFormat: function (date, _fmt) {
      if (!date) {
          return '';
      }
      var thisDate = date;
      if (typeof date === 'string') {
          return date;
      }
      if (typeof date === 'number') {
          thisDate = new Date(date);
      }
      var o = {
          'M+': thisDate.getMonth() + 1, // 月份
          'd+': thisDate.getDate(), // 日
          'h+': thisDate.getHours(), // 小时
          'm+': thisDate.getMinutes(), // 分
          's+': thisDate.getSeconds(), // 秒
          'q+': Math.floor((thisDate.getMonth() + 3) / 3), // 季度
          'S': thisDate.getMilliseconds() // 毫秒
      };
      var fmt = _fmt || 'yyyy-MM-dd';
      if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, String(thisDate.getFullYear()).substr(4 - RegExp.$1.length));
      for (var k in o) {
          if (new RegExp('(' + k + ')').test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(String(o[k]).length)));
      }
      return fmt;
  },
  getMonthDays (month) {
      var date = new Date();
      var year = date.getFullYear();
      var d = new Date(year, month, 0);
      return d.getDate();
  },
  // 返回上月月份
  getLastMonth () {
      let lastMonth = new Date().getMonth();
      if (lastMonth === 0) {
          lastMonth = 12;
      }
      return lastMonth;
  },
  isBasetype (val) {
      return !(val instanceof Object);
  },
  isObject: isType('Object'),
  isArray: isType('Array'),
  // 深复制:不复制不可枚举类型
  copy (from) {
      var to, n, i;
      var keys;
      var key;
      // 基本类型,直接返回.
      if (this.isBasetype(from)) {
          return from;
      }
      // 数组,复制
      if (this.isArray(from)) {
          to = [];
          n = from.length;
          for (i = 0; i < n; i++) {
              to[i] = this.copy(from[i]);
          }
          return to;
      }

      // 对象,递归复制
      if (this.isObject(from)) {
          to = {};
          keys = Object.keys(from);
          for (i = 0, n = keys.length; i < n; i++) {
              key = keys[i];
              to[key] = this.copy(from[key]);
          }
          return to;
      }
      return 0;
  },
  // 深度 merge
  merge (from) {
      let to = {};
      var _merge = (obj, whole) => {
          // debugger
          for (let n in obj) {
              if (n === 'exports') {
                  continue;
              }
              let data = obj[n];
              if (this.isObject(data)) {
                  let initObj = whole[n] || {};
                  whole[n] = _merge(data, initObj);
              } else {
                  whole[n] = data;
              }
          }
          return whole;
      };
      for (var i = 0; i < from.length; i++) {
          let obj = from[i];
          to = _merge(obj, to);
      }
      return to;
  },
  // 判断是否是手机设备
  isTelePhone () {
      let ua = window.navigator.userAgent.toLowerCase();
      let reg = /iphone|android|nokia|sony|ericsson|mot|samsung|sgh|lg|philips|panasonic|alcatel|lenovo|cldc|midp|wap|mobile/;
      return reg.test(ua);
  },
  addZero (data) {
      return (data < 10 ? ('0' + data) : data);
  }
};
export default Utils;

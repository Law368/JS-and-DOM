//IE Support Node List Polyfill
if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = function (callback, thisArg) {
    thisArg = thisArg || window;
    for (var i = 0; i < this.length; i++) {
      callback.call(thisArg, this[i], i, this);
    }
  };
}

if (
  !('classList' in document.documentElement) &&
  Object.defineProperty &&
  typeof HTMLElement !== 'undefined'
) {
  Object.defineProperty(HTMLElement.prototype, 'classList', {
    get: function () {
      var self = this;
      function update(fn) {
        return function (value) {
          var classes = self.className.split(/\s+/),
            index = classes.indexOf(value);

          fn(classes, index, value);
          self.className = classes.join(' ');
        };
      }

      var ret = {
        add: update(function (classes, index, value) {
          ~index || classes.push(value);
        }),

        remove: update(function (classes, index) {
          ~index && classes.splice(index, 1);
        }),

        toggle: update(function (classes, index, value) {
          ~index ? classes.splice(index, 1) : classes.push(value);
        }),

        contains: function (value) {
          return !!~self.className.split(/\s+/).indexOf(value);
        },

        item: function (i) {
          return self.className.split(/\s+/)[i] || null;
        },
      };

      Object.defineProperty(ret, 'length', {
        get: function () {
          return self.className.split(/\s+/).length;
        },
      });

      return ret;
    },
  });
}

if (!Array.prototype.forEach) {
  Array.prototype.forEach = function (fn, scope) {
    for (var i = 0, len = this.length; i < len; ++i) {
      fn.call(scope, this[i], i, this);
    }
  };
}

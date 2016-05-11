if (!Object.prototype.pip) {
  Object.defineProperty(Object.prototype, 'pip', {
    enumerable: false,
    value: function pipValue(cb) {
      return cb(this);
    }
  });
}

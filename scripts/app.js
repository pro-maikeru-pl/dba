define([], function () {
  return function(myName) {
    var that = {};
    var name = myName;
    that.getName = function () {
      return "My name is " + name;
    }
    return that;
  };
});
// 反柯里化
// Function.prototype.unCurrying = function () {
//   var self = this;
//   console.log('this', self)
//   return function () {
//     var obj = Array.prototype.shift.call(arguments);
//     console.log('obj', obj)
//     console.log('this2', self)
//     return self.apply(obj, arguments);
//   };
// };
// var push = Array.prototype.push.unCurrying(),
//   obj = {};
//   console.log('push', push);
// var result = push(obj, "first", "two");
// console.log(result);

// 柯里化
// const curry = (fn, arr = []) => (...args) =>
//   ((arg) => (arg.length === fn.length ? fn(...arg) : curry(fn, arg)))([
//     ...arr,
//     ...args,
//   ]);


const R = require('ramda')

// 练习 1:
// ============
// 使用 _.compose() 重写下面这个函数。提示：_.prop() 是 curry 函数
const isLastInStock = function(cars) {
  var last_car = _.last(cars);
  return _.prop('in_stock', last_car);
};

const p1 = R.compose(
  R.prop('in_stock'), 
  R.last
)

// 练习 2:
// ============
// 使用 _.compose()、_.prop() 和 _.head() 获取第一个 car 的 name

const p2 = R.compose(
  R.prop('name'),
  R.head,
)

// 练习 3:
// ============
// 使用帮助函数 _average 重构 averageDollarValue 使之成为一个组合

// 无须改动 👇
// const _average = function(xs) { return reduce(add, 0, xs) / xs.length; }; 

// const averageDollarValue = function(cars) {
//   const dollar_values = map(function(c) { return c.dollar_value; }, cars);
//   return _average(dollar_values);
// }

const _average = R.compose(
  R.divide(R.__, 2),
  R.reduce(R.add, 0)
)

const p3 = R.compose(
  _average,
  R.map(R.prop('dollar_value')),
)

// 练习 4:
// ============
// 使用 compose 写一个 sanitizeNames() 函数，返回一个下划线连接的小写字符串
// 例如：sanitizeNames(["Hello World"]) //=> ["hello_world"]。

// 无须改动，并在 sanitizeNames 中使用它
// const _underscore = replace(/\W+/g, '_')

const _underscore = R.replace(/\W+/g, '_')
const sanitizeCarName = R.compose(
  _underscore,
  R.toLower,
  R.prop('name'),
)

const p4 = R.compose(
  R.head,
  R.map(sanitizeCarName)
)

// 彩蛋 1:
// ============
// 使用 compose 重构 availablePrices

// const availablePrices = function(cars) {
//   const vailable_cars = _.filter(_.prop('in_stock'), cars);
//   return available_cars.map(function(x){
//     return accounting.formatMoney(x.dollar_value);
//   }).join(', ');
// }


const dollarWithRriceSymbol = R.compose(
  R.concat('$'),
  R.toString,
)

const formatePrice = R.map(R.compose(
  dollarWithRriceSymbol,
  R.prop('dollar_value')
))

const isStock_cars = R.filter(R.prop('in_stock'))

const p5 = R.compose(
  R.join(','),
  formatePrice,
  isStock_cars,
)

// 彩蛋 2:
// ============
// 重构使之成为 pointfree 函数。提示：可以使用 _.flip()

// const fastestCar = function(cars) {
//   const sorted = _.sortBy(
//     function(car){ return car.horsepower },
//     cars
//   )

//   const fastest = _.last(sorted)
//   return fastest.name + ' is the fastest'
// }
const p6 = R.compose(
  R.concat(R.__, ' is the fastest'),
  R.prop('name'),
  R.last,
  R.sortBy(R.prop('horsepower'))
)


const greetingWith = R.flip(R.concat)

const anthorP6 = R.compose(
  greetingWith(' is the fastest'),
  R.prop('name'),
  R.last,
  R.sortBy(R.prop('horsepower'))
)


module.exports = {
  p1,
  p2,
  p3,
  p4,
  p5,
  p6,
  anthorP6
}
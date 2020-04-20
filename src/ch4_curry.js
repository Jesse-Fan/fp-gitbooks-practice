const R  = require('ramda')

// 练习 1
//==============
// 通过局部调用（partial apply）移除所有参数

// ex const words = str => split(' ', str)

// p1 answer1
// p1 :: String -> [a]
const p1 = R.split(' ')

// 练习 1a
//==============
// 使用 `map` 创建一个新的 `words` 函数，使之能够操作字符串数组
// p1a :: [a] -> [[a]]
const p1a = R.map(p1)

// 练习 2
//==============
// 通过局部调用（partial apply）移除所有参数
// ex: const filterQs = xs => filter(x => match(/q/i, x), xs)

// p2:: [a] -> [a]
const p2 = R.filter(R.match(/q/i))

// 练习 3
//==============
// 使用帮助函数 `_keepHighest` 重构 `max` 使之成为 curry 函数

// 无须改动:
const _keepHighest = (x, y) => 
  x >= y ?
  x :
  y

// 重构这段代码:
const max = function(xs) {
  return reduce(function(acc, x){
    return _keepHighest(acc, x);
  }, -Infinity, xs);
};

const p3 = R.reduce(_keepHighest, -Infinity)

// 彩蛋 1:
// ============
// 包裹数组的 `slice` 函数使之成为 curry 函数
// //[1,2,3].slice(0, 2)
const _originSlice = Array.prototype.slice
const _customSlice = (start, end, list) =>
  _originSlice.call(list, start, end)
const _curryedSlice = R.curry(_customSlice)

const p4 = _curryedSlice(0, 2)

// 彩蛋 2:
// ============
// 借助 `slice` 定义一个 `take` curry 函数，该函数调用后可以取出字符串的前 n 个字符。

const take = (len, list) => _curryedSlice(0)(len, list)
const p5 = R.curry(take)

module.exports = {
  p1,
  p1a,
  p2,
  p3,
  p4,
  p5,
}
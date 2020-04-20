const ch4  = require('../src/ch4_curry')

test('练习1 通过局部调用（partial apply）移除所有参数', () => {
  expect(ch4.p1('a b c')).toEqual(['a', 'b', 'c'])
})

test('练习1a 使用 `map` 创建一个新的 `words` 函数，使之能够操作字符串数组', () => {
  expect(ch4.p1a(['a b c', 'd e f'])).toEqual(
    [
      ['a', 'b', 'c'],
      ['d', 'e', 'f'],
    ]
  )
})

test('练习2 通过局部调用（partial apply）移除所有参数', () => {
  const expectedList = ['quick', 'quarry']
  expect(ch4.p2(['quick', 'camels', 'quarry']))
    .toEqual(
      expect.arrayContaining(expectedList)
    )
})

test('使用帮助函数 `_keepHighest` 重构 `max` 使之成为 curry 函数', () => {
  expect(ch4.p3([323,523,554,123,5234])).toEqual(5234)
})

test('包裹数组的 `slice` 函数使之成为 curry 函数', () => {
  expect(ch4.p4([1, 2, 3, 4, 5]))
    .toEqual(
      expect.arrayContaining([1, 2])
    )
})

test('借助 `slice` 定义一个 `take` curry 函数，该函数调用后可以取出字符串的前 n 个字符', () => {
  const take3Element = ch4.p5(3)

  expect(take3Element([1,2,3,4]))
    .toEqual(
      expect.arrayContaining([1, 2, 3])
    )
})
const ch5 = require('../src/ch5_compose')

// 示例数据
const CARS = [
  {name: "Ferrari FF", horsepower: 660, dollar_value: 700000, in_stock: true},
  {name: "Spyker C12 Zagato", horsepower: 650, dollar_value: 648000, in_stock: false},
  {name: "Jaguar XKR-S", horsepower: 550, dollar_value: 132000, in_stock: false},
  {name: "Audi R8", horsepower: 525, dollar_value: 114200, in_stock: false},
  {name: "Aston Martin One-77", horsepower: 750, dollar_value: 1850000, in_stock: true},
  {name: "Pagani Huayra", horsepower: 700, dollar_value: 1300000, in_stock: false}
]

test('使用 _.compose() 重写下面这个函数。提示：_.prop() 是 curry 函数', () => {
  const isLastInStock = ch5.p1(CARS)
  expect(isLastInStock).not.toBeTruthy()
})

test('使用 _.compose()、_.prop() 和 _.head() 获取第一个 car 的 name', () => {
  const firstCarName = ch5.p2(CARS)
  expect(firstCarName).toBe('Ferrari FF')
})

test('使用帮助函数 _average 重构 averageDollarValue 使之成为一个组合', () => {
  const averageDollarValue = ch5.p3(CARS)

  expect(averageDollarValue).toBe(2372100)
})

test('使用 compose 写一个 sanitizeNames() 函数，返回一个下划线连接的小写字符串', () => {
  const firstSanitizedCarName = ch5.p4(CARS)
  expect(firstSanitizedCarName).toBe('ferrari_ff')
})

test('使用 compose 重构 availablePrices', () => {
  const lastFormatePrice = ch5.p5(CARS)
  expect(lastFormatePrice)
    .toBe('$700000,$1850000')
})

test('重构使之成为 pointfree 函数。提示：可以使用 _.flip()', () => {
  const fastestCarName = ch5.p6(CARS)
  const fastestCarName2 = ch5.anthorP6(CARS)
  expect(fastestCarName)
    .toBe('Aston Martin One-77 is the fastest')

  expect(fastestCarName2)
    .toBe('Aston Martin One-77 is the fastest')
})
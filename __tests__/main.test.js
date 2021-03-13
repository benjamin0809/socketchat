// file: test/main.test.js
var main = require('../src/main'); 
test('should equal 55 when n === 10', () => {
  expect(main.fibonacci(10)).toBe(55);
});
const DateUtils = require('../src/utils/date.utils') 

test('DateUtils.getCurrentDate("2019-8-1") should be 2019-08-01', () => { 
  expect(DateUtils.getCurrentDate('2019-8-1')).toBe('2019-08-01');
});

test('DateUtils.getCurrentDate("2019-8-01") should be 2019-08-01', () => { 
  expect(DateUtils.getCurrentDate('2019-8-01')).toBe('2019-08-01');
});

test('DateUtils.getCurrentDate("2019-18-1") should be NaN-aN-aN', () => { 
  expect(DateUtils.getCurrentDate('2019-18-1')).toBe('NaN-aN-aN');
});

test('DateUtils.getCurrentDate("2019-8-1") should be 2019-08-01', () => { 
  expect(DateUtils.getCurrentDate('2019-8-1')).toBe('2019-08-01');
});

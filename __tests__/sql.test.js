const Sql = require('../src/database/sql.utils.js');
test('select count(*)  from article', async () => {
  var promise = new Sql().query(`select count(*) as total from article`)
  var res = await promise 
  expect(res[0].total > 0).toBeTruthy();
});


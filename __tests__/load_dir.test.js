var loadDir = require('../load_dir');

var Module = loadDir('__tests__/load_dir_module_test'); 

for(let key in Module) {
  test(`Module.${key}() should be ${key}`, () => {
    expect(Module[key]()).toBe(key);
  });
  
}
 
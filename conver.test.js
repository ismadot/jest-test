const {unitObj, convert} = require('./conver');
// const convert = require('./conver');

test('kb to mb,gb,tb', () => {
  expect(unitObj(1024, 'kb')).toStrictEqual({ kb: 1024, mb: 1, gb: 0.0009765625, tb: 9.5367431640625e-7 });
});

test('mb to kb,gb,tb', () => {
  expect(unitObj(1024, 'MB')).toStrictEqual({ kb:1048576, mb: 1024, gb: 1, tb: 0.0009765625 });
});

test('gb to mb,kb,tb', () => {
  expect(unitObj(1, 'GB')).toStrictEqual({ kb: 1048576, mb: 1024, gb: 1, tb: 0.0009765625 });
});

test('gb to mb,kb,tb', () => {
  expect(unitObj(1, 'TB')).toStrictEqual({ kb: 1073741824, mb: 1048576, gb: 1024, tb: 1});
});

test('error convert ', () => {
  expect(unitObj(1, 'ecta')).toBe('la unidad representada no se encuentra entre los casos');
});

test('convert split 1 GB', () => {
  expect(convert('1 GB')).toStrictEqual({ kb: 1048576, mb: 1024, gb: 1, tb: 0.0009765625 });
});

test('convert split 700 MB', () => {
  expect(convert('700 MB')).toStrictEqual({ kb: 716800, mb: 700, gb: 0.68359375, tb: 0.000667572021484375 });
});

test('convert split erro', () => {
  expect(convert('700 aw')).toBe('la unidad representada no se encuentra entre los casos');
});

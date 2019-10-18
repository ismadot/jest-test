const unit = require('./conver');

test('kb to mb,gb,tb', () => {
  expect(unit(1024, 'kb')).toStrictEqual({ kb: 1024, mb: 1, gb: 0.0009765625, tb: 9.5367431640625e-7 });
});

test('mb to kb,gb,tb', () => {
  expect(unit(1024, 'MB')).toStrictEqual({ kb:1048576, mb: 1024, gb: 1, tb: 0.0009765625 });
});

test('gb to mb,kb,tb', () => {
  expect(unit(1, 'GB')).toStrictEqual({ kb: 1048576, mb: 1024, gb: 1, tb: 0.0009765625 });
});

test('gb to mb,kb,tb', () => {
  expect(unit(1, 'TB')).toStrictEqual({ kb: 1073741824, mb: 1048576, gb: 1024, tb: 1});
});

test('error convert ', () => {
  expect(unit(1, 'ecta')).toBe('la unidad representada no se encuentra entre los casos');
});

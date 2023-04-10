import validation from '../js/main';

test('correct valid', () => {
  expect(validation('ddd__dd3d')).toBe(true);
});
test('incorrect valid', () => {
  expect(validation('ddd__dd3d4')).toBe(false);
});
test('incorrect valid ', () => {
  expect(validation('ddd__dd3d_')).toBe(false);
});
test('incorrect valid end line', () => {
  expect(validation('ddd__dd34d4')).toBe(false);
});
test('incorrect valid start line', () => {
  expect(validation('1ddd__dd3d4')).toBe(false);
});
test('incorrect valid not latin character', () => {
  expect(validation('ваыва44')).toBe(false);
});

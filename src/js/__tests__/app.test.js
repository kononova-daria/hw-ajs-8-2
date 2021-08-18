import ErrorRepository from '../app';

test.each([
  [
    1,
    'Error 1',
  ],
  [
    3,
    'Error 3',
  ],
])('Метод возвращает текст ошибки по коду', (received, expected) => {
  const errors = new ErrorRepository();

  expect(errors.translate(received)).toBe(expected);
});

test('Метод возвращает unknown error, если код ошибки не найден', () => {
  const errors = new ErrorRepository();
  const received = 4;
  const expected = 'Unknown error';

  expect(errors.translate(received)).toBe(expected);
});

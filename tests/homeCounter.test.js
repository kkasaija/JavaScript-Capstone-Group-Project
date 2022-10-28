import movieCount from '../src/modules/homeCounter.js';

describe('movie counter function', () => {

  test('testing 0 home elements', () => {
    const arr = [];
    expect(movieCount(arr)).toBe(0);
  });

  test('testing 10 home elements', () => {
    const arr = [0, 1, 2, 3, 4, 6, 7, 8, 9, 10];
    expect(movieCount(arr)).toBe(10);
  });
});

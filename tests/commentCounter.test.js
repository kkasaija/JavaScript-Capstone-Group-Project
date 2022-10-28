import commentCount from '../src/modules/commentCounter';

describe('comment counter function', () => {
  test('testing 0 home elements', () => {
    const arr = [];
    expect(commentCount(arr)).toBe(0);
  });
  test('testing 10 comment elements', () => {
    const arr = [0, 1, 2, 3, 4, 6, 7, 8, 9, 10];
    expect(commentCount(arr)).toBe(10);
  });
});
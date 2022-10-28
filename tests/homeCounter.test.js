import movieCount from '../src/modules/homeCounter.js';

describe('homeCounter function', () => {

  test('testing 0 home elements', () => {
    const div = document.createElement('div');
    expect(movieCount(div)).toBe(0);
  });

  test('testing  2 home elements', () => {
    const div = document.createElement('div');
    const span = document.createElement('span');
    const span2 = document.createElement('span');
    div.append(span, span2);
    expect(movieCount(div)).toBe(2);
  });
});

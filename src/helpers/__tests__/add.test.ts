import { Add } from '../add';

describe('test add', () => {
  it('test the return value', () => {
    expect(Add(20, -30)).toBe(-10);
    expect(Add(20, 30)).toBe(50);
  });
});

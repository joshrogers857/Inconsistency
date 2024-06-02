import { getRandomNumber } from '@/helpers/math';

describe('getRandomNumber', () => {
  it('returns a random number less than or equal to the specified max', () => {
    expect(getRandomNumber(10)).toBeLessThanOrEqual(10);
  });

  it('returns a whole number', () => {
    expect(getRandomNumber() % 1).toEqual(0);
  });

  it('does not return a number higher than 100 by default', () => {
    expect(getRandomNumber()).toBeLessThanOrEqual(100);
  });
});

import { getRandomNumber } from '@/helpers/math';

describe('getRandomNumber', () => {
  it('should return a number less than or equal to the specified max', () => {
    expect(getRandomNumber(10)).toBeLessThanOrEqual(10);
  });

  it('should return a whole number', () => {
    expect(getRandomNumber() % 1).toEqual(0);
  });

  it('should not return a number higher than 100 by default', () => {
    expect(getRandomNumber()).toBeLessThanOrEqual(100);
  });
});

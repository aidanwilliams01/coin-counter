import { coinCounter } from "../src/coin-counter";

describe('coinCounter', () => {
  const amount = 4.99;

  test('should return a string', () => {
    expect(typeof coinCounter(amount)).toEqual('string');
  });

  test('should return a string with the correct number of quarters', () => {
    expect(coinCounter(amount)).toEqual('19 quarters');
  });
})
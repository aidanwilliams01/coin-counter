import { coinCounter, closureCoinCounter } from "../src/coin-counter";

describe('coinCounter', () => {

  test('should return a string', () => {
    expect(typeof coinCounter(4.75)).toEqual('string');
  });

  test('should return a string with the correct number of quarters', () => {
    expect(coinCounter(4.75)).toEqual('19 quarter(s)');
  });

  test('should return a string with the correct number of quarters and dimes', () => {
    expect(coinCounter(4.95)).toEqual('19 quarter(s), 2 dime(s)');
  });

  test('should return a string with the correct change', () => {
    expect(coinCounter(4.99)).toEqual('19 quarter(s), 2 dime(s), 4 pennie(s)');
  });

  test('should return a correctly displayed string when there are no quarters', () => {
    expect(coinCounter(.24)).toEqual('2 dime(s), 4 pennie(s)');
  });
})

describe('closureCoinCounter', () => {

  test('should return a string', () => {
    const coinCounter = closureCoinCounter(4.75);
    expect(typeof coinCounter()).toEqual('string');
  });

  test('should return a string with the correct number of quarters', () => {
    const coinCounter = closureCoinCounter(4.75);
    expect(coinCounter()).toEqual('19 quarter(s)');
  });
})
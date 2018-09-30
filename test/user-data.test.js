'use strict';

const userData = require('../user-data');

test('userData returns expected minX, minY, minZ, maxX, maxY, and maxZ', () => {
  const result = userData(50, [-10, 15, 2.78]);
  expect(result.minX).toBe(-25);
  expect(result.minY).toBe(-25);
  expect(result.minZ).toBe(-25);
  expect(result.maxX).toBe(25);
  expect(result.maxY).toBe(25);
  expect(result.maxZ).toBe(25);
});

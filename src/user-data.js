'use strict';

/**
 * `userData`
 * Setup skybox default userData.
 * @param {Number} size - Length of each side of the skybox cube. 
 * @param {Array} position - Coordinates where the skybox is to be positioned: Array of 3 numbers.
 */
const userData = (size, position) => {
  const width = size;  // x.
  const height = size; // y.
  const depth = size;  // z.

  return {
    size: [width, height, depth],
    position,
    minX: -(width / 2),
    maxX: width / 2,
    minY: -(height / 2),
    maxY: height / 2,
    minZ: -(depth / 2),
    maxZ: depth / 2
  };
};

module.exports = userData;

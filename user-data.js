'use strict';

// Setup skybox default userData.
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

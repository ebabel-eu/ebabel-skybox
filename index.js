'use strict';

// Setup skybox default userData.
const userData = (size, position) => {
  const width = size;  // x.
  const height = size; // y.
  const depth = size;  // z.

  return {
    position,
    size: [width, height, depth],
    minX: -(width / 2),
    maxX: width / 2,
    minY: -(height / 2),
    maxY: height / 2,
    minZ: -(depth / 2),
    maxZ: depth / 2
  };
};

/**
 * `Skybox`
 * Setup a skybox mesh and add it to the scene.
 * @param {object} input - Parameters and dependencies.
 * @param {object} input.THREE - Core library of THREE.js
 * @param {object} input.scene - Scene object where the skybox will be added.
 * @param {array} input.directions - Array of image paths for all skybox sides, by directions.
 * @param {number?} input.size - Size of the skybox. Defaults to 10000.
 * @param {array?} input.position - Position of the skybox as 3D coordinates. Defaults to [0, 0, 0].
 * @returns {object} Skybox mesh.
 */
const skybox = (input) => {
  const {
    THREE,
    scene,
    directions,
    size = 10000,
    position = [0, 0, 0]
  } = input;

  const _userData = userData(size, position);

  const geometry = new THREE.BoxBufferGeometry(
    _userData.size[0],
    _userData.size[1],
    _userData.size[2]
  );

  const material = directions.map(direction => new THREE.MeshBasicMaterial({
    map: new THREE.TextureLoader().load(direction),
    side: THREE.BackSide
  }));

  const model = new THREE.Mesh(geometry, material);
  model.name = 'skybox';
  model.userData = _userData;
  model.position.set(
    _userData.position[0],
    _userData.position[1],
    _userData.position[2]
  );
  scene.add(model);

  return model;
};

module.exports = skybox;

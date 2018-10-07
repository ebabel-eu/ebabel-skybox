'use strict';

// Setup skybox default userData.
const userData = require('./user-data');

/**
 * `Skybox`
 * Setup a skybox mesh and add it to the scene.
 * @param {Object} input - Parameters and dependencies.
 * @param {Object} input.THREE - Core library of THREE.js
 * @param {Object} input.scene - Scene object where the skybox will be added.
 * @param {Array} input.directions - Array of image paths for all skybox sides, by directions.
 * @param {Number?} input.size - Size of the skybox. Defaults to 10000.
 * @param {Array?} input.position - Position of the skybox as 3D coordinates. Defaults to [0, 0, 0].
 * @returns {Object} Skybox mesh.
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

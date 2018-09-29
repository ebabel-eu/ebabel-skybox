'use strict';

// Setup skybox default userData.
const userData = () => {
  const width = 10000;  // x.
  const height = width; // y.
  const depth = width;  // z.

  return {
    position: [0, 0, 0],
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
 * @param {object} THREE - Core library of THREE.js
 * @param {object} scene - Scene object where the light will be added.
 * @returns {object} Skybox mesh.
 */
const skybox = (THREE, scene) => {
  const _userData = userData();

  const geometry = new THREE.BoxBufferGeometry(
    _userData.size[0],
    _userData.size[1],
    _userData.size[2]
  );

  const directions = ['ft', 'bk', 'up', 'dn', 'rt', 'lf']
    .map(filename => `../assets/whirlpool/large-files/whirlpool_${filename}.jpg`);;

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

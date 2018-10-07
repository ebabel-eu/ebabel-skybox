'use strict';

const { mockTHREE } = require('ebabel-mocks');

const skybox = require('../src/ebabel-skybox');

let THREE;
let scene;
let directions;

beforeEach(() => {
  THREE = mockTHREE;
  scene = new THREE.Scene();
  directions = ['front.jpg', 'back.jpg', 'up.jpg', 'down.jpg', 'right.jpg', 'left.jpg'];
});

test('skybox default name is as expected when it is not set', () => {
  const result = skybox({ THREE, scene, directions });
  expect(result.name).toBe('skybox');
});

test('skybox default position is set to the 3D origin', () => {
  const result = skybox({ THREE, scene, directions });
  expect(result.userData.position).toEqual([0, 0, 0]);  // toBe vs toEqual, see https://jestjs.io/docs/en/using-matchers
});

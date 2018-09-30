'use strict';

const skybox = require('../index');

let THREE;
let scene;
let directions;

beforeEach(() => {
  // Mocking.
  THREE = {
    BoxBufferGeometry: class BoxBufferGeometry {
      constructor() {}
    },
    TextureLoader: class TextureLoader {
      constructor() {}
      load() {}
    },
    MeshBasicMaterial: class MeshBasicMaterial {
      constructor() {}
    },
    Mesh: class Mesh {
      constructor() {
        this.position = {
          set: () => {}
        };
      }
    }
  };

  scene = { add: () => {} };

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

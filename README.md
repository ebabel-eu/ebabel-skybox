# ebabel-skybox
[![Build Status](https://travis-ci.org/ebabel-eu/ebabel-skybox.svg?branch=master)](https://travis-ci.org/ebabel-eu/ebabel-skybox)

Setup a skybox mesh and add it to the scene.

## Instructions for Module Usage in your project/game

### Install
```
npm i --save ebabel-skybox
```

### Usage
The images to display inside the skybox are for each direction:

- ft: front
- bk: back
- up: up
- dn: down
- rt: right
- lf: left

```
const skybox = require('ebabel-skybox');

// Example graphic paths. Graphics not included in this repository.
const directions = [
  '../assets/whirlpool/large-files/whirlpool_ft.jpg',
  '../assets/whirlpool/large-files/whirlpool_bk.jpg',
  '../assets/whirlpool/large-files/whirlpool_up.jpg',
  '../assets/whirlpool/large-files/whirlpool_dn.jpg',
  '../assets/whirlpool/large-files/whirlpool_rt.jpg',
  '../assets/whirlpool/large-files/whirlpool_lf.jpg',
];

skybox({ THREE, scene, directions });
```

## Instructions for further development of this module i.e. ebabel-skybox

## Fork and clone repo, then start your new develop branch

* fork repository on github.com
* git clone 'fork repository'
* git checkout -b develop

### First step when developing this module
```
npm install
```

### Before checking in code test this module 
```
npm test
```

### Generate documentation for this module
```
npm run jsdoc
```
var copyFile = require('./copyfile.js');

console.log(__dirname)
var dir = './../src/lib';
copyFile('./../node_modules/PixiTs/PIXI.d.ts', dir+'/PIXI.d.ts');

var copyFile = require('./copyfile.js');

console.log(__dirname)
var dir = './../dist';
copyFile('./../lib/ElectricField.js', dir+'/ElectricField.js');
copyFile('./../node_modules/PixiTs/PIXI.js', dir+'/PIXI.js');

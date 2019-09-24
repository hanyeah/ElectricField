var copyFile = require('./copyfile.js');

console.log(__dirname)
var dir = './../dist';
copyFile('./../lib/ElectricField.js', dir+'/ElectricField.js');
copyFile('./../node_modules/glslCanvasTs/GlslCanvas.js', dir+'/GlslCanvas.js');

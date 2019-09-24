var copyFile = require('./copyfile.js');

console.log(__dirname)
var dir = './../src/lib';
copyFile('./../node_modules/glslCanvasTs/GlslCanvas.d.ts', dir+'/GlslCanvas.d.ts');

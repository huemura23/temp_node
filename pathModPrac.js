const path = require('path');

//modulesPractice.js was chosen at random, the code within is irrelevant.
console.log(path.sep);
const filePath = path.join('/desktop','JS Practice','Modules','modulesPractice.js');

console.log(filePath);

const base = path.basename(filePath);
console.log(base);

const absolute = path.resolve(__dirname,'Modules','utilsTutorial.js');
console.log(absolute);
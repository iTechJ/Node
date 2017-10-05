let path = require('path');

console.log(path.basename(__filename));
console.log(path.basename(__filename, '.js'));

console.log(path.delimiter);

console.log(path.dirname(__filename));
console.log(path.extname(__filename));

let unNormalizedPathDot = './3-fs';
let unNormalizedPathTwoDot = '../2-file-system/3-fs';

console.log(path.normalize(unNormalizedPathDot));
console.log(path.normalize(unNormalizedPathTwoDot));
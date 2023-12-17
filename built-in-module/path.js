const path = require("path");

const file = "/Documents/belajar/nodejs/index.js";

console.log(path.basename(file));
console.log(path.dirname(file));
console.log(path.extname(file));
console.log(path.parse(file));

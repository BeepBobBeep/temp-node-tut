// npm - global commands, comes with node
// nmp --version or npm --v

// Local Dependency - To be used only in this project
// npm i <packageName>

// Global Dependency - Use it in any project
// npm i -g <packageName>

// package.json - manifest file(stores important info about project/package)
// manual approach (create package.json in the root, then create properties etc)
// OR USE
// npm init (step by step , press enter to skip)
// npm init -y (everything default)

const _ = require('lodash');

const items = [1,2,[3,[4,5]]];
// flattenDeep method of lodash flattens a nested array into one
const newItems = _.flattenDeep(items);
console.log(newItems);
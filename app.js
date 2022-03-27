//npm - global command, comes with node.
//npm --version OR npm --v

//can install as local dependency - use only in this particular project.
//npm i <packageName>

//or, install as global dependency - use in any project
//npm install -g <packageName>
//sudo install -g <packageName> (mac)

//package.json - manifest file (stores important info about project/package)
//manual approach (create package.json in the root, create properties, etc.)
//npm init (step by step, press enter to skip)
//npm init -y (everything default)

const _ = require('lodash');
const { clearScreenDown } = require('readline');
const items = [1,[2,[3,[4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);

console.log('hello people');
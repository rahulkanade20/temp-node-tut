const _ = require('lodash');

const arr = [1, [2, [3, [4]]]];

const newArray = _.flattenDeep(arr);

console.log(newArray);
const fs = require('fs');

const {readFileSync, writeFileSync} = require('fs');

const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

console.log(typeof first);
console.log(first, second);

// writeFileSync('./content/result-sync.txt', `Here is the result : ${first}, ${second}`); // create/override

writeFileSync('./content/result-sync.txt', `Here is the result : ${first}, ${second}`, {flag:'a'}); // create/append

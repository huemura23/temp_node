const { readFileSync, writeFileSync, writeFile } = require('fs');
console.log('start');

const first = readFileSync('./Modules/test.txt', 'utf8');
const second = readFileSync('./Modules/test2.txt', 'utf-8');
console.log(first, second);


//creates a new file if it doesn't exist.
//with the flag 'a', appends the existing file.
writeFileSync('./Modules/result-sync.txt',
    `Here is the result: ${first}, ${second}`,
    { flag: 'a' }
);

console.log('done with this task.');
console.log('starting the next one.');


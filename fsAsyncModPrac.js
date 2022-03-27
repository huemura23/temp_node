const { readFile, writeFile } = require('fs');

//asynchronous, doesn't necessarily happen one after the other. Nonblocking.
readFile('./Modules/test.txt', 'utf-8', (err, result) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log('first done');
    const first = result;
    readFile('./Modules/test2.txt', 'utf-8', (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log('second done');
        const second = result;
        writeFile(
            './Modules/result-asynch.txt',
            `Here is the result: ${first}, ${second}`,
            (err,result) => {
                if(err){
                    console.log(err);
                    return;
                }
                console.log('written');
        })
    })
})
console.log('not done yet, actually.');
const amount = 9;

if (amount < 10) {
    console.log('small number');
}
else {
    console.log('large number');
}

console.log('hello world, it\'s fun here.');

setInterval(() =>{
    console.log('hello world');
},1000); 

 function sayHello(name) {
    console.log('Hello ' + name);
}
sayHello('Hiroki'); 

/*
    alternative export set methods:
    module.exports.items = ['item1', 'item2'];
    module.exports.singlePerson = person;
*/
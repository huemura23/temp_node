//CommonJs, every file in node is a module by default.
//Modules - Encapsulated Code (only share minimum)

//GLOBALS - NO WINDOW!

/*
    _dirname - path to current directory
    _filename - file name
    require - function to use modules (Common JS)
    module - info about curret module (file)
    process - info about env where the program is being executed

    console.log(__dirname);
    console.log(__filename);
*/


const names = require('./namesTutorial');
const sayHi = require('./utilsTutorial');

const john = names.john;
const peter = names.peter;

sayHi('Hiroki');
sayHi('Susan');
sayHi(john);
sayHi(peter);
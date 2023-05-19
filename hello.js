var colors = require('colors');

function holaperro(){
    console.log("Hello Perro!");
}

function holaGreen(){
    console.log('hello perro'.green);
}

function print(text){
    console.log(text.toString());
}

function printG(text){
    console.log(text.toString().green);
}

function printR(text){
    console.log(text.toString().red);
}

function printY(text){
    console.log(text.toString().yellow);
}

function printB(text){
    console.log(text.toString().blue);
}



module.exports = {
    holaperro: holaperro,
    holaGreen: holaGreen,
    print:print,
    printG:printG,
    printB:printB,
    printR:printR,
    printY:printY
};
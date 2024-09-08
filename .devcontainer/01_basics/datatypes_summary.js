// # primitive
// 7 types => string,number,boolean,null,undefined,symbol,bigint
const score = 100
const scorevalue = 100.3
const isloggedin = false
const outsidetemp = null
let useremail;
const id = Symbol('123')
const anotherid = Symbol('123')

console.log(id === anotherid);
const bignumber = 34232434334324n

// reference (Non-Primitive)
// array,obj,functions

const heros = ["shaktiman", "naagraj", "doga"];
let myobj = {
    name: "hitesh",
    age: 22,
}

const myfunction = function(){
    console.log("hello world");
}

console.log(myfunction);

console.log(typeof bignumber);

console.log(typeof myfunction);

console.log(typeof heros);

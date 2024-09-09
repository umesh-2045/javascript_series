const name = "umesh"
const repocount = 50

// console.log(name + repocount + "value");

// console.log(`hello my name is ${name} and my repo count is ${repocount}`);

const gamename = new String('umeshh-h');
console.log(gamename[0]);

console.log(gamename.__proto__);

console.log(gamename.length);

console.log(gamename.toUpperCase());

console.log(gamename.charAt(2));

console.log(gamename.indexOf('h'));

const newstring = gamename.substring(0, 4)
console.log(newstring);

const anotherstring = gamename.slice(-8, 4)
console.log(anotherstring);

const newstring1 = "    umesh    "
console.log(newstring1);
console.log(newstring1.trim());

const url = "htttps://umesh.com/umesh%20jagtap"

url.replace('%20', '-')

console.log(url.replace('%20', '-'));


console.log(url.includes('umesh'));
console.log(url.includes('singh'));

console.log(gamename.split('-'));

//array
// mixed data types are allowed
const myArr = [0, 1, 2, 3, 4, 5]
// console.log(myArr[1]);

// array methods

// myArr.push(6) // add element in array
// myArr.pop() //delete the last element from the array

// myArr.unshift(0) // add the value in first index place 
// myArr.shift() // delete the first value

// console.log(myArr.includes(9)); // we can ask question and it will give ans in true and false
// console.log(myArr.indexOf(9));

const newarr = myArr.join()
console.log(myArr);
console.log(newarr);

// slice and splice

console.log("A",myArr);

const myn1 = myArr.slice(1,3)

console.log(myn1);
console.log("B",myArr);

const myn2 = myArr.splice(1,3)
console.log("C",myArr);
console.log(myn2);


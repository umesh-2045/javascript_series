// Dates
/*
let mydate = new Date()
console.log(mydate);
console.log(mydate.toString());
// Thu Sep 12 2024 11: 23: 50 GMT +0000(Coordinated Universal Time)
console.log(mydate.toDateString());
// Thu Sep 12 2024
console.log(mydate.toISOString());
// 2024-09-12T11:23:50.600Z
console.log(mydate.toJSON());
// 2024-09-12T11:23:50.600Z
console.log(mydate.toLocaleDateString());
// 9/12/2024
console.log(mydate.getUTCHours());
// 11
*/

let myCreatedDate = new Date(2024, 0, 23)
// console.log(myCreatedDate.toDateString());

// let anotherdate=new Date("2023-01-14")
// console.log(anotherdate.toLocaleString());

// let myTimeSpamp = Date.now()
// console.log(myTimeSpamp);
// console.log(myCreatedDate.getTime());

// console.log(Math.floor(Date.now() / 1000));

let newDate = new Date()
console.log(newDate);
// console.log(newDate.getVarDate());
console.log(newDate.getDay());

newDate.toLocaleString('default',{
    weekday:"long"
})
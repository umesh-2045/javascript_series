// const tinderUser = new Object()  // this is  a singletopn object

const tinderUser = {}; // this is not a singleton object

tinderUser.id = "1234abc"
tinderUser.name = "sammy"
tinderUser.isloggedin = false

// console.log(tinderUser);

const reularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "umesh",
            lastname: "jagtap"
        }
    }
}

// console.log(reularUser.fullname); // we can access other object by usin (.) operator ex: .fullname.userfullname;

const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "a", 4: "b" }

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2)
const obj3 = { ...obj1, ...obj2 }
// console.log(obj3);


const users = [
    {
        id:1,
        email:"U@gmail.com"
    },
    {
        id:1,
        email:"U@gmail.com"
    },
    {
        id:1,
        email:"U@gmail.com"
    }
]

users[1].email;

console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));

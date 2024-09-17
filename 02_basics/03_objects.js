
// singleton   

// object literals 

const mySym = Symbol("key1")

const JsUser = {
    name: "umesh",
    "full name": "jagtap",
    [mySym]: "mykey1",
    age: 18,
    location: "badlapur",
    email: "umesh@google.com",
    isLoggedIn: false,
    lastLoginDay: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

// JsUser.email = "umesh@chatgpt.com"; //to change the input
// Object.freeze(JsUser)
// JsUser.email = "umesh@facebook.com";
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("hello js user");
}
JsUser.greetingtwo = function(){
    console.log(`hello js user , ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingtwo());


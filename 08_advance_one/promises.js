// const promiseOne = new Promise(function (resolve, reject) {
//     //Do an async task
//     //DB calls, dcryptography, network
//     setTimeout(() => {
//         console.log('async task is complete');
//         resolve()
//     }, 1000);
// })

// promiseOne.then(function () {
//     console.log('Promise consume');

// })

// new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         console.log('async task 2');
//         resolve()

//     }, 2000);
// }).then(function () {
//     console.log('async 2 resolved');
// })


// const promiseThree = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         resolve({ username: "umesh", email: "umesh@mail.com" })
//     }, 1000)
// }).then(function (user) {
//     console.log(user);
// })

// const promiseFour = new promise(function (resolve, reject) {
//     setTimeout(function () {
//         let error = true
//         if (!error) {
//             resolve({ username: "umesh", password: "123" })
//         } else {
//             reject('ERROR:Something went wrong')
//         }
//     }, 1000)
// })
// promiseFour.then((user) => {
//     console.log(user);
//     return user.username
// }).then((username) => {
//     console.log(username);
// }).catch((error) => {
//     console.log(error);
// }).finally(() => {
//     console.log("the promise is either resolved or rejected");
// })

// const promiseFive = new promise((resolve, reject) => {
//     setTimeout(() => {
//         let error = true
//         if (!error) {
//             resolve({ username: "tejas", password: "123" })
//         } else {
//             reject('ERROR:Something went wrong')
//         }
//     }, 1000);
// })

// async function consumePromiseFive() {
//     try {
//         const response = await promiseFive
//         console.log(response);
//     } catch (error) {
//         console.log(error);
//     }
// }

// consumePromiseFive();

// async function getAllUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }
// getAllUsers();

fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => console.log(error))
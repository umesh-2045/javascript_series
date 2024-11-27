const mynums = [1, 2, 3]
// const mytotal = mynums.reduce(function (acc, currval) {
//     console.log(`acc:${acc}and currval:${currval}`);

//     return acc + currval
// }, 0)

// const mytotal = mynums.reduce((acc, curr) => acc + curr, 0)

// console.log(mytotal);


const shoppingcart = [
    {
        item: "js course",
        price: 2999
    },
    {
        item: "webdev course",
        price: 1999
    },
    {
        item: "py course",
        price: 2500
    }
]

const price = shoppingcart.reduce((acc, item) => acc + item.price, 0)
console.log(price);

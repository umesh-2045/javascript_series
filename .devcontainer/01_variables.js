const accountid = 144553
let accountemail = "umeshtejas@gmail.com"
var accountpassword = "1234"
accountcity = "jaipur"

// accountid = 2 // not allowed
// prefer not to use var because of issue in block scope and functional scope

console.log(accountid);

accountemail = "hdhfh@ff.com"
accountpassword = "3433423"
accountcity = "bengaluru"

console.table([accountid,accountemail,accountpassword,accountcity])
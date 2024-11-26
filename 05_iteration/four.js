const myObj = {
    js: 'javascript',
    cpp: 'c++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObj) {
    console.log(`${key} shortcut is for ${myObj[key]}`);

}


const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    console.log(programming[key]);
}

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")

for (const key in map) {
//objects jese map() vo iterable m=nhi he matlab run karnekebad error nhi ayega
}

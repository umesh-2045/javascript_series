const coding = ["js", "ruby", "java", "python", "cpp"]

coding.forEach(function (item) {
    console.log(item);
    // 1st type to run
})

coding.forEach((value) => {
    console.log(value);

})

function printme(item) {
    console.log(item);

}

coding.forEach(printme)//2nd type

coding.forEach((item, index, arr) => {
    console.log(item, index, arr);

})

const myCoding = [
    {
        languageName: "javascript",
        languagefilename: "js"
    },
    {
        languageName: "java",
        languagefilename: "j"
    },
    {
        languageName: "python",
        languagefilename: "py"
    }
]


myCoding.forEach((item) => {
    console.log(item.languageName);

})
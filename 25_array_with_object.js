/*
    it is common to see array with objects inside --> used in real life scenario
*/
const arr = [
    {
        languageName: "C++",
        fileExtension: "cpp"
    },
    {
        languageName: "dart",
        fileExtension: "dart"
    },
    {
        languageName: "phyton",
        fileExtension: "py"
    },
    {
        languageName: "javascript",
        fileExtension: "js"
    }
]

arr.forEach(  (item)=> {
    console.log(`${item.languageName}   and its extension is    ${item.fileExtension}`);
}  )
import fs from 'fs';

// CRUD operations 

// let data1 = fs.readFileSync("./file1.txt");

// // let data2 = fs.readFileSync("./file2.txt");


// // fs.writeFileSync("./file2.txt",data2.toString() + data1.toString())

// fs.appendFileSync("./file2.txt","I am the appended content")

// let data3 = fs.readFileSync("./file2.txt");

// console.log(data3.toString());

 //fs.writeFileSync("./file4.txt","")

// fs.unlinkSync("./file4.txt")

// for directries and folders 

// fs.mkdirSync("myfolder");

//fs.rmdirSync("myfolder")

// console.log(fs.existsSync("myfolder"))

// let path = "//Users//saurabhbansal//Desktop//codes //WebDevelopmentCodingThinker//Html"

// console.log(fs.readdirSync(path))

let data = fs.readFileSync("./../nodeAutomation/wiki.js")

console.log(data.toString());


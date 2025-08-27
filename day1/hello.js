const data=require("fs")
data.writeFileSync("hello.txt","hello!! Node.js.... ")

data.appendFileSync("hello.txt","finally!! practice makes women perfect")

const readData=data.readFileSync("hello.txt","utf-8")
console.log(readData)
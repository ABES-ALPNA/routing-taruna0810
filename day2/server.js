const server=require("http")
server.createServer((req,res)=>{
res.write("sfsff")
res.end("")
}).listen(4013,()=>{
console.log("serf")
})

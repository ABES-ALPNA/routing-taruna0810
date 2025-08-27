const server=require("http")
server.createServer((req,res)=>{
    if(req.url=='/')
    {
        res.write("this is my first page")
    }
    else
        if(req.url=="/about"){
            res.write("this is about page")
        }
        else
            if(req.irl=="/contact")
            {
                res.write("this is contact page")
            }
            else{
                res.write("404 page not found")
                res.end("")
            }
}).listen(4000,()=>{
    
console.log("server is running")
})
//arrow function read

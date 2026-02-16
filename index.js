// without port(9000) server  will not run 
// postman for testing 

var request=require("express")
var app=request()
app.get("/",(req,res)=>{
    res.send("Hello world")
})
app.listen(9000,()=>console.log("Server running on port 9000"))



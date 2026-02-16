var express = require("express");

var app=express();

app.get('/', function(req,resp){
    resp.send("hello from API");
});

app.get('/square/:n',function(req,resp){
    var n =Number(req.params.n);
    resp.send(`square of ${n} is : ${n*n}`)
});

app.get('/addition/:a/:b',function(req,resp){
    var a= Number (req,param.a);
    var b= Number (req,params.b);
    var c= a+b;
    resp.send(`add of ${a} and ${b} is : ${c}`);
});

app.listen(9000,()=>console.log("Server running on port 9000"))


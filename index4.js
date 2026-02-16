const express =require("express")
const app= express();

app.use(express.json()); /// to read json body

// in memory array (act like db )
let users=[
    {id:1, name:"ali",age:34},
    {id:2, name:"pari",age:32}
]

// POST // users 
app.post("/users",(req,resp)=>{
    const newUser={
        id: users.length+1,
        name:req.body.name,
        age: req.body.age
    };

    users.push(newUser);
    resp.send(newUser);
})


//Get Users
app.get("/users",(req,resp)=>{
    resp.send(users);
})


// ================READ=========================
//Get//users/:id
app.get("/users/:id",(req,resp)=>{
    const user= users.find(u=>u.id==req.params.id);

    if (!user) return resp.status(404).send("User not found");

    resp.send(user);
})

// ===============UPDATE=====================
//put /user/id
// => function in js 

app.put("/users/:id", (req,resp)=>{
    const user= users.find(u=> u.id==req.params.id);

    if(!user) return resp.status(404).send("user not found");

    user.name=req.body.name;
    user.age=req.body.age;

    resp.send(user);
});



// ===============DELETE================
app.delete("/users/:id",(req,resp)=>{
    users=users.filter(u => u.id!= req.params.id);
    resp.send("user deleted");
});


app.listen(3000, ()=>{
    console.log("server running on port 3000");
})

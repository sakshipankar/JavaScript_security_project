const express =require("express")
const app= express();

app.use(express.json()); // to read json body

// in memory array (act like db )
let students=[
    {id:1, name:"lali",mobileNo:943839,address:"bhopal",age:34},
    {id:2, name:"bali",mobileNo:789839,address:"bubneswar",age:24},
]

// POST // users 
app.post("/students",(req,resp)=>{
    const newStudent={
        id: students.length+1,
        name:req.body.name,
        mobileNo:req.body.mobileNo,
        address:req.body.address,
        age: req.body.age
    };

    students.push(newStudent);
    resp.send(newStudent);
})


//Get Users
app.get("/students",(req,resp)=>{
    resp.send(students);
})

// ================READ=========================
//Get//Students/:id
app.get("/students/:id",(req,resp)=>{
    const student= students.find(u=>u.id==req.params.id);

    if (!student) return resp.status(404).send("Student not found");

    resp.send(student);
})


// ===============UPDATE=====================
//put /user/id
// => function in js 

app.put("/students/:id", (req,resp)=>{
    const student= students.find(u=> u.id==req.params.id);

    if(!student) return resp.status(404).send("student not found");

    student.name=req.body.name;
    student.age=req.body.age;
    student.address=req.body.address;
    student.mobileNo=req.body.mobileNo;

    resp.send(student);
});



// ===============DELETE================
app.delete("/students/:id",(req,resp)=>{
    students=students.filter(u => u.id!= req.params.id);
    resp.send("Student info deleted");
});


app.listen(2000, ()=>{
    console.log("server running on port 2000");
})


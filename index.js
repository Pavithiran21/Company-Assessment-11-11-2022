const express = require("express");

const body = require("body-parser");
const cons = require("mysql");
const app = express();
const fileupload = require("express-fileupload");
const cors = require("cors");
app.use(cors());
app.use(body.json());
app.use(fileupload());
app.use(body.urlencoded({extended:true}));
app.use(express.static('public'));


const data = cons.createConnection({
    host:"localhost",
    user:"root",
    password:"Pavithiran@21",
    database:"assessment"
});

data.connect(function(err){
    if(err){
        console.log(err);
    }
    else{
        console.log("Database Connected");
    }
});

app.post('/signup',(req,res)=>{
    let {email,password,firstname,phone,lastname}=req.body;
   
    
    
    let sql = 'insert into signup(firstname,lastname,email,password,phone)values(?,?,?,?,?,?,?)';

    data.query(sql,[email,password,firstname,lastname,email,phone],(error,result)=>{
    if(error){
        let s ={"status":"error"};
        res.send(s)
    }
    else{
        let success = {"status":"success"};
        res.send(success);
    }
})
})

app.post('/',(req,res)=>{
    let{email,password}=req.body;
    let sql ='select * from signup where username=?';

    data.query(sql,[email],(error,result)=>{
        if(error){
            let e={"status":"error"};
            res.send(e);
        }else if(result.length>0){
            let email1 = result[0].email;
            let password1 = result[0].password ;
            let id = result[0].id;
            let role = result[0].role;


            if(email1 === email && password1 === password){
                let s ={"status":"success"};
                res.send(s);
            }
            else{
                let s = {"status":"Invalid"};
                res.send(s);
            }

        }
        else{
            let s = {"status":"error"};
            res.send(s);
        }
    })
})



app.listen(5002);

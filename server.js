const express=require("express");
const app=express();
const db = require('./models');
const {User}=db;
const cors = require('cors');
const routes =require('./src/app/api/route.js');
const bodyParser =require('body-parser');


//inject body parser and public folder
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ type: ['application/json', 'application/csp-report', 'application/reports+json'] }));

app.use(cors());

app.use("/api/",routes)

app.get("/api/testing",async (req,res) => {
    let users=await User.findAll();
    return res.send({status:200,message:'fetched user successfully',data:users});
});

app.listen(4000,() => console.log(`server listen at http://localhost:${4000}`));
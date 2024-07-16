const express = require("express");
const server = express();
const path = require("path");
const fs = require("fs");
/* .env */
require("dotenv").config();

/* Adding Mongoose */
const mongoose= require("mongoose");
const USER = require("./MODEL/user");
const {userRoutes} = require("./Routes/userRoute");
const {AuthRouters} = require("./Routes/loginRoute");
server.set("view engine","ejs");

server.use(express.static(path.join(__dirname,"Public")));
server.use(express.urlencoded({extended:true}))

server.use((req,res,next)=>{
   USER.findById("66947eb9e3659ea21de0e2df").then((user)=>{
    req.user = user;
    next();
   })
})
server.use(AuthRouters);
server.use("/user",userRoutes); 

server.use((req,res,next)=>{
    res.send("No Page Found");
    next();
})



mongoose.connect(process.env.MONGO_URL_NEW).then((result)=>{
    console.log(result);
    server.listen(3002);
    console.log("Successfully connected to the database");
    return USER.findOne().then((user)=>{
        if(!user){
            USER.create({
                username: "User1",
                email: "user1@gmail.com",
                password: "user1111"
            })
        }
        return user;
    })
}).then((result)=>{
    console.log(result)
}).catch(err=>{
    console.log(err)
})

const express = require("express");
const server = express();
const path = require("path");
const fs = require("fs");
const mongoose = require('mongoose');
const {userRoutes} = require("./Routes/userRoute")

server.set("view engine","ejs");
server.set("views","views")
server.use(express.static(path.join(__dirname,"Public")));
server.use(express.urlencoded({extended:true}))
/*1. User Routes */

server.use("/user",userRoutes); 

server.listen(3002);
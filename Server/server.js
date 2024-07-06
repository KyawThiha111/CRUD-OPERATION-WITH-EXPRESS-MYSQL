const express = require("express");
const server = express();
const path = require("path");
const fs = require("fs");
const DATABASE = require("./utils/database")
const {userRoutes} = require("./Routes/userRoute")

server.set("view engine","ejs");
server.set("views","views")
server.use(express.static(path.join(__dirname,"Public")));
server.use(express.urlencoded({extended:true}))
/*1. User Routes */

server.use("/user",userRoutes); 
DATABASE.MongoConnector();
server.listen(3002);
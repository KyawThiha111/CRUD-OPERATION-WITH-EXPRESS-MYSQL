const express = require("express");
const path = require("path");
const postRouteController = require("../CONTROLLER/post")
const Route = express.Router();

Route.get("/",(req,res)=>{
    res.render("main",{title:"Home"})
})

Route.get("/index",(req,res)=>{
    res.redirect("/user")
})

Route.get("/update_page",(req,res)=>{
   res.render("updatePost",{title:"update"})
})

Route.get("/profile",postRouteController.profileRoute)


Route.post("/",postRouteController.formPost)

Route.get("/personDetails/:ID",postRouteController.DynamicRoute);

Route.get("/profile/delete/:ID", postRouteController.deleteDynamicRoute);

module.exports = {userRoutes:Route};
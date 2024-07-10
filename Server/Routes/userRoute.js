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

Route.get("/personDetails/:ID",postRouteController.DynamicRoute)

Route.get("/profile/postDetail/edit/:ID", postRouteController.getEditPage);

Route.post("/profile/postDetail/edit/:ID",postRouteController.postEditPosts);

Route.get("/profile/postDetail/delete/:ID",postRouteController.deletePost);

module.exports = {userRoutes:Route};
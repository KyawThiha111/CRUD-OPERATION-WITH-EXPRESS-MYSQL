const express = require("express");
const Router = express.Router();
const LoginController = require("../CONTROLLER/login")

Router.get("/login",LoginController.getLoginPage);

Router.post("/login",LoginController.postLoginData)

module.exports = {AuthRouters:Router};


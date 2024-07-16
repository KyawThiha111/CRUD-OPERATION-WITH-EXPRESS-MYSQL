
exports.getLoginPage = (req,res)=>{
    res.render("AUTH/login",{title:"Login Page"})
}

exports.postLoginData = (req,res)=>{
    res.setHeader("Set-Cookie","isLogin=true");
    res.redirect("/user/profile")
}

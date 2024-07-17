
exports.getLoginPage = (req,res)=>{
    res.render("AUTH/login",{title:"Login Page"})
}

exports.postLoginData = (req,res)=>{
    req.session.isLogin = true;
    res.redirect("/user/profile")
}

exports.postLogout = (req,res)=>{
    req.session.destroy((result)=>{
        res.redirect("/user/profile")
    });
}

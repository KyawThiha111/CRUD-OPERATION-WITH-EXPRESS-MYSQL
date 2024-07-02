
const { NUMBER } = require("sequelize")
const POST = require("../MODEL/post")

exports.profileRoute = (req,res)=>{
    POST.findAll().then((posts)=>{
        res.render("profile", {user:posts, title: "Profile"})
    }).catch((err)=>{
        console.log(err)
    })
}

exports.formPost = (req,res)=>{
    let {username,age,description} = req.body;
    POST.create({
        username,
        age,
        description
    }).then((result)=>{
        console.log(result);
        res.redirect("/user/profile")
    }).catch((err)=>{
        console.log(err)
    })
}

exports.DynamicRoute = (req,res)=>{
    const id = Number(req.params.ID);
    POST.findByPk(id).then((eachPost)=>{
        res.render("personDetail", {matchedUser: eachPost, title: "EachPost"})
    }).catch((err)=>{
        console.log(err)
    })
}

exports.deleteDynamicRoute = (req,res)=>{
    const ID =req.params.ID;
    POST.destroy({
        where:{
            id : ID
        }
    }).then((result)=>{
        res.redirect("/user/profile")
    }).catch((err)=>{
        console.log(err)
    })
}
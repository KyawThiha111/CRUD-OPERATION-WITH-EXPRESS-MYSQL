
const { NUMBER } = require("sequelize")
const POST = require("../MODEL/post")

exports.profileRoute = (req,res)=>{
    POST.findAll(
        {order:[
            ['createdAt','DESC']
        ]}
    ).then((posts)=>{
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


exports.editDynamicRoute = (req,res)=>{
    const postID = req.params.ID;
    POST.findByPk(postID).then((result)=>{
        res.render("editPost",{title:"Edit Page", matchedPost:result})
    }).catch((err)=>{
        console.log(err)
    })
}

exports.editPostForm = (req,res)=>{
   const {userid,username,age,description} = req.body;
   POST.update({username:username,age:age,description:description},{
    where:{
        id:userid
    }
   }).then((result)=>{
    res.redirect("/user/profile")
   }).catch(err=>{
    console.log(err)
   })
}
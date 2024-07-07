const POSTCOLLECTION = require("../MODEL/post");
const POST = [];
exports.profileRoute = (req,res)=>{
    POSTCOLLECTION.getPostAll().then((result)=>{
        res.render("profile",{title:"Profile",posts:result})
    })
}

exports.formPost = (req,res)=>{
    const {title,snippet,blog} = req.body;
    const post = new POSTCOLLECTION(title,snippet,blog);
    post.setPost().then((result)=>{
        console.log(result);
        res.redirect("/user/profile")
    })
   .catch(err=>{
    console.log(err)
   })
}

exports.DynamicRoute = (req,res)=>{
    const id = req.params.ID;
    POSTCOLLECTION.getEachPost(id).then((result)=>{
        console.log(result)
        res.render("personDetail",{title:"Each Post",matchedUser:result[0]})
    }).catch((err)=>{
        console.log(err)
    })
}
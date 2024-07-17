
const POST = require("../MODEL/post");

exports.profileRoute = (req,res)=>{

  POST.find().select("title snippet").populate("userid","username").sort({createdAt:"desc"}).then((result)=>{
    res.render("profile",{posts:result,title:"Profile",isLogin:req.session.isLogin===true});
    console.log(result);
    console.log(req.session)
  }).catch(err=> console.log(err))
}

exports.formPost = (req,res)=>{
    let {title,snippet,blog} = req.body;
    POST.create({title,snippet,blog,userid:req.user}).then((result)=>{
    console.log(result);
    res.redirect("/user/profile");
    }).catch(err=>{
        console.log(err)
    })
}

exports.DynamicRoute = (req,res)=>{
    const ID = req.params.ID;
    POST.findById(ID).then(result=>{
        res.render("personDetail",{title:"Person Detail",matchedUser:result});  
    })
}

 exports.getEditPage = (req,res)=>{
    const ID = req.params.ID;
    POST.findById(ID).then((result)=>{
        console.log(result);
        res.render("editPost",{title:"edit Page",result})
    })
 }

 exports.postEditPosts = (req,res)=>{
    const {title,snippet,blog} = req.body;
    const ID = req.params.ID;
    POST.findByIdAndUpdate(ID,{title,snippet,blog}).then((result)=>{
        console.log(result);
        res.redirect("/user/profile")
    }).then(err=>{
        console.log(err)
    })
 }

 exports.deletePost = (req,res)=>{
    const ID = req.params.ID;
    POST.findByIdAndDelete(ID).then(()=>{
      res.redirect("/user/profile")
    }).catch(err=>{
        console.log(err)
    })
 }
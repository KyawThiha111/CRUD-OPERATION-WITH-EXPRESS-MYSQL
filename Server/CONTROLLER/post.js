
const POST = require("../MODEL/post")

exports.profileRoute = (req,res)=>{
    POST.getDataFun().then(([row])=>{
        res.render("profile",{title:"profile",user:row})
    }).catch(err=>{
        console.log(err)
    })
    
}

exports.formPost = (req,res)=>{
    let {username,age,description} = req.body;
    const postObjToInsert = new POST(username,age,description);
    postObjToInsert.setPost().then(()=>{
        res.redirect("user/profile")
    }).catch((err)=>{
        console.log(err)
    })
}

exports.DynamicRoute = (req,res)=>{
    const id = Number(req.params.ID);
    POST.getEachData(id).then(([row])=>{
        console.log(row)
        res.render("personDetail",{title:"Person Detail",matchedUser:row[0]});
    }).catch((err)=>{
        console.log(err)
    })  
}
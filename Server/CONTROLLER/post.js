const POST = [];
exports.profileRoute = (req,res)=>{
    res.render("profile",{title:"profile",user:POST})
}

exports.formPost = (req,res)=>{
    let post = req.body;
    POST.push({...post, id:POST.length+1})
    console.log(POST)
    res.redirect("user/profile")
}

exports.DynamicRoute = (req,res)=>{
    const ID = Number(req.params.ID);
    const matchedUser = POST.filter(post=> post.id===ID);
    console.log("Done")
     console.log(matchedUser)
     res.render("personDetail",{title:"Person Detail",matchedUser:matchedUser[0]});
}
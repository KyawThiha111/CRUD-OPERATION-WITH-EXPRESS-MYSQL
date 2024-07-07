const DATABASE = require("../utils/database");
const mongodb = require("mongodb")
class POST{
    constructor(title,snippet,blog){
        this.title = title,
        this.snippet = snippet,
        this.blog = blog
    }

    setPost(){
         return DATABASE.getDatabase()
         .collection("posts")
         .insertOne(this)
         .then((result)=>{
            console.log("Successfully added to the database")
         }).catch((err)=>{
            console.log(err)
         })
    }

    static getPostAll(){
        return DATABASE.getDatabase()
        .collection("posts")
        .find()
        .toArray()
        .then((result)=>{
            console.log("Successfully fetched from the database")
            return result
        }).catch(err=>{
            console.log(err)
        })
    }

    static getEachPost(id){
       return DATABASE.getDatabase()
        .collection("posts")
        .find({_id:new mongodb.ObjectId(id)})
        .toArray()
        .then((result)=>{
            console.log(result)
            return result
        }).catch((err)=>{
            console.log(err)
        })
    }
}

module.exports = POST;